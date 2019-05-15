import weatherapi from '../config/weatherApi'
let getUrl = function (position) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.long}&APPID=${weatherapi}&lang=${navigator.language}&units=metric`;
}

export async function getWeather(position) {
    return await fetch(getUrl(position)).then((response) => {
        return response.json()
    })
}
