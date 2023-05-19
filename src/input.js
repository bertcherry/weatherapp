import { updateWeather } from './display';

function handleSearch(e) {
    e.preventDefault();
    const locationInput = document.getElementById('location');
    updateWeather(locationInput.value);
} 

export { handleSearch }