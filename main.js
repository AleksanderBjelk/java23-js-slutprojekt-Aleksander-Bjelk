import { getData } from "./modules/searchData.js";
import { getTopRated, renderTopRated } from "./modules/getTopRatedMovies.js";
import { getTopTrending, renderTopTrending } from "./modules/trendingMovies.js";


const topRatedList = document.querySelector(".top-rated-list");
const topTrendingList = document.querySelector(".top-trending-list");



window.onload = function () {
    getTopRated().then((movies) => {
        renderTopRated(movies, topRatedList);
    });

    getTopTrending().then((movies) => {
        renderTopTrending(movies, topTrendingList);
    });
};