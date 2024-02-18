import "./Current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">{data.city}</p>
                <p className="temperature">{data.main.temp}°C</p>

            </div>


            <div className="bottom">
                <img
                    alt="weather"
                    className="weather-icon"
                    src={`icons/${data.weather[0].icon}.png`}
                />
                <p className="desc">{data.weather[0].description.toUpperCase()}</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-title">Today</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind speed    </span>
                        <span className="parameter-value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure </span>
                        <span className="parameter-value">{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;