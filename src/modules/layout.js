/* eslint-disable class-methods-use-this */

import functionality from './functionality';
import UI from './ui';

function basicLayout() {
  const parentSelector = document.createElement('div');
  document.body.appendChild(parentSelector);
  parentSelector.id = 'ParentBody';
  const headSelector = document.createElement('div');
  const bodySelector = document.createElement('div');
  parentSelector.appendChild(headSelector);
  parentSelector.appendChild(bodySelector);
  headSelector.id = 'Header';
  bodySelector.id = 'Content';
}
function headerLayout() {
  const parentSelector = document.getElementById('Header');
  const HeaderDiv = document.createElement('div');
  parentSelector.appendChild(HeaderDiv);
  const HeaderText = document.createElement('h1');
  HeaderDiv.appendChild(HeaderText);
  HeaderText.id = 'HeaderText';
}
function searchBar() {
  const parentSelector = document.getElementById('SearchBar');
  const searchInput = document.createElement('input');
  const submitButton = document.createElement('button');
  searchInput.id = 'SearchInput';
  submitButton.id = 'ButtonForWeatherRequest';
  parentSelector.appendChild(searchInput);
  parentSelector.appendChild(submitButton);
  functionality.SearchButtonFunctionality();
}
function bodyLayout() {
  const parentSelector = document.getElementById('Content');
  const searchSelector = document.createElement('div');
  const cardSelector = document.createElement('div');
  parentSelector.appendChild(searchSelector);
  parentSelector.appendChild(cardSelector);
  searchSelector.id = 'SearchBar';
  cardSelector.id = 'WeatherCard';
  searchBar();
}
class layout {
  static start() {
    basicLayout();
    headerLayout();
    bodyLayout();
    UI.basicLayoutUI();
  }
}
export default layout;
