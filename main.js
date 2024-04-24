import { getSearchedMovie } from "./modules/userSearchMovie.js";
import { getSearchedPerson } from "./modules/fetchPersons.js";
import { getTopRated } from "./modules/fetchTopRatedMoviesData.js";
import { getTopTrending } from "./modules/fetchTrendingMoviesData.js";
import { displayMovies } from "./modules/displayMovies.js";
import { displayPersons } from "./modules/displayPersons.js";
import { openWatchlist } from "./modules/openAndClosingWatchlist.js";
import { closeWatchlist } from "./modules/openAndClosingWatchlist.js";

const form = document.querySelector(".searchForm");
const topTenRatedMovies = document.querySelector(".top-rated-list");
const topTenTrendingMovies = document.querySelector(".top-trending-list");
const selectOption = document.getElementById("selectOption");
const openWatchListButton = document.getElementById("openWatchListButton");
const closeWatchListButton = document.getElementById("closeWatchListButton");
const errorContainer = document.querySelector('#errorMessage');

//Lyssnar på formet utifrån om en användare väljer att söka på en film eller en på en person
//hanterar även felhanteringen om användare söker på något som inte finns i API:et
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = document.querySelector("#searchField").value;
    const searchedMovieContainer = document.querySelector(
        ".searchedMovieResult"
    );
    const searchedPersonContainer = document.querySelector(
        ".searchedPersonResult"
    );
    const errorMessage = document.getElementById("searchErrorMessage");
    searchedMovieContainer.innerHTML = "";
    searchedPersonContainer.innerHTML = "";

    try {
        if (selectOption.value == "Movie") {
            const movieData = await getSearchedMovie(value);
            if (movieData.length === 0) {
                errorMessage.classList.remove("hide");
            } else {
                errorMessage.classList.add("hide");
                displayMovies(movieData, searchedMovieContainer);
            }
        } else if (selectOption.value == "Person") {
            const personData = await getSearchedPerson(value);
            if (personData.length === 0) {
                errorMessage.classList.remove("hide");
            } else {
                errorMessage.classList.add("hide");
                displayPersons(personData, searchedPersonContainer);
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error,);
        alert("An error occurred while fetching data. Please try again later.");
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

function displayError(error){
    errorContainer.innerHTML = '';
    const errorEl = document.createElement('h1');
    errorEl.innerText = error.message;
    errorContainer.append(errorEl);
}

openWatchListButton.addEventListener("click", openWatchlist);
closeWatchListButton.addEventListener("click", closeWatchlist);


getTopRated()
    .then((data) => displayMovies(data, topTenRatedMovies))
    .catch((error) => displayError(error));


getTopTrending()
    .then((data) => displayMovies(data, topTenTrendingMovies))
    .catch((error) => displayError(error));
