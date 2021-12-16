class UI {
  static basicLayoutUI() {
    const headerText = document.getElementById('HeaderText');
    const submitButton = document.getElementById('ButtonForWeatherRequest');
    headerText.textContent = 'Weather Website';
    submitButton.textContent = 'Submit';
  }

  static UIWeatherCard(Obj) {
    const cityText = document.getElementById('cityText');
    const temperatureText = document.getElementById('temperatureText');
    const generalWeatherText = document.getElementById('generalWeatherText');
    const windSpeedText = document.getElementById('windSpeedText');
    const humidityText = document.getElementById('humidityText');
    const pressureText = document.getElementById('pressureText');
    cityText.textContent = `City : ${Obj.name}`;
    temperatureText.textContent = `Temperature : ${Obj.main.temp - 273.15} C`;
    generalWeatherText.textContent = `Weather Today : ${Obj.weather[0].description}`;
    windSpeedText.textContent = `WindSpeed : ${Obj.wind.speed}`;
    humidityText.textContent = `Humidity : ${Obj.main.humidity}`;
    pressureText.textContent = `Pressure : ${Obj.main.pressure}`;
  }
}
export default UI;
