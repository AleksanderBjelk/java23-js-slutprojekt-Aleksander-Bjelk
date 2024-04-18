export function getTopTrending(){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWRmZjU2ZmRmNmFjMzBkYzNiYWZjODU2OTNmOWZjYiIsInN1YiI6IjY2MWY5ODhjYjg0Y2RkMDE2NDY0NjQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mZsNQlWyDzYG24bNsA_iconiZ4IDq_ymyhxsNx7uoZE'
        }
    };
    
    return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            return response.results;
        })
        .catch((err) => console.error(err));
}


export function renderTopTrending(movies, topTrendingList) {
    topTrendingList.innerHTML = "Top 10 trending movies on AMDB:"; 

    movies.slice(0, 10).forEach((movie) => {
        const listItem = document.createElement("li");
        listItem.textContent = movie.title;
        topTrendingList.appendChild(listItem);
    });
}
