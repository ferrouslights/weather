import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Hidden } from "@material-ui/core";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    borderRadius: 15,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  temp: {
    // fontFamily: 'Rampart One',
    fontSize: 40,
  },
}));

//JSON Organization
// {
//     "location": {
//         "name": "Pensacola",
//         "region": "Florida",
//         "country": "United States of America",
//         "lat": 30.42,
//         "lon": -87.22,
//         "tz_id": "America/Chicago",
//         "localtime_epoch": 1630512720,
//         "localtime": "2021-09-01 11:12"
//     },
//     "current": {
//         "last_updated_epoch": 1630508400,
//         "last_updated": "2021-09-01 10:00",
//         "temp_c": 31.1,
//         "temp_f": 88.0,
//         "is_day": 1,
//         "condition": {
//             "text": "Sunny",
//             "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
//             "code": 1000
//         },
//         "wind_mph": 12.5,
//         "wind_kph": 20.2,
//         "wind_degree": 310,
//         "wind_dir": "NW",
//         "pressure_mb": 1011.0,
//         "pressure_in": 29.84,
//         "precip_mm": 0.0,
//         "precip_in": 0.0,
//         "humidity": 68,
//         "cloud": 0,
//         "feelslike_c": 42.5,
//         "feelslike_f": 108.4,
//         "vis_km": 16.0,
//         "vis_miles": 9.0,
//         "uv": 6.0,
//         "gust_mph": 8.5,
//         "gust_kph": 13.7
//     }
// }

const WeatherReport = ({ weatherData }, { loading }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item alignItems="space-between" xs={12} md={4} lg={4}>
            <Box>
              <ButtonBase className={classes.temp}>
                <Typography variant="h1">
                  {weatherData.current.temp_f}º
                </Typography>
                <Hidden smUp>
                  <img
                    width={128}
                    alt={weatherData.current.condition.text}
                    src={"https:" + weatherData.current.condition.icon}
                  ></img>
                </Hidden>
              </ButtonBase>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h2">
                  {weatherData.location.name},{" "}
                  {weatherData.location.region.substring(0, 2).toUpperCase()}
                </Typography>
                <Typography variant="subtitle2" color="primary">
                  Feels Like: {weatherData.current.feelslike_f}
                </Typography>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  UV: {weatherData.current.uv}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" gutterBottom>
                  Last Updated: {weatherData.current.last_updated}
                </Typography>
              </Grid>
            </Grid>
            <Hidden mdDown>
              <Grid item>
                <img
                  width={128}
                  alt={weatherData.current.condition.text}
                  src={"https:" + weatherData.current.condition.icon}
                ></img>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Paper>
    </div>

    // <div className="">
    //   <h2>
    //     {weatherData.location.name},{" "}
    //     {weatherData.location.region.substring(0, 2).toUpperCase()}
    //   </h2>
    //   <h3 className="temp">{weatherData.current.temp_f}º</h3>

    //   <img
    //     alt={weatherData.current.condition.text}
    //     src={"https:" + weatherData.current.condition.icon}
    //   ></img>
    // </div>
  );
};

export default WeatherReport;
