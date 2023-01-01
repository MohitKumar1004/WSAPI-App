import React, { useEffect, useState } from "react";
import "./css/style.css"
const Tempapp = () => {
    const [city,setCity]=useState("");
    const [search,setSearch]=useState("Pune");
    const [weather,setWeather]=useState("");
    const [coordinates,setCoordinates]=useState("");
    const [timezone,setTimezone]=useState("");
    const [visibility,setVisibility]=useState("");
    const [wind,setWind]=useState("");
    const [sys,setSys]=useState("");
    const [clouds,setClouds]=useState("");
    const [dt,setDt]=useState("");
    useEffect(() => {
        const fetchApi = async() => {
            const url="https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=5b6017c0f034315b93dd1e361403115a";
            const response = await fetch(url);
            console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
            setWeather(resJson.weather[0])
            setCoordinates(resJson.coord)
            setTimezone(resJson.timezone)
            setVisibility(resJson.visibility)
            setWind(resJson.wind)
            setSys(resJson.sys)
            setClouds(resJson.clouds)
            setDt(resJson.dt)
        }
        fetchApi();
    },[search])
    const iconurl = "http://openweathermap.org/img/w/"+weather.icon+".png";
    // <h2>Taken reading at:</h2>
    // <h3>Max : {city.temp_min}<span>&#8451;</span> | Max : {city.temp_max}<span>&#8451;</span></h3>
    return (
        <body style={{backgroundImage:"url("+iconurl+")"}}>
            <div className="box">
                <h1 className="Heading">Weather Search App</h1>
                <div className="Card-inside">
                    <h2>Search By City Name</h2>
                    <input type="search" onChange={(event) =>{setSearch(event.target.value)}}/>
                </div>
                {(!city)?
                (<h1>No Data Found</h1>
                    ):(
                    <div>
                        <div className="Card-inside">
                            <div className="d3effect">
                                <h2>Todays Weather Report</h2>
                                        <img src={iconurl} alt="Weather icon" height="130" width="130" />
                                        <h3>Temperature : {city.temp}<span>&#8451;</span></h3>
                                        <h3>Min Temp. : {city.temp_min}<span>&#8451;</span></h3>
                                        <h3>Max Temp. : {city.temp_max}<span>&#8451;</span></h3>
                                        <h3>Clouds Percentage: {clouds.all}%</h3>
                                        <h3>Description : {weather.description}</h3>
                            </div>
                            <div className="d3effect">
                                <h2>Reading Environment</h2>
                                        <h3>Latitude : {coordinates.lat}<span>&#176;</span></h3>
                                        <h3>Longitude : {coordinates.lon}<span>&#176;</span></h3>
                                        <h3>Recieved Time : {new Date(dt*1000).toLocaleTimeString('en-IN')}</h3>
                                        <h3>City : {search}</h3>
                                        <h3>Country : {sys.country}</h3>
                                        <h3>Timezone : {timezone}</h3>
                            </div>
                            <div className="d3effect">
                                <h2>Other Atmospheric Factors</h2>
                                        <h3>Pressure : {city.pressure}</h3>
                                        <h3>Humidity : {city.humidity}</h3>
                                        <h3>Sea Level : {city.sea_level}</h3>
                                        <h3>Ground Level : {city.grnd_level}</h3>
                                        <h3>Sunrise : {new Date(sys.sunrise*1000).toLocaleTimeString('en-IN')}</h3>
                                        <h3>Sunset : {new Date(sys.sunset*1000).toLocaleTimeString('en-IN')}</h3>
                            </div>
                            <div className="d3effect">
                                <h2>Wind</h2>
                                        <h3>Speed : {wind.speed}</h3>
                                        <h3>Gust : {wind.gust}</h3>
                                        <h3>Degree : {wind.deg}</h3>
                                        <h3>visibility : {visibility}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </body>
    )
};
export default Tempapp;