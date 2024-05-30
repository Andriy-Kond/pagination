// News API

import SearchService from "./js/search-service.js";

// const END_POINT = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c439d9bd8a0f4e879b73f0b05ea17406";

const searchService = new SearchService();

const refs = {
  searchForm: document.querySelector(".js-search-form"),
  articleContainer: document.querySelector(".js-articles-container"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(e) {
  e.preventDefault();

  searchService.query = e.currentTarget.elements.query.value;
  // searchService.pageCount = 1;
  searchService.resetPage();

  searchService.fetchQuery();
}

function onLoadMore() {
  // searchService.pageCount += 1;
  searchService.fetchQuery();
}
