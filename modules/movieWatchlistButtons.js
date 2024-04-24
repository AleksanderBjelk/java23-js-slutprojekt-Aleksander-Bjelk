//skapar knappar som lyssnar om en användare vill lägga till eller ta bort en film från watchlist

import { addToWatchlist, removeFromWatchlist } from "./watchlist.js";

export function createAddToWatchlistButton(movie) {
    let buttonEl = document.createElement("button");
    buttonEl.setAttribute("class", "addMovieToWatchlistBtn");
    buttonEl.textContent = "Add to Watchlist";

    buttonEl.addEventListener("click", () => {
        console.log("Movie object:", movie);
        if (movie.title) {
            addToWatchlist(movie);
        } else {
            console.error("Movie title is undefined.");
        }
    });
    return buttonEl;
}

export function createRemoveFromWatchlistButton(movie) {
    let buttonEl = document.createElement("button");
    buttonEl.setAttribute("class", "removeMovieToWatchlistBtn");
    buttonEl.textContent = "Remove from Watchlist";

    buttonEl.addEventListener("click", () => {
        removeFromWatchlist(movie);
    });

    return buttonEl;
}
