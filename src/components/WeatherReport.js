import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";
import ChooseEmoji from "./ChooseEmoji";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
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
    fontSize: 40,
  },
}));

const IsSunny = (props) => {
  const condition = props.condition;
  if (condition !== 1000) {
    return (
      <span>
        {" "}
        Bring an <strong>umbrella</strong> just in case.
      </span>
    );
  } else {
    return (
      <span>
        {" "}
        No <strong>umbrella</strong> needed.
      </span>
    );
  }
};

const WeatherReport = ({ weatherData }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {weatherData.current.temp_f < 70 ? (
        <Helmet
          bodyAttributes={{
            style:
              "background : linear-gradient(90deg, hsla(211, 95%, 61%, 1) 0%, hsla(207, 100%, 71%, 1) 51%, hsla(192, 100%, 60%, 1) 100%);",
          }}
        />
      ) : (
        <Helmet
          bodyAttributes={{
            style:
              "background : linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%);",
          }}
        />
      )}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid container spacing={3} justifyContent="flex-start">
          <Grid
            item
            container
            xs={6}
            md={6}
            lg={2}
            direction="column"
            justifyContent="center"
            alignContent="space-between"
          >
            <Grid item>
              <Typography variant="h1">
                {weatherData.current.temp_f}º
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <u>
                  {weatherData.location.name},{" "}
                  {weatherData.location.region.substring(0, 2).toUpperCase()}
                </u>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={6} md={6} lg={2} justifyContent="center">
            <ChooseEmoji condition={weatherData.current.condition.code} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          {weatherData.current.temp_f > 75 ? (
            <Typography variant="h2">
              Nice day. You def don't need a <strong>jacket</strong>.
              <IsSunny condition={weatherData.current.condition.code} />
            </Typography>
          ) : (
            <Typography variant="h2">
              Uhhh, you def need a <strong>jacket</strong>.
              <IsSunny condition={weatherData.current.condition.code} />
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherReport;
