/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/layout */ \"./src/modules/layout.js\");\n\n\n_modules_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\n\n\n//# sourceURL=webpack://weatherpage/./src/index.js?");

/***/ }),

/***/ "./src/modules/dynamicLayout.js":
/*!**************************************!*\
  !*** ./src/modules/dynamicLayout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass dynamicLayout {\n  static weatherCard() {\n    const parentSelector = document.getElementById('WeatherCard');\n    parentSelector.innerHTML = '';\n    const cityText = document.createElement('p');\n    const temperatureText = document.createElement('p');\n    const generalWeatherText = document.createElement('p');\n    const windSpeedText = document.createElement('p');\n    const humidityText = document.createElement('p');\n    const pressureText = document.createElement('p');\n    parentSelector.appendChild(cityText);\n    parentSelector.appendChild(temperatureText);\n    parentSelector.appendChild(generalWeatherText);\n    parentSelector.appendChild(windSpeedText);\n    parentSelector.appendChild(humidityText);\n    parentSelector.appendChild(pressureText);\n    cityText.id = 'cityText';\n    temperatureText.id = 'temperatureText';\n    generalWeatherText.id = 'generalWeatherText';\n    windSpeedText.id = 'windSpeedText';\n    humidityText.id = 'humidityText';\n    pressureText.id = 'pressureText';\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dynamicLayout);\n\n\n//# sourceURL=webpack://weatherpage/./src/modules/dynamicLayout.js?");

/***/ }),

/***/ "./src/modules/functionality.js":
/*!**************************************!*\
  !*** ./src/modules/functionality.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dynamicLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamicLayout */ \"./src/modules/dynamicLayout.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/modules/ui.js\");\n\n\n\nasync function fetchDataFromWeatherSite(url) {\n  try {\n    const ObjectOfWeatherInfo = await fetch(url, { mode: 'cors' });\n    const ObjWeather = await ObjectOfWeatherInfo.json();\n    _dynamicLayout__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weatherCard();\n    _ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"].UIWeatherCard(ObjWeather);\n  } catch (error) {\n    console.log(error);\n    alert('Enter a valid city');\n  }\n}\nfunction SearchForCity() {\n  const SearchBar = document.getElementById('SearchInput');\n  const APIRequestURL = `http://api.openweathermap.org/data/2.5/weather?q=${SearchBar.value}&APPID=1a39cb86f43df320f7a215022e13f0b7`;\n  fetchDataFromWeatherSite(APIRequestURL);\n}\nclass functionality {\n  static SearchButtonFunctionality() {\n    const button = document.getElementById('ButtonForWeatherRequest');\n    button.addEventListener('click', SearchForCity);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (functionality);\n\n\n//# sourceURL=webpack://weatherpage/./src/modules/functionality.js?");

/***/ }),

/***/ "./src/modules/layout.js":
/*!*******************************!*\
  !*** ./src/modules/layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functionality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionality */ \"./src/modules/functionality.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/modules/ui.js\");\n/* eslint-disable class-methods-use-this */\n\n\n\n\nfunction basicLayout() {\n  const parentSelector = document.createElement('div');\n  document.body.appendChild(parentSelector);\n  parentSelector.id = 'ParentBody';\n  const headSelector = document.createElement('div');\n  const bodySelector = document.createElement('div');\n  parentSelector.appendChild(headSelector);\n  parentSelector.appendChild(bodySelector);\n  headSelector.id = 'Header';\n  bodySelector.id = 'Content';\n}\nfunction headerLayout() {\n  const parentSelector = document.getElementById('Header');\n  const HeaderDiv = document.createElement('div');\n  parentSelector.appendChild(HeaderDiv);\n  const HeaderText = document.createElement('h1');\n  HeaderDiv.appendChild(HeaderText);\n  HeaderText.id = 'HeaderText';\n}\nfunction searchBar() {\n  const parentSelector = document.getElementById('SearchBar');\n  const searchInput = document.createElement('input');\n  const submitButton = document.createElement('button');\n  searchInput.id = 'SearchInput';\n  submitButton.id = 'ButtonForWeatherRequest';\n  parentSelector.appendChild(searchInput);\n  parentSelector.appendChild(submitButton);\n  _functionality__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SearchButtonFunctionality();\n}\nfunction bodyLayout() {\n  const parentSelector = document.getElementById('Content');\n  const searchSelector = document.createElement('div');\n  const cardSelector = document.createElement('div');\n  parentSelector.appendChild(searchSelector);\n  parentSelector.appendChild(cardSelector);\n  searchSelector.id = 'SearchBar';\n  cardSelector.id = 'WeatherCard';\n  searchBar();\n}\nclass layout {\n  static start() {\n    basicLayout();\n    headerLayout();\n    bodyLayout();\n    _ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"].basicLayoutUI();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);\n\n\n//# sourceURL=webpack://weatherpage/./src/modules/layout.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass UI {\n  static basicLayoutUI() {\n    const headerText = document.getElementById('HeaderText');\n    const submitButton = document.getElementById('ButtonForWeatherRequest');\n    headerText.textContent = 'Weather Website';\n    submitButton.textContent = 'Submit';\n  }\n\n  static UIWeatherCard(Obj) {\n    const cityText = document.getElementById('cityText');\n    const temperatureText = document.getElementById('temperatureText');\n    const generalWeatherText = document.getElementById('generalWeatherText');\n    const windSpeedText = document.getElementById('windSpeedText');\n    const humidityText = document.getElementById('humidityText');\n    const pressureText = document.getElementById('pressureText');\n    cityText.textContent = `City : ${Obj.name}`;\n    temperatureText.textContent = `Temperature : ${Obj.main.temp - 273.15} C`;\n    generalWeatherText.textContent = `Weather Today : ${Obj.weather[0].description}`;\n    windSpeedText.textContent = `WindSpeed : ${Obj.wind.speed}`;\n    humidityText.textContent = `Humidity : ${Obj.main.humidity}`;\n    pressureText.textContent = `Pressure : ${Obj.main.pressure}`;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://weatherpage/./src/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;