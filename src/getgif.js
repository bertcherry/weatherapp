const getGif = async (condition) => {
    const response = await fetch (`https://api.giphy.com/v1/gifs/translate?api_key=wNvJ9qiIuWib7NWxCDQP2Fvzv4FeUImh&s=${condition}`, {mode: 'cors'});
    const gifData = await response.json();
    
    const currentGif = {
        source: gifData.data.images.original.url,
        text: gifData.data.title,
    }
    return currentGif;
}

export { getGif }