export function getSearchedMovie(search) {
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
        .then((response) => { 
            console.log(response);
        })
        .catch((err) => console.error(err));
}

//link
//https://developer.themoviedb.org/reference/search-movie






// for(let i = 0; i<10; i++){
//     let title = response.results[i].title;
//     let mtitle = document.createElement('h5');
//     let card = document.createElement("div");
//     card.style = 'style="width: 18rem';
//     card.setAttribute("class", "col-lg-3 col-md-3 col-sm-3 m-1  card");
//     mtitle.setAttribute('class', 'card-title');
//     mtitle.textContent = title;
//     card.append(mtitle);
// }