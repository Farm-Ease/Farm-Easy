import React, { useState } from 'react';
import Search from '../../Components/citySearch/citySearch';
import './Weather.css';
import Navbar from '../../Components/navbar/Navbar1'
import CurrentWeather from '../../Components/current-weather/Current-weather'
import { CURRENT_WEATHER_KEY,CURRENT_WEATHER_URL,FORECAST_URL } from '../../api';
import Forecast from '../../Components/forecast/Forecast';

function Weather() {
  const [currentWeather,setCurrentWeather]=useState(null);
  const [forecast,setForecast]=useState(null);

  const handleOnSearchChange=(searchData)=>{
    console.log(searchData);
    const[lat,lon]= searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${CURRENT_WEATHER_URL}?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${CURRENT_WEATHER_KEY}&units=metric`);
    const forecastFetch = fetch(`${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_KEY}&units=metric`);
    
    
    Promise.all([currentWeatherFetch,forecastFetch])
      .then(async (response) => {
        const  weatherResponse = await response[0].json();
        const  forecastResponse = await response[1].json();

        
        setCurrentWeather({city : searchData.label, ...weatherResponse});
        setForecast({city : searchData.label, ...forecastResponse});
      })
      .catch((err)=>console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <>
    <Navbar/>
      <div className="container">
          <h1>Weather Forecasting</h1>
          <br />
          <Search onSearchChange={handleOnSearchChange}/>
          {currentWeather && <CurrentWeather data={currentWeather}/>}
          {forecast && <Forecast data={forecast}/>}

      </div>
    </>
  );
}

export default Weather;
