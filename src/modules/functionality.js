/* eslint-disable no-alert */
import dynamicLayout from './dynamicLayout';
import UI from './ui';

async function fetchDataFromWeatherSite(url) {
  try {
    const ObjectOfWeatherInfo = await fetch(url, { mode: 'cors' });
    if (!(ObjectOfWeatherInfo.ok)) {
      alert('Enter a valid city');
    } else {
      const ObjWeather = await ObjectOfWeatherInfo.json();
      dynamicLayout.weatherCard();
      UI.UIWeatherCard(ObjWeather);
    }
  } catch (error) {
    alert('Error enter a proper value');
  }
}
function SearchForCity() {
  const SearchBar = document.getElementById('SearchInput');
  const APIRequestURL = `https://api.openweathermap.org/data/2.5/weather?q=${SearchBar.value}&APPID=1a39cb86f43df320f7a215022e13f0b7`;
  fetchDataFromWeatherSite(APIRequestURL);
}
class functionality {
  static SearchButtonFunctionality() {
    const button = document.getElementById('ButtonForWeatherRequest');
    button.addEventListener('click', SearchForCity);
  }
}
export default functionality;
