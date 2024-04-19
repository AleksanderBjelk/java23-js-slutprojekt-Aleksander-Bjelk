import { getSearchedMovie } from "./modules/userSearchMovie.js";
import { getTopRated } from "./modules/getTopRatedMovies.js";
import { getTopTrending } from "./modules/trendingMovies.js";

const form = document.querySelector(".searchForm");
const search = document.querySelector("input");


getTopRated().then((movies) => {
    renderTopRated(movies, topRatedList);
});

getTopTrending().then((movies) => {
    renderTopTrending(movies, topTrendingList);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getSearchedMovie(search.value);
});