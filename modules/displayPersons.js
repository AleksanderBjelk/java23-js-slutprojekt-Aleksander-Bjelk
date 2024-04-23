//skapar HTML-element som visar namn, avdelning, bild, och vad en person är känd för

export function displayPersons(personData, searchedResultContainer) {
    const personsImg_url = `https://image.tmdb.org/t/p/w200/`;
    let errText = "Not available right now, we are working on it!";

    personData.forEach((person) => {
        let personName = person.name;
        let department = person.known_for_department;
        let personPicture = person.profile_path;
        let knownFor = person.known_for;

        let cardEl = document.createElement("div");
        cardEl.setAttribute("class", "personCardDiv");

        let img = document.createElement("img");
        img.classList.add("card-img");
        img.src = personsImg_url + personPicture;
        img.alt = "Picture: " + errText;

        let personNameEl = document.createElement("h7");
        personNameEl.setAttribute("class", "card-title textStyleForPersonCard");
        personNameEl.textContent = personName;
        if (!personName) {
            personNameEl.textContent = "Title: " + errText;
        }

        let departmentEl = document.createElement("h7");
        departmentEl.setAttribute("class", "card-title textStyleForPersonCard");
        departmentEl.textContent = department;
        if (!department) {
            departmentEl.textContent = "Department: " + errText;
        }

    
        cardEl.append(personNameEl);
        cardEl.append(img);
        cardEl.append(departmentEl);

        for (const media of knownFor) {
            let mediaTypeEl = document.createElement("h7");
            let movieTitleEl = document.createElement("h7");
            let seriesTitleEl = document.createElement("h7");
            
            let mediaType = media.media_type;
            let movieTitle = media.original_title;
            let seriesTitle = media.original_name;

            mediaTypeEl.setAttribute(
                "class",
                "card-title textStyleForPersonsCard"
            );
            mediaTypeEl.textContent = mediaType;

            movieTitleEl.setAttribute(
                "class",
                "card-title textStyleForPersonsCard"
            );
            movieTitleEl.textContent = movieTitle;

            seriesTitleEl.setAttribute(
                "class",
                "card-title textStyleForPersonsCard"
            );
            seriesTitleEl.textContent = seriesTitle;

            cardEl.appendChild(mediaTypeEl);
            cardEl.appendChild(movieTitleEl);
            cardEl.appendChild(seriesTitleEl);
        }

        searchedResultContainer.appendChild(cardEl);
    });
}
      
