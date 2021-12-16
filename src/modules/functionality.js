import dynamicLayout from './dynamicLayout';
import UI from './ui';

async function fetchDataFromWeatherSite(url) {
  try {
    const ObjectOfWeatherInfo = await fetch(url, { mode: 'cors' });
    const ObjWeather = await ObjectOfWeatherInfo.json();
    dynamicLayout.weatherCard();
    UI.UIWeatherCard(ObjWeather);
  } catch (error) {
    console.log(error);
    alert('Enter a valid city');
  }
}
function SearchForCity() {
  const SearchBar = document.getElementById('SearchInput');
  const APIRequestURL = `http://api.openweathermap.org/data/2.5/weather?q=${SearchBar.value}&APPID=1a39cb86f43df320f7a215022e13f0b7`;
  fetchDataFromWeatherSite(APIRequestURL);
}
class functionality {
  static SearchButtonFunctionality() {
    const button = document.getElementById('ButtonForWeatherRequest');
    button.addEventListener('click', SearchForCity);
  }
}
export default functionality;
