const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)
    );

const formatNumber = num => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

function findMatches(wordToMatch, cites) {
    return cites.filter(place => {
        //To match a variable in regex, you need to create a new regex object with the variable, the flags, and assign it to a variable
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMatches() {
    const matchedArray = findMatches(this.value, cities);

    const html = matchedArray.map(place => {

        const regex = new RegExp(this.value, "gi");

        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${formatNumber(place.population)}</span>
        </li>
        `}).join("");

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayMatches)







