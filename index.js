// News API
import SearchService from "./js/search-service.js";
import articlesTpl from "./templates/articles.hbs";
import LoadMoreBtnService from "./js/loadMoreBtn-service.js";

// const END_POINT = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c439d9bd8a0f4e879b73f0b05ea17406";

const searchService = new SearchService();
const loadMoreBtnService = new LoadMoreBtnService({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const refs = {
  searchForm: document.querySelector(".js-search-form"),
  articleContainer: document.querySelector(".js-articles-container"),
  // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", fetchArticles);

function onSearch(e) {
  e.preventDefault();
  searchService.query = e.currentTarget.elements.query.value.trim();
  if (searchService.query === "") {
    return alert(
      "Ваш запит пустий. Зробіть якийсь запит, бо не знаю що шукати.",
    );
  }

  searchService.resetPage(); // searchService.pageCount = 1;
  clearArticlesContainer();
  fetchArticles();
  // loadMoreBtn.show();
}

function onLoadMore() {
  // searchService.pageCount += 1;
  searchService.fetchQuery();
}

function fetchArticles() {
  // loadMoreBtn.disable();
  searchService.fetchQuery().then(articles => {
    markupArticles(articles);
    // loadMoreBtn.enable();
  });
}

function markupArticles(articles) {
  console.log("markupArticles >> articles:::", articles);
  refs.articleContainer.insertAdjacentHTML("beforeend", articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articleContainer.innerHTML = "";
}
