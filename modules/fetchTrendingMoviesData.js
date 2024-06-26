//hämtar data för dem tio mest trendande filmerna

export async function getTopTrending() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWRmZjU2ZmRmNmFjMzBkYzNiYWZjODU2OTNmOWZjYiIsInN1YiI6IjY2MWY5ODhjYjg0Y2RkMDE2NDY0NjQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mZsNQlWyDzYG24bNsA_iconiZ4IDq_ymyhxsNx7uoZE",
        },
    };

    const url =
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

    const response = await fetch(url, options);

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data.results.splice(0, 10);
    } else {
        throw new Error("Movie not found");
    }
}

//API reference
//https://developer.themoviedb.org/reference/trending-movies
