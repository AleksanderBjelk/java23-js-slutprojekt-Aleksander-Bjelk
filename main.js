import { getSearchedMovie } from "./modules/userSearchMovie.js";
import { getTopRated } from "./modules/fetchTopRatedMoviesData.js";
import { getTopTrending } from "./modules/fetchTrendingMoviesData.js";
import { displayMovies } from "./modules/displayMovies.js";

const form = document.querySelector(".searchForm");
const topRatedList = document.querySelector(".top-rated-list");
const topTrendingList = document.querySelector(".top-trending-list");


form.addEventListener("submit", (event) => {
    const value = document.querySelector("input").value;
    event.preventDefault();
    getSearchedMovie(value);
});
// Det som getTopRated returnerar kommer stoppas in som argument i displayMovies
getTopRated().then(data => displayMovies(data, topRatedList));
getTopTrending().then(data => displayMovies(data, topTrendingList));