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


const WeatherReport = ({weatherData}) => {
    return (
        <div>
            <h2>{weatherData.location.name}, {weatherData.location.region.substring(0,2).toUpperCase()}</h2>
            <h2>{weatherData.current.temp_f}º</h2>
        </div>
    )
}

export default WeatherReport