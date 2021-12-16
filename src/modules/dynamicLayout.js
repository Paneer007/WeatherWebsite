class dynamicLayout {
  static weatherCard() {
    const parentSelector = document.getElementById('WeatherCard');
    parentSelector.innerHTML = '';
    parentSelector.style.visibility = 'visible';
    const cityText = document.createElement('p');
    const temperatureText = document.createElement('p');
    const generalWeatherText = document.createElement('p');
    const windSpeedText = document.createElement('p');
    const humidityText = document.createElement('p');
    const pressureText = document.createElement('p');
    parentSelector.appendChild(cityText);
    parentSelector.appendChild(temperatureText);
    parentSelector.appendChild(generalWeatherText);
    parentSelector.appendChild(windSpeedText);
    parentSelector.appendChild(humidityText);
    parentSelector.appendChild(pressureText);
    cityText.id = 'cityText';
    temperatureText.id = 'temperatureText';
    generalWeatherText.id = 'generalWeatherText';
    windSpeedText.id = 'windSpeedText';
    humidityText.id = 'humidityText';
    pressureText.id = 'pressureText';
  }
}
export default dynamicLayout;
