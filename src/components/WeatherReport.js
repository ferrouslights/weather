const WeatherReport = ({weatherData}) => {
    return (
        <div>
            <h2>{weatherData.location.name}, {weatherData.location.region.substring(0,2).toUpperCase()}</h2>
            <h2>{weatherData.current.temp_f}º</h2>
        </div>
    )
}

export default WeatherReport