const cardWrap = document.getElementsByClassName("card-Wrap")[0];
const containersitems = document.querySelectorAll(".containers-items");
// ARRY DATA

// our api key / global varibales
let requestCount = 10;
let API_KEY = `https://pokeapi.co/api/v2/pokemon?limit=${requestCount}&offset=0`;

//our data fetch api function
async function getData(Key) {
  try {
    const response = await fetch(Key);
    let data = await response.json();
    let resultsData = data.results;
    showCards(resultsData);
    console.log(resultsData);
  } catch (error) {
    console.log(error);
  }
}

getData(API_KEY);

// creating elements dynamically

const showCards = async (resultsData) => {
  resultsData.forEach(async (item) => {
    let pokeIds = `https://pokeapi.co/api/v2/pokemon/${item.name}/`;
    const pokieRes = await fetch(pokeIds);
    const pokieData = await pokieRes.json();
    let pokieTypes = pokieData.types[0].type.name;
    console.log(pokieData);
    //  => parent element
    const cardsEl = document.createElement("div");

    cardsEl.classList = "cards";

    //  => children elements
    const cardImg = document.createElement("img");
    cardImg.classList = "card-Img";
    cardImg.src = `${pokieData.sprites.front_default}`;

    const cardID = document.createElement("p");
    cardID.classList = "card-ID";
    cardID.textContent = `## ${pokieData.id}`;

    const cardTitle = document.createElement("h1");
    cardTitle.id = "card-Title";
    cardTitle.textContent = item.name;

    const cardType = document.createElement("h4");
    cardType.classList = "card-Type";
    cardType.textContent = pokieTypes;

    // we use append to put the child element inside of parent element
    cardsEl.append(cardImg, cardID, cardTitle, cardType);
    cardWrap.append(cardsEl);
  });
};

containersitems.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("button clicked", e.target.value);
    cardWrap.innerHTML = "";
    requestCount = e.target.value;
    getData(`https://pokeapi.co/api/v2/pokemon?limit=${requestCount}&offset=0`);
  });
});
