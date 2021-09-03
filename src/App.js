import React, {useState, useEffect} from "react"
import { getWeatherData } from "./components/weather"
import WeatherReport from "./components/WeatherReport"
import { Grid, Box, Container, TextField, Button, LinearProgress } from "@material-ui/core"

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
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
        {/* <h1>Weather Report</h1> */}
        <TextField id="outlined-basic" variant="outlined" label="Location" type="text" onChange={(e) => setCity(e.target.value)} placeholder="City, ZIP, Lat/Long" />
        <Button color="primary"  aria-label="add" type="button" onClick={() => getData()}>Search</Button>
      </Grid>
      {loading ? (
          <LinearProgress />
      ) : false}

      {weatherData !== null ? (
        <WeatherReport weatherData={weatherData} loading={loading} />
      ) : null}
        
      
    </Container>
  )
}

export default App