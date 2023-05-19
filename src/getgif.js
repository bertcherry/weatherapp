const getGif = async (condition) => {
    const response = await fetch (`https://api.giphy.com/v1/gifs/translate?api_key=wNvJ9qiIuWib7NWxCDQP2Fvzv4FeUImh&s=${condition}`, {mode: 'cors'});
    const gifData = await response.json();
    console.log(gifData);

    const gif = document.getElementById('weather-gif');
    gif.src = gifData.data.images.original.url;
    gif.alt = gifData.data.title;
}

export { getGif }