import React, { useState, useEffect } from "react";
import { getWeatherData } from "./components/weather";
import WeatherReport from "./components/WeatherReport";
import {
  Grid,
  Box,
  Container,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Tokyo, Japan");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getWeatherData(city);
      setTimeout(() => {
        setWeatherData(data);
        setCity("");
        setLoading(false);
      }, 800);
      
    } catch (error) {
      console.log("Something went wrong");
      setLoading(false);
      setWeatherData(null)
    }
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  return (
    <div>
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box m={3}>
          {/* <h1>Weather Report</h1> */}
          <Paper color="#fff">
            <Grid 
              container 
              alignItems="stretch" 
              m={3}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label=""
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="City, ZIP, Lat/Long"
                color="secondary"
              />
              <Button 
                aria-label="add" 
                type="button" 
                onClick={() => getData()}>

                {loading ? (
                  <CircularProgress />
                ) : (
                  <div className="">Search</div>
                )}
              </Button>
            </Grid>
          </Paper>
        </Box>
      </Grid>

      {weatherData !== null ? (
        <WeatherReport 
          weatherData={weatherData} 
          loading={loading} />
      ) : null}
    </Container>
    </div>
  );
};

export default App;
