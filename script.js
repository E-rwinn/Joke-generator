const jokecontainer = document.getElementById("Joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokecontainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokecontainer.textContent = `${item.joke}`;
        jokecontainer.classList.add("fade");
    })
    .catch(error => console.error('Error fetching joke:', error));
}

btn.addEventListener("click", getJoke);
getJoke();
