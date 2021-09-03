import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const emoji = require("emoji-dictionary");

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

function IsSunny(props) {
  const condition = props.condition;
  if (condition !== 1000) {
    return (
      <span>
        {" "}
        Maybe bring an <strong>umbrella</strong> tho.
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
}

function ChooseEmoji(props) {
  const condition = props.condition;
  if (condition !== 1000) {
    return <Typography variant="h1">{emoji.getUnicode("umbrella")}</Typography>;
  } else {
    return (
      <Typography variant="h1">
        {emoji.getUnicode("cowboy_hat_face")}
      </Typography>
    );
  }
}

const WeatherReport = ({ weatherData }, { loading }) => {
  const classes = useStyles();
  console.log(emoji.getName("🤠"));

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid container spacing={3} justifyContent="flex-start" >
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
          <Grid
            item
            container
            xs={6}
            md={6}
            lg={2}
            justifyContent="center"
          >
            <ChooseEmoji condition={weatherData.current.condition.code} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          {/* {weatherData.current.temp_f > 69 && (
            <Typography variant="h2" color="#ffffff">
              You def don't need a jacket.
            </Typography>
          )} */}
          {weatherData.current.temp_f > 75 ? (
            <Typography variant="h2">
              Sun's bussin'. You def don't need a <strong>jacket</strong>.
              <IsSunny condition={weatherData.current.condition.code} />
            </Typography>
          ) : (
            <Typography variant="h2">
              You def need a <strong>jacket</strong>.
              <IsSunny condition={weatherData.current.condition.code} />
            </Typography>
          )}
        </Grid>
      </Grid>
      {/*         
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
      </Paper> */}
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
