'use strict';

const form = document.querySelector('form');
const input = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const value = input.value;

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value}`);
    const data = await response.json();

    results.innerHTML = '';

    for (let joke of data.result) {
      const article = document.createElement('article');

      const p = document.createElement('p');
      p.innerText = joke.value;

      article.appendChild(p);

      results.appendChild(article);
    }

  }
  catch (error) {
    console.log(error.message);
  }
});