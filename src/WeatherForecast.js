import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

    function handleResponse(response){
        console.log(response.data);
    }

    let apiKey = "17ad6e67aa629189f73b053634668b20";
    let longtitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (<div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">
                    Thu
                </div>
                <WeatherIcon code = "01d" size={36}/>
                <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">19º</span>
                    <span className="WeatherForecast-temperature-min">10º</span>
                </div>
            </div>
        </div>
    </div>);
}