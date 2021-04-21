import React, { Component } from "react";
import WeatherData from "./Weather";
import "./style.css";

export default class App extends Component {
  state = {
    cityName: "",
  };

  getUserCity = (e) => {
    this.setState({
      cityName: e.target.value,
      weatherData: null,
    });
  };

  formSubmit = (e) => {
    // prevent default behaviour of form - because otherwise it would refresh your whole page after pressing the submit button, and then we couldn't do anything with the submitted input
    e.preventDefault();
    console.log("form submitted");
    console.log(this.state.cityName);
    if (this.state.cityName.trim() !== "") {
      this.fetchWeatherData(this.state.cityName);
    }
  };

  fetchWeatherData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ weatherData: data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchWeatherData("berlin");
  }

  render() {
    let data = this.state.weatherData;
    return (
      <div className="container">
        <h1>Weather App</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            placeholder="Enter your city name"
            onChange={this.getUserCity}
          ></input>
          <button>Display weather</button>
        </form>
        {/* if data is true */}
        {data && (
          <WeatherData
            city={this.state.cityName}
            temp={data.main.temp}
            maxTemp={data.main.temp_max}
            minTemp={data.main.temp_min}
            humidity={data.main.humidity}
            feelsLike={data.main.feels_like}
            icon={data.weather[0].icon}
          />
        )}
      </div>
    );
  }
}
