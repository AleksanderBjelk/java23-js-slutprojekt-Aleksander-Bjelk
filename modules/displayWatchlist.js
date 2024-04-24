//skapar HTML_element för watchlisten där den visar titel, utgivningsdatum, bild, handling, betyg för filmerna och en knapp för att ta bort en film från watchlist

import { watchlist } from "./watchlist.js";
import { createRemoveFromWatchlistButton } from "./movieWatchlistButtons.js";

export function displayWatchlist() {
    const watchlistContainer = document.querySelector(
        ".watchListMoviesContainer"
    );
    watchlistContainer.innerHTML = "";

    const movieImg_url = `https://image.tmdb.org/t/p/w200/`;
    let errText = "Not available right now, we are working on it!";

    watchlist.forEach((movie) => {
        let movieTitle = movie.title;
        let releaseDate = movie.release_date;
        let posterPath = movie.poster_path;
        let plot = movie.overview;
        let rating = movie.vote_average;

        let cardEl = document.createElement("div");
        cardEl.setAttribute("class", "movieCardDiv");

        let img = document.createElement("img");
        img.classList.add("card-img");
        img.src = movieImg_url + posterPath;
        img.alt = "Poster: " + errText;

        let movieTitleEl = document.createElement("h7");
        movieTitleEl.setAttribute("class", "card-title");
        movieTitleEl.textContent = "Title: " + movieTitle;
        if (!movieTitle) {
            movieTitleEl.textContent = "title: " + errText;
        }

        let movieReleaseDateEl = document.createElement("h7");
        movieReleaseDateEl.setAttribute("class", "card-title");
        movieReleaseDateEl.textContent = "Date: " + releaseDate;
        if (!releaseDate) {
            movieReleaseDateEl.textContent = "Date: " + errText;
        }

        let moviePlotEl = document.createElement("h7");
        moviePlotEl.setAttribute("class", "card-title plotText");
        moviePlotEl.textContent = "Plot: " + plot;
        if (!plot) {
            moviePlotEl.textContent = "Plot: " + errText;
        }

        let averageRatingEl = document.createElement("h7");
        averageRatingEl.setAttribute("class", "card-title");
        averageRatingEl.textContent = "Rating: " + rating;
        if (!rating) {
            averageRatingEl.textContent = "Rating: " + errText;
        }

        let removeButtonEl = createRemoveFromWatchlistButton(movie);

        cardEl.appendChild(movieTitleEl);
        cardEl.appendChild(averageRatingEl);
        cardEl.appendChild(img);
        cardEl.appendChild(movieReleaseDateEl);
        cardEl.appendChild(moviePlotEl);
        cardEl.appendChild(removeButtonEl);

        watchlistContainer.appendChild(cardEl);
    });
}
