//hämtar data från Api:et 

export async function getSearchedPerson(value) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWRmZjU2ZmRmNmFjMzBkYzNiYWZjODU2OTNmOWZjYiIsInN1YiI6IjY2MWY5ODhjYjg0Y2RkMDE2NDY0NjQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mZsNQlWyDzYG24bNsA_iconiZ4IDq_ymyhxsNx7uoZE",
        },
    };

    const url = `https://api.themoviedb.org/3/search/person?query=${value}&include_adult=false&language=en-US&page=1`;

    const response = await fetch (url, options);

    if(response.ok){
        const data = await response.json();
        console.log(data);
        return data.results;
    } else if(response.status == 404){
        throw new Error('Movie not found');
    }
}