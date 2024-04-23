//skapar HTML-element som visar titel, datum, bild, handling och betyg för filmerna

export function displayMovies(movieData, movieContainer) {
    const movieImg_url = `https://image.tmdb.org/t/p/w200/`;
    let errText = "Not available right now, we are working on it!";
    

    movieData.forEach((movie) => {
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
        movieTitleEl.textContent = movieTitle || "Title: " + errText;

        let movieReleaseDateEl = document.createElement("h7");
        movieReleaseDateEl.setAttribute("class", "card-title");
        movieReleaseDateEl.textContent = "Date: " + (releaseDate || errText);

        let moviePlotEl = document.createElement("h7");
        moviePlotEl.setAttribute("class", "card-title plotText");
        moviePlotEl.textContent = plot || "Plot: " + errText;

        let averageRatingEl = document.createElement("h7");
        averageRatingEl.setAttribute("class", "card-title");
        averageRatingEl.textContent = "Rating: " + (rating || errText);

        cardEl.appendChild(movieTitleEl);
        cardEl.appendChild(averageRatingEl);
        cardEl.appendChild(img);
        cardEl.appendChild(movieReleaseDateEl);
        cardEl.appendChild(moviePlotEl);

        movieContainer.appendChild(cardEl);
    });
}
