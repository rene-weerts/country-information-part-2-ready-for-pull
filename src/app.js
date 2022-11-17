//- Kijken of alles goed gekoppeld is met console.log
// console.log("Welkom");
//- Hiermee koppelen we ons app.js bestand aan package.json en axios
import axios from "axios" ;

function handleField(e) {
    e.preventDefault();
    fetchCountryInformation(inputField.value);
}

const inputField = document.getElementById("search-field");
inputField.addEventListener("keyup", (e) => e.keyCode === 13);

const button = document.getElementById("search-button");
button.addEventListener("submit", handleField);

const signInForm = document.getElementById("sign-in-form");
signInForm.addEventListener('submit', handleField);


async function fetchCountryInformation() {
    const BASE_URI = "https://restcountries.com/";
    const ENDPOINT = `v2/name/${inputField.value}`;
    try {
        const response = await axios.get(BASE_URI + ENDPOINT);
        const dataArray = response.data;

        let currenciesCountry = "";
        for (let i = 0; i < dataArray[0].currencies.length; i++) {
            if (dataArray[0].currencies.length === 1 || i === dataArray[0].currencies.length - 2) {
                currenciesCountry += `you can pay with ${dataArray[0].currencies[i].name}'s. `;
            } else {
                currenciesCountry += `and ${dataArray[0].currencies[i].name}'s.`;
            }
        }
        const countryInfoText = document.getElementById("countryDetails");
        countryInfoText.innerHTML = `
<div class="country-flag-container"> 
<h3>${dataArray[0].name} </h3>
<img src="${dataArray[0].flag}" alt="Vlag van ${dataArray[0].name}" class="image" />
</div>
<p> ${dataArray[0].name}  is situated in ${dataArray[0].subregion}. </p>
<p>It has a population of ${dataArray[0].population}  people.</p>
<p>${currenciesCountry}</p>
`;

    } catch (error) {
        console.error(error);
    }
}

