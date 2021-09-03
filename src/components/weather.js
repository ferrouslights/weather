import axios from "axios";

const baseUrl = 'https://api.weatherapi.com/v1'
const apiKey = '55aed3d9628946fc92e143041212708'

export const getWeatherData = async (cityname) => {
    try {
        const {data} = await axios.get(baseUrl + `/current.json?key=${apiKey}&q=${cityname}&aqi=no`)
        console.log(data);
        return data
    }
    catch(error) {
        console.log("Error");
    }
}