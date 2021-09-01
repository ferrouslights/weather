const WeatherReport = ({weatherData}) => {
    return (
        <div>
            <h2>Location: {weatherData.location.name}</h2>
        </div>
    )
}

export default WeatherReport