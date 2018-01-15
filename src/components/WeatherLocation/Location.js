import React from 'react';
import PropTypes from 'prop-types'
const Location = ({city}) => (  //DESTRUCTURING DIRECTAMENTE EN EL PARAMETRO

//  const {city} = props //DESTRUCTURING SOLO SI LA PROP Y EL DESTINO SE LLLAMAN IGUAL
        <div>
          <h1>
            {city}
          </h1>
        </div>
)

Location.propTypes = {
  city: PropTypes.string.isRequired
}

export default Location;
