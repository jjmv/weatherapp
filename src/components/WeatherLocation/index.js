import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'


// Ejemplo de componente funcional
const WeatherLocation = () => (
  <div>
    <Location city={"Monterrey!"}  />
    <WeatherData />
  </div>
);

export default WeatherLocation;
