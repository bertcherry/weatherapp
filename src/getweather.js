import { getGif } from "./getgif";

async function getWeather(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6b6b22d6fbcc46a9a70183239231705&q=${location}`, {mode: 'cors'});
    const weatherData = await response.json();
    
    const currentWeather = {
        condition: weatherData.current.condition.text,
        temperatureC: weatherData.current.temp_c,
        temperatureF: weatherData.current.temp_f,
    }
    
    getGif(currentWeather.condition);
    return currentWeather;
}

export { getWeather }