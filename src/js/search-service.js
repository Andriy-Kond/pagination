export default class SearchService {
  constructor() {
    this.searchQuery = "";
    this.pageCount = 1;
  }

  fetchQuery() {
    const END_POINT = "https://newsapi.org/v2";
    const NEWS_API_KEY = "c439d9bd8a0f4e879b73f0b05ea17406";
    console.log("this :>> ", this);
    const options = {
      headers: {
        Authorization: NEWS_API_KEY,
      },
    };

    const url = `${END_POINT}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.pageCount}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log("data :>> ", data);
        // Краще збільшувати сторінку тут, бо тут вже успішне виконання запиту
        this.pageCount += 1;
        return data.articles;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  // get pageCount() {
  //   return this.pageCount;
  // }

  // set pageCount(pageNumber) {
  //   this.pageCount = pageNumber;
  // }

  resetPage() {
    this.pageCount = 1;
  }
}
