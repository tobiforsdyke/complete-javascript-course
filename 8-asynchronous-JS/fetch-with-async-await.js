/* function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        return result.json();
    })
    .then(data => {
        const today = data.consolidated_weather[0];
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}. Humidity is ${today.humidity}. Tomorrow will be between ${tomorrow.min_temp} and ${tomorrow.max_temp} with a humidity of ${today.humidity}.`);
    })
    .catch(error => {
        console.log(error);
    });
}; */


async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        // console.log(data);
        const today = data.consolidated_weather[0];
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}. Humidity is ${today.humidity}. Tomorrow will be between ${tomorrow.min_temp} and ${tomorrow.max_temp} with a humidity of ${today.humidity}.`);
        return data;
    } catch(error) {
        alert(error);
    }
    
};

getWeatherAW(44418); // Using London ID
getWeatherAW(2487956); // Using San Francisco ID

let dataNairobi;
getWeatherAW(1528488).then(data => {
    dataNairobi = data;
    console.log(dataNairobi);
});