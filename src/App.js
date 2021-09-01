import React, {useState, useEffect} from "react"
import { getWeatherData } from "./components/weather"
import WeatherReport from "./components/WeatherReport"

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('Pensacola')
  // const [loading, setLoading] = useState(false)


  const getData = async () => {
    try{
      const data = await getWeatherData(city)
      setWeatherData(data)
    }catch(error) {
      console.log(error.message);
    }
  }

useEffect(() => {
  getData()
  return () => {
  }
}, [])

  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="City" />
      <button type="button" onClick={() => getData()}>Search</button>
      <WeatherReport weatherData={weatherData} />
    </div>
  )
}

export default App