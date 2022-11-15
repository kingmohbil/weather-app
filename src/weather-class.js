// here we have the weather class that takes a json object that contains the data
// for the weather in a certain area
export class Weather {
  // sets the data attribute to the json Object
  constructor(jsonObject) {
    this.data = jsonObject;
  }
  // returns the temperature data
  getTemp() {
    return Math.round(this.data.main.temp);
  }
  // return the feels like data
  getFeel() {
    return Math.round(this.data.main.feels_like);
  }
  // return the humidity data
  getHumidity() {
    return Math.round(this.data.main.humidity);
  }
  // return the wind data
  getWind() {
    return Math.round(this.data.wind.speed);
  }
  // return description of the weather
  getDescription() {
    return this.data.weather[0].description;
  }
  // return the location name
  getLocation() {
    return this.data.name;
  }
}
