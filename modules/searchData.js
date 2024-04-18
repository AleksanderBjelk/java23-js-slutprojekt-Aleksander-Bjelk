const form = document.querySelector(".searchForm");
const search = document.querySelector("input");

export function getData(search) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWRmZjU2ZmRmNmFjMzBkYzNiYWZjODU2OTNmOWZjYiIsInN1YiI6IjY2MWY5ODhjYjg0Y2RkMDE2NDY0NjQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mZsNQlWyDzYG24bNsA_iconiZ4IDq_ymyhxsNx7uoZE",
        },
    };

    fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=en-US&page=1`,
        options
    )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getData(search.value);
});
