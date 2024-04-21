import { getSearchedMovie } from "./modules/userSearchMovie.js";
import { getTopRated } from "./modules/fetchTopRatedMoviesData.js";
import { getTopTrending } from "./modules/fetchTrendingMoviesData.js";
import { displayMovies } from "./modules/displayMovies.js";

const form = document.querySelector(".searchForm");
const topRatedList = document.querySelector(".top-rated-list");
const topTrendingList = document.querySelector(".top-trending-list");


form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = document.querySelector("#searchField").value;
    const searchedResultContainer = document.querySelector(".searchedResult");
    searchedResultContainer.innerHTML = ""; // Rensa tidigare sökresultat
    try {
        const movieData = await getSearchedMovie(value);
        displayMovies(movieData, searchedResultContainer);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
});

// Det som getTopRated returnerar kommer stoppas in som argument i displayMovies
getSearchedMovie().then(data => displayMovies(data, getSearchedMovie));
getTopRated().then(data => displayMovies(data, topRatedList));
getTopTrending().then(data => displayMovies(data, topTrendingList));