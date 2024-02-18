import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './Forecast.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const Forecast = ({ data }) => {
    const todayDay = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(todayDay, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, todayDay));

    const currentDate = new Date();
    const dates = [];

    for (let i = 0; i < 7; i++) {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);
        dates.push(nextDate.toLocaleDateString('en-GB'));
    }

    return (
        <>
            <label className="title">Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                                    <label className="date">{dates[index]}</label>
                                    <label className="day">{forecastDays[index]}</label>
                                    {/* <label className="decription">{item.weather[0].description.toUpperCase()}</label> */}
                                    <label className="min-max">Temp : {Math.round(item.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Weather</label>
                                    <label className="value">{item.weather[0].main}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label className="value">{item.main.pressure}hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label className="value">{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label className="value">{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind-Speed</label>
                                    <label className="value">{item.wind.speed}m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea-Level</label>
                                    <label className="value">{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels_like</label>
                                    <label className="value">{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}

            </Accordion>
        </>
    )
}

export default Forecast;