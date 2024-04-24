//logiken för watchlisten egenskaper: om en film finns i watchlist och stoppar den för dubbletter,
//sparar filmer lokalt,
//ger meddelande om filmen har lagts till eller ej

//referenser:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage-sessionstorage
//https://www.w3schools.com/js/tryit.asp?filename=tryjson_store


import { displayWatchlist } from "./displayWatchlist.js";

const savedWatchlist = localStorage.getItem("watchlist");
export const watchlist = savedWatchlist
    ? new Set(JSON.parse(savedWatchlist))
    : new Set();

displayWatchlist();

export function addToWatchlist(movie) {
    if (!isMovieInWatchlist(movie)) {
        watchlist.add(movie);
        saveWatchlist();
        displayWatchlist();
        alert(`Added movie to watchlist: ${movie.title}`);
    } else {
        alert(`Movie is already in watchlist: ${movie.title}`);
    }
}

export function removeFromWatchlist(movie) {
    if (isMovieInWatchlist(movie)) {
        const movieToRemove = [...watchlist].find(
            (movieFromWatchlist) => movieFromWatchlist.id === movie.id
        );
        watchlist.delete(movieToRemove);
        saveWatchlist();
        displayWatchlist();
        alert(`Removed movie from watchlist: ${movie.title}`);
    } else {
        alert(`Movie is not in watchlist: ${movie.title}`);
    }
}

// Kontrollera om en film redan finns i watchlistan
function isMovieInWatchlist(movie) {
    for (let movieFromWatchlist of watchlist) {
        if (movieFromWatchlist.id === movie.id) {
            return true;
        }
    }
    return false;
}

function saveWatchlist() {
    localStorage.setItem("watchlist", JSON.stringify(Array.from(watchlist)));
}
