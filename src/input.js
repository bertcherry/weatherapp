import { getWeather } from './getweather';

function handleSearch(e) {
    e.preventDefault();
    const locationInput = document.getElementById('location');
    getWeather(locationInput.value);
} 

export { handleSearch }