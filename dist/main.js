/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather-class.js":
/*!******************************!*\
  !*** ./src/weather-class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
// here we have the weather class that takes a json object that contains the data
// for the weather in a certain area
class Weather{
    // sets the data attribute to the json Object
        constructor(jsonObject){
            this.data = jsonObject
        }
    // returns the temperature data
        getTemp(){
            return Math.round(this.data.main.temp)
        }
    // return the feels like data  
        getFeel(){
            return Math.round(this.data.main.feels_like)
        }
    // return the humidity data
        getHumidity(){
            return Math.round(this.data.main.humidity)
        }
    // return the wind data
        getWind(){
            return Math.round(this.data.wind.speed)
        }
    // return description of the weather
        getDescription(){
            return this.data.weather[0].description
        }
    // return the location name
        getLocation(){
            return this.data.name
        }
    }



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-class */ "./src/weather-class.js");

const form = document.querySelector('.location-search')
const description = document.querySelector('.weather-description')
const location = document.querySelector('.weather-location')
const temp = document.querySelector('.wether-temp')
const feels_like = document.querySelector('[data-feels-like]')
const wind = document.querySelector('[data-wind]')
const humidity = document.querySelector('[data-humidity]')
// this function here displays the weather to the page
function displayWeather(d, l, t, f, w, h){
    description.textContent = d
    location.textContent = l
    temp.innerHTML =  `${t}<sup class="temp-sup">&#x2103;</sup>`
    feels_like.innerHTML = `Feels like: ${f}<sup>&#x2103;</sup>`
    wind.textContent = `WIND: ${w} KMH`
    humidity.textContent = `HUMIDITY: ${h}%`
}
// this function here fetches the weather data, and resolve or reject depending on the response
async function getWeatherData(url){
    try{
        const response = await fetch(url, {
            mode:'cors',
            method:'GET'
        })
        const jsonData = await response.json()
        const weather = new _weather_class__WEBPACK_IMPORTED_MODULE_0__.Weather(jsonData)   
        displayWeather(weather.getDescription(),
        weather.getLocation(),
        weather.getTemp(), 
        weather.getFeel(),
        weather.getWind(), 
        weather.getHumidity()
        )             
    }
    catch(err){
        console.error(err)
    }
}
getWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=London&APPID=393b1064ba15f35b51ead68d63391f61&units=metric`)

form.addEventListener('submit', (e)=>{
  const loc = form.location.value
  e.preventDefault()
  getWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=393b1064ba15f35b51ead68d63391f61&units=metric`)
  .catch((error) =>{
    console.error(error)
  })
  form.reset()
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsRUFBRSw4QkFBOEI7QUFDekQsMENBQTBDLEVBQUUsYUFBYTtBQUN6RCxnQ0FBZ0MsR0FBRztBQUNuQyx3Q0FBd0MsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDRCQUE0QixtREFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLElBQUk7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZXJlIHdlIGhhdmUgdGhlIHdlYXRoZXIgY2xhc3MgdGhhdCB0YWtlcyBhIGpzb24gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGRhdGFcclxuLy8gZm9yIHRoZSB3ZWF0aGVyIGluIGEgY2VydGFpbiBhcmVhXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVye1xyXG4gICAgLy8gc2V0cyB0aGUgZGF0YSBhdHRyaWJ1dGUgdG8gdGhlIGpzb24gT2JqZWN0XHJcbiAgICAgICAgY29uc3RydWN0b3IoanNvbk9iamVjdCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGpzb25PYmplY3RcclxuICAgICAgICB9XHJcbiAgICAvLyByZXR1cm5zIHRoZSB0ZW1wZXJhdHVyZSBkYXRhXHJcbiAgICAgICAgZ2V0VGVtcCgpe1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmRhdGEubWFpbi50ZW1wKVxyXG4gICAgICAgIH1cclxuICAgIC8vIHJldHVybiB0aGUgZmVlbHMgbGlrZSBkYXRhICBcclxuICAgICAgICBnZXRGZWVsKCl7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuZGF0YS5tYWluLmZlZWxzX2xpa2UpXHJcbiAgICAgICAgfVxyXG4gICAgLy8gcmV0dXJuIHRoZSBodW1pZGl0eSBkYXRhXHJcbiAgICAgICAgZ2V0SHVtaWRpdHkoKXtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5kYXRhLm1haW4uaHVtaWRpdHkpXHJcbiAgICAgICAgfVxyXG4gICAgLy8gcmV0dXJuIHRoZSB3aW5kIGRhdGFcclxuICAgICAgICBnZXRXaW5kKCl7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuZGF0YS53aW5kLnNwZWVkKVxyXG4gICAgICAgIH1cclxuICAgIC8vIHJldHVybiBkZXNjcmlwdGlvbiBvZiB0aGUgd2VhdGhlclxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgIC8vIHJldHVybiB0aGUgbG9jYXRpb24gbmFtZVxyXG4gICAgICAgIGdldExvY2F0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEubmFtZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gXCIuL3dlYXRoZXItY2xhc3NcIlxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLXNlYXJjaCcpXHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGVzY3JpcHRpb24nKVxyXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWxvY2F0aW9uJylcclxuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZXRoZXItdGVtcCcpXHJcbmNvbnN0IGZlZWxzX2xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mZWVscy1saWtlXScpXHJcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13aW5kXScpXHJcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaHVtaWRpdHldJylcclxuLy8gdGhpcyBmdW5jdGlvbiBoZXJlIGRpc3BsYXlzIHRoZSB3ZWF0aGVyIHRvIHRoZSBwYWdlXHJcbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKGQsIGwsIHQsIGYsIHcsIGgpe1xyXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkXHJcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGxcclxuICAgIHRlbXAuaW5uZXJIVE1MID0gIGAke3R9PHN1cCBjbGFzcz1cInRlbXAtc3VwXCI+JiN4MjEwMzs8L3N1cD5gXHJcbiAgICBmZWVsc19saWtlLmlubmVySFRNTCA9IGBGZWVscyBsaWtlOiAke2Z9PHN1cD4mI3gyMTAzOzwvc3VwPmBcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV0lORDogJHt3fSBLTUhgXHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIVU1JRElUWTogJHtofSVgXHJcbn1cclxuLy8gdGhpcyBmdW5jdGlvbiBoZXJlIGZldGNoZXMgdGhlIHdlYXRoZXIgZGF0YSwgYW5kIHJlc29sdmUgb3IgcmVqZWN0IGRlcGVuZGluZyBvbiB0aGUgcmVzcG9uc2VcclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEodXJsKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtb2RlOidjb3JzJyxcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcihqc29uRGF0YSkgICBcclxuICAgICAgICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyLmdldERlc2NyaXB0aW9uKCksXHJcbiAgICAgICAgd2VhdGhlci5nZXRMb2NhdGlvbigpLFxyXG4gICAgICAgIHdlYXRoZXIuZ2V0VGVtcCgpLCBcclxuICAgICAgICB3ZWF0aGVyLmdldEZlZWwoKSxcclxuICAgICAgICB3ZWF0aGVyLmdldFdpbmQoKSwgXHJcbiAgICAgICAgd2VhdGhlci5nZXRIdW1pZGl0eSgpXHJcbiAgICAgICAgKSAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICB9XHJcbn1cclxuZ2V0V2VhdGhlckRhdGEoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9TG9uZG9uJkFQUElEPTM5M2IxMDY0YmExNWYzNWI1MWVhZDY4ZDYzMzkxZjYxJnVuaXRzPW1ldHJpY2ApXHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xyXG4gIGNvbnN0IGxvYyA9IGZvcm0ubG9jYXRpb24udmFsdWVcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBnZXRXZWF0aGVyRGF0YShgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY30mQVBQSUQ9MzkzYjEwNjRiYTE1ZjM1YjUxZWFkNjhkNjMzOTFmNjEmdW5pdHM9bWV0cmljYClcclxuICAuY2F0Y2goKGVycm9yKSA9PntcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgfSlcclxuICBmb3JtLnJlc2V0KClcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=