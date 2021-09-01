const WeatherReport = ({weatherData}) => {
    return (
        <div>
            <h2>{weatherData.location.name}</h2>
            <h2>{weatherData.current.temp_f}º</h2>
        </div>
    )
}

export default WeatherReport