import axios from "axios" ;
console.log("Welkom")


async function fetchCountryInformation() {
    const BASE_URI = "https://restcountries.com/"
    const ENDPOINT = "v2/all"


    try {
        const response = await axios.get(BASE_URI + ENDPOINT)
        // console.log(response)
//schrijf een functie die de data van een random land ophaalt mss iets met math.random..geen idee

//maak een ordered list waarbij de data in de html wordt geinjecteerd en in de juiste volgorde op de pagina komt..
//schrijf voor alle data functies die je vervolgens kunt aanspreken en met template literals kunt weergeven op pagina.

    } catch(error){
        console.error(error)
    }
}
fetchCountryInformation()