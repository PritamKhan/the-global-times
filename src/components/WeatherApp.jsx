import React, { useState, useEffect } from "react";
import search_icon from "../assets/search.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

const WeatherApp = () => {
  let api_key = import.meta.env.VITE_WEATHER_API_KEY;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState("Kolkata");
  const [name, setName] = useState("Kolkata");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [temprature, setTemperature] = useState("");
  const [iconCode, setIconCode] = useState("10d");

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=Metric&appid=${api_key}`;

    setError(null);
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setTemperature(Math.round(data.main.temp));
        setIconCode(data.weather[0].icon);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="weather" className=" card mb-3 text-light p-4 py-5">
      <div className="d-flex gap-4 justify-items-between align-items-center mb-2 position-relative">
        <input
          type="text"
          className="cityInput w-100 px-3 py-2 rounded-pill"
          placeholder="Search"
          onChange={(e) => setCountry(e.target.value)}
        />
        <div
          className="search-icon text-light position-absolute"
          style={{right: "15px", cursor: "pointer"}}
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image text-center">
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt="icon"
        />
      </div>
      <div className="text-center fs-2 fw-bold mb-5">
        <div className="weather-temp">{temprature}°C</div>
        <div className="weather-location">{name}</div>
      </div>
      <div className="data-container d-flex justify-content-between">
        <div className="element d-flex gap-3 align-items-center">
          <img src={humidity_icon} alt="" className="icon h-75" />
          <div className="data">
            <div className="humidity-percent ">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element d-flex gap-3 align-items-center">
          <img src={wind_icon} alt="" className="icon h-75" />
          <div className="data">
            <div className="wind-rate">{windSpeed} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
