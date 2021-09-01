import React, {useState, useEffect} from "react"
import { getWeatherData } from "./components/weather"
import WeatherReport from "./components/WeatherReport"

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('Pensacola')
  const [loading, setLoading] = useState(false)


  const getData = async () => {
    try{
      setLoading(true)
      const data = await getWeatherData(city)
      setWeatherData(data)
      setLoading(false)
    }catch(error) {
      console.log(error.message);
      setLoading(false)
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
      {weatherData !== null ? (
        <WeatherReport weatherData={weatherData} />
      ) : null}
        
      
    </div>
  )
}

export default App