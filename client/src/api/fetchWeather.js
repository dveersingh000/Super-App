import axios from 'axios';
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;
export const fetchWeather = async (city="Delhi") => {
    console.log(API_KEY)
    console.log(BASE_URL)
    try {
        const { data } = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city,
            },
        })
        return data;
    } catch(error){
        console.log(error)
    }
    
 }
