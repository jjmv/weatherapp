import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

 // Uso de Template String, importantes.
const WeatherExtraInfo = ({humidity, wind}) => (
  <div className="weatherExtraInfoCont">
    <span>{`${humidity} % | `}</span>
    <span>{`${wind} wind`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;
