import React, { useEffect, useState } from 'react'
import styles from './WeatherWidget.module.css'
import { fetchWeather } from '../api/fetchWeather'
import formatDateAndTime from '../utlis/formatDateAndTime'

const WeatherWidget = () => {
    const [weather, setWeather] = useState({});
    const [dateAndTime, setDateAndTime] = useState({});
    useEffect(() => {
        fetchWeather().then((data) => {
            const { temp_c, condition, pressure_mb, wind_kph, humidity} = data.current;
            setWeather({
                temperature: temp_c,
                condition: condition.text,
                thumbnail: condition.icon,
                pressure: pressure_mb,
                wind: wind_kph,
                humidity
            })
        })
        const {date, time} = formatDateAndTime();
        setDateAndTime({date, time});
    },[])
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {dateAndTime && (
                <>
                    <div className={styles.date}>{dateAndTime.date}</div>
                    <div className={styles.time}>{dateAndTime.time}</div>
                </>
            )}
        </div>
        <div className={styles.content}>
            {weather ? (
                <>
                    <img src={weather.thumbnail} alt="Weather Icon" className={styles.icon} />
                    <div className={styles.condition}>{weather.condition}</div>
                    
                    <div className={styles.details}>
                        <div className={styles.detail}>
                            <div className={styles.temperature}>{weather.temperature}°C</div>
                            
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.label}>Pressure:</span>
                            <span className={styles.value}>{weather.pressure} mb</span>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.label}>Wind:</span>
                            <span className={styles.value}>{weather.wind} kph</span>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.label}>Humidity:</span>
                            <span className={styles.value}>{weather.humidity}</span>
                        </div>
                    </div>
                </>
            ) : (<div>Loading...</div>)}
        </div>
    </div>
  )
}

export default WeatherWidget