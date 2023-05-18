/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getWeather(location) {
    const weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=6b6b22d6fbcc46a9a70183239231705&q=${location}`, {mode: 'cors'});
    console.log(response.json());
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0Esd0hBQXdILFNBQVMsSUFBSSxhQUFhO0FBQ2xKO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NmI2YjIyZDZmYmNjNDZhOWE3MDE4MzIzOTIzMTcwNSZxPSR7bG9jYXRpb259YCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9