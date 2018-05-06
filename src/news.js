const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=33fdb4b7ff7d469f9e847ea010036db2";

export async function getNews(){
  return fetch(url)
    .then(response=>response.json())
    .then(json=>json.articles)
}