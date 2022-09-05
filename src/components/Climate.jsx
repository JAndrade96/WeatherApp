import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Climate = () => {
    const [clim, setClim] = useState({})
    const [isFahrenheit, setIsFahrenheit] = useState(true)

useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        const crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=db51c15065378d8d461f73fc213d9804`)
        .then(res => setClim(res.data))
      }
}, [])


console.log(clim)


    return (
        <div>
            <h2> Wheather App </h2>
            <p> {clim.name} , {clim.sys?.country} </p>
            <p className='clim-measure'> 
            {isFahrenheit? (clim.main?.temp - 241.15).toFixed(0) : ((clim.main?.temp - 241.15) - 32).toFixed(0)} {" "} {isFahrenheit ? "°F" : "°C"} </p>
            <p className='clim-description'> {clim.weather?.[0].description} </p>
            <p className='clim-description'> Wind Speed: {clim.wind?.speed} </p>
            <p className='clim-description'> Cloud: {clim.clouds?.all}% </p>
            <p className='clim-description'> Pressure: {clim.main?.pressure}mb </p>
            <img className='clim-img' src={`http://openweathermap.org/img/wn/${clim.weather?.[0].icon}.png`} alt="" />
            <button className='clim-button' onClick={() => setIsFahrenheit(!isFahrenheit) }> 
                    Changen to {isFahrenheit ? "°C" : "°F"}
            </button>
        </div>
    );
};

export default Climate;
