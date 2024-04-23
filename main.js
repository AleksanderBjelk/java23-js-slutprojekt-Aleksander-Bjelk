import { getSearchedMovie } from "./modules/userSearchMovie.js";
import { getSearchedPerson } from "./modules/fetchPersons.js";
import { getTopRated } from "./modules/fetchTopRatedMoviesData.js";
import { getTopTrending } from "./modules/fetchTrendingMoviesData.js";
import { displayMovies } from "./modules/displayMovies.js";
import { displayPersons } from "./modules/displayPersons.js";

const form = document.querySelector(".searchForm");
const topTenRatedMovies = document.querySelector(".top-rated-list");
const topTenTrendingMovies = document.querySelector(".top-trending-list");
const selectOption = document.getElementById("selectOption");


//Lyssnar på formet utifrån om en användare väljer att söka på en film eller en på en person
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = document.querySelector("#searchField").value;
    const searchedMovieContainer = document.querySelector(".searchedMovieResult");
    const searchedPersonContainer = document.querySelector(".searchedPersonResult");
    searchedMovieContainer.innerHTML = "";
    searchedPersonContainer.innerHTML = "";
    try {
        if (selectOption.value == "Movie") {
            const movieData = await getSearchedMovie(value);
            displayMovies(movieData, searchedMovieContainer);
        } else if (selectOption.value == "Person") {
            const personData = await getSearchedPerson(value);
            displayPersons(personData, searchedPersonContainer)
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
});

//Gör så att när en användare trycker på en länk så blir det en "smooth" scrollning
//referens
//https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});


getTopRated().then((data) => displayMovies(data, topTenRatedMovies));
getTopTrending().then((data) => displayMovies(data, topTenTrendingMovies));


