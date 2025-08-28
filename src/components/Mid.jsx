import React, { useRef, useState, useEffect } from 'react'
import searchicon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const Mid = () => {

    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false)

    const allIcons = {
        "01d" : clear_icon,
        "01n" : clear_icon,
        "02d" : cloud_icon,
        "02n" : cloud_icon,
        "03d" : cloud_icon,
        "03n" : cloud_icon,
        "04d" : drizzle_icon,
        "04n" : drizzle_icon,
        "09d" : rain_icon,
        "09n" : rain_icon,
        "10d" : rain_icon,
        "10n" : rain_icon,
        "13d" : snow_icon,
        "13n" : snow_icon,

    }
    
    const getData = async (city) => {
        if(!city) {
            alert("Please enter city name");
        }
        try {
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API}`
            const response = await fetch(URL);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                return;
            }
            console.log(data);
            console.log(data.main.temp)
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setWeatherData({
                temerature : data.main.temp,
                location : data.name,
                wind_speed : data.wind.speed,
                humidity : data.main.humidity,
                icon : icon
            })
        } catch (error) {
            // console.log("The error is: ",error);
            setWeatherData(false);
            console.log("Error in fetching Weather Data");
        }

    }

    // useEffect(() => {
    //     getData("");
    // }, [])
    

    return (
        <>
        <div className='flex justify-center gap-2 '>
            <input type="text" ref={inputRef} placeholder='Enter City Name' className='border rounded-full py-2 px-4 outline-0'/>
            <a href="#" onClick={() => getData(inputRef.current.value)}><img src={searchicon} alt="searchIcon"  className='border rounded-full p-3'/></a>
        </div>
        <div className='mid flex flex-col items-center gap-5'>
            {weatherData?<>
            <img src={weatherData.icon} alt="clear" className='weather_icon'/>
            <p className='temperature text-5xl'>{weatherData.temerature}&deg;c</p>
            <p className='location text-2xl'>{weatherData.location}</p>
            <div className="weather_data w-full flex justify-around  text-start text-[14px]">
                <div className="col flex gap-2">
                    <img src={humidity_icon} alt="humidity_icon" className='size-5 mt-1.5'/>
                    <div>
                        <p>{weatherData.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col flex gap-2">
                    <img src={wind_icon} alt="wind_icon" className='size-5 mt-1.5'/>
                    <div>
                        <p>{weatherData.wind_speed}km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
            </>:<></>}
            
        </div>
        </>
    )
}

export default Mid
