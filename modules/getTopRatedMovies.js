export function getTopRated() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWRmZjU2ZmRmNmFjMzBkYzNiYWZjODU2OTNmOWZjYiIsInN1YiI6IjY2MWY5ODhjYjg0Y2RkMDE2NDY0NjQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mZsNQlWyDzYG24bNsA_iconiZ4IDq_ymyhxsNx7uoZE",
        },
    };

    fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
    )
        .then((response) => response.json())
        .then((response) => 
        console.log(response))

        .catch((err) => console.error(err));
}

export function renderTopRated(movies, topRatedList) {
    topRatedList.innerHTML = "";

    movies.slice(0, 10).forEach((movie) => {
        const listItem = document.createElement("li");
        listItem.textContent = movie.title;
        topRatedList.appendChild(listItem);
    });
}


//Link to API
//https://developer.themoviedb.org/reference/movie-top-rated-list