const url = "https://api.wunderground.com/api/f038ab32fdec2e20/geolookup/conditions/q/Poland/Gdansk.json";

export async function getWeather() {
  return fetch(url)
    .then(response => response.json())
}