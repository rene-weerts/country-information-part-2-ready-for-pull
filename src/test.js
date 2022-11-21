//- Kijken of alles goed gekoppeld is met console.log
console.log("Welkom")
//- Hiermee koppelen we ons app.js bestand aan package.json en axios
import axios from "axios" ;

//- Asynchrone functie om de response van de back-end binnen te krijgen
async function fetchCountryInformation() {
//- Const BASE_URI =
//- Const ENDPOINT =
    const BASE_URI = "https://restcountries.com/"
    const ENDPOINT = "v2/all"
//- Het try-blok begint met try{}
    try {
//- We maken een await en vevolgens de request met axios.get
//- We maken een variabele en geven deze een naam
//- We maken een console.log om dit te checken
        const response = await axios.get(BASE_URI + ENDPOINT)
        // console.log(response)
//- We gaan een functie maken die

//- Met de find methode halen we de data per land op uit de array van response
//- De return functie zoekt de array af tot hij dezelfde naam vind als in het zoekveld en stopt daarna
//- We maken een variabele const van het zoekveld en gebruiken deze in onze return functie

        //- Om een event-listner op ons button-elemnet te plaatsen hebben we een functie nodig die wordt afgevuurd als je er op klikt
        function handleClick() {
            // console.log("Ik wil een zoekbalk")
        }

        //- Om deze functie te koppelen moeten we eerst een variabele maken met getElementById zodat we deze kunnen aanspreken
        const button = document.getElementById("search-button")
//- Nu we toegang hebben op ons button-element kunnen we er een eventlistner op plaatsen
//- Deze verwacht 2 argumenten (1 het type event) (2 De functie die wordt afgevuurd)
//- Let op!!!!! Je geeft alleen de functie naam mee. Dus zonder haakjes () !!!!!
//- Mocht je parameters nodig hebben schrijf dan een anonieme functie waar je deze in zet
//- Deze ziet er dan zo uit (type:"click", () => { handleClick ("Nova", "21" );});
        button.addEventListener("click", handleClick)
//- Om een event-listner op ons zoekveld te plaatsen hebben we een functie nodig
//- Om te registreren wat ingetoetst wordt hebben we het event-object nodig (e)
//- Daarmee ontvangen we alle data

        function handleField(e) {
            currentValue(e.target.value)
            console.log(`In het invoerveld is ingevuld ${currentValue}`)

        }


        //- Om deze functie te koppelen moeten we eerst een variabele maken met getElementById zodat we deze kunnen aanspreken
        const field = document.getElementById("search-field")
//- Nu we toegan hebben tot ons input-element kunnen we er een event-listner op plaatsen
//- Deze verwacht 2 argumenten (1 Het type event)(2 De functie die wordt afgevuurd)
        field.addEventListener("keyup", handleField)
//- Dit doen we ook allemaal op het formulier zelf zodat we ook enter kunnen gebruiken
//- Dat kan alleen maar als we onze button geen click-event meegeven () !!!
//- In plaats daarvan zetten we op het formulier een submit-event de button moet als type="submit" hebben anders wertkt dit niet
//- Om de methode prevent-default te gebruiken moeten we zorgen dat onze functie het event-object ontvangt (e)
//- Vervolgens hebben we toegang tot e.preventDefault()
        function handleSubmit(e) {
            e.preventDefault()
            console.log("Het formulier wordt verzonden🥳")
        }

        const signInForm = document.getElementById("sign-in-form")
        signInForm.addEventListener("submit", handleSubmit)

        const countryByName = response.data.find((oneCountry) => {
            return oneCountry.name === "Netherlands";
        })
        console.log(countryByName)
//- We maken een ul op de html-pagina met een id
//- We maken een variabele const en geven deze een naam en koppelen deze met id van ul index-pagina
        const listCountryName = document.getElementById("countryDetails")

//- We voegen aan onze variabele listCountryNamen het element innerHTML toe om alles zichtbaar te maken op onze html-pagina
//- We maken een list tag met er voor en achter back-ticks
//- We zetten tussen onze list tag alle elementen die we nodig hebben om onze data in te zetten
//- We gebruiken de volgende elementen input/img/h3/p en zetten er de benodigde class en id en type attributen in
//- We maken de juiste template literal op de juiste plaats om onze gegevens te injecteren
//- We voegen een eventlistner toe aan ons input-element en maken een functie handle-klik

        listCountryName.innerHTML =
            ` <li class="list-items">
                     <div class="flag-name-container">
                     <h3>${countryByName.name}</h3>
                     <img class="image" src="${countryByName.flags.svg}" alt="${countryByName.name}">
                     </div>
                     <p>${countryByName.name} is situated in ${countryByName.subregion}.
                     <p>It has a population of ${countryByName.population} people.</p>
                     <p>The capital is ${countryByName.capital} and you can pay with ${countryByName.currencies[0]}'s</p>
              </li>`
    } catch (error) {
        console.error(error)
    }
}

fetchCountryInformation()