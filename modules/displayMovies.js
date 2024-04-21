export function displayMovies(movieData, movieLists) {
    const img_url = `https://image.tmdb.org/t/p/w200/`;

    for (let i = 0; i < 10; i++) {
        let title = movieData.results[i].title;
        let releaseDate = movieData.results[i].release_date;
        let posterPath = movieData.results[i].poster_path;
        let plot = movieData.results[i].overview;
        let rating = movieData.results[i].vote_average;
        let card = document.createElement("div");
        card.setAttribute("class", "movieCardDiv");

        let img = document.createElement("img");
        img.classList.add("card-img");
        img.src = img_url + posterPath;

        let movieTitle = document.createElement("h7");
        movieTitle.setAttribute("class", "card-title");
        movieTitle.textContent = title;

        let movieReleaseDate = document.createElement("h7");
        movieReleaseDate.setAttribute("class", "card-title");
        movieReleaseDate.textContent = "Date: " + releaseDate;

        let moviePlot = document.createElement("h7");
        moviePlot.setAttribute("class", "card-title plotText");
        moviePlot.textContent = plot;

        let averageRating = document.createElement("h7");
        averageRating.setAttribute("class", "card-title");
        averageRating.textContent = "Rating: " + rating;

       

        card.append(movieTitle);
        card.append(averageRating);
        card.append(img);
        card.append(movieReleaseDate);
        card.append(moviePlot);
        movieLists.appendChild(card);
    }
}
