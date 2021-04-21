import React, { Component } from "react";

export default class WeatherData extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.temp === this.props.temp &&
      nextProps.city === this.props.city
    ) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div className="card">
        <div>
          <h2>
            Current temperature in {this.props.city}: {this.props.temp}°
          </h2>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${this.props.icon}@4x.png`}
          alt="weather icon"
        />
        <div>
          <p>Feels like: {this.props.feelsLike}°</p>
          <p>Humidity: {this.props.humidity}</p>
          <p>Minimum temperature: {this.props.minTemp}°</p>
          <p>Maximum temperature: {this.props.maxTemp}°</p>
        </div>
      </div>
    );
  }
}
