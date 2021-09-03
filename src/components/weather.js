import axios from "axios";

const baseUrl = 'https://api.weatherapi.com/v1'

export const getWeatherData = async (cityname) => {
    try {
        const {data} = await axios.get(baseUrl + `/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityname}&aqi=no`)
        return data
    }
    catch(error) {
        throw error;
    }
}