import React from 'react'
import PropTypes from 'prop-types'

 // Uso de Template String, importantes.
const WeatherExtraInfo = ({humidity, wind}) => (
  <div>
    <span>{`${humidity} % | `}</span>
    <span>{`${wind} wind`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;
