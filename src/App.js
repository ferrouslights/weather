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
  AppBar,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Pensacola");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getWeatherData(city);
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box m={3}>
          {/* <h1>Weather Report</h1> */}
          <Paper position="static" color="#fff">
            <Grid container alignItems="stretch" m={3}>
              <TextField
                id="filled-secondary"
                variant="filled"
                label="Location"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="City, ZIP, Lat/Long"
              />
              <Button
                color="white"
                aria-label="add"
                type="button"
                onClick={() => getData()}
              >
                Search
              </Button>
            </Grid>
          </Paper>
          {loading ? <CircularProgress /> : false}
        </Box>
      </Grid>

      {weatherData !== null ? (
        <WeatherReport weatherData={weatherData} loading={loading} />
      ) : null}
    </Container>
  );
};

export default App;
