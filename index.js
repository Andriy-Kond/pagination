// News API
console.log("news API :>> ");
const NEWS_API_KEY = "c439d9bd8a0f4e879b73f0b05ea17406";
// const END_POINT = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c439d9bd8a0f4e879b73f0b05ea17406";
const END_POINT = "https://newsapi.org/v2/everything?";
const options = {
  headers: {
    Authorization: NEWS_API_KEY,
  },
};

const request = "cat";

fetch(`${END_POINT}q=${request}&language=en&pageSize=10`, options)
  .then(r => r.json())
  .then(console.log);
