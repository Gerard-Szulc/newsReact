  const url = "https://newsapi.org/v2/top-headlines?pageSize=20&country=";

export async function getNews(props){

  return fetch(url+props+"&apiKey=33fdb4b7ff7d469f9e847ea010036db2")
    .then(response=>response.json())
    .then(json=>json.articles)
}