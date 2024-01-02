const url = "https://official-joke-api.appspot.com/random_joke";

const perOne = document.querySelector("#perOne"); // person one
const perTwo = document.querySelector("#perTwo"); // person two
const jokeId = document.querySelector("p");
const btn = document.querySelector("#btn");

const getJoke = async () => {

    let response = await fetch(url);
    let data = await response.json();
    jokeId.innerText = `Joke #${data.id}`
    perOne.innerText = `Person 1: "${data.setup}"`;
    perTwo.innerText = `Person 2: "${data.punchline}"`;
};


btn.addEventListener("click", getJoke);
