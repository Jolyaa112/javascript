'use strict';

const form = document.querySelector('form');
const input = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const value = input.value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
    const data = await response.json();

    console.log(data);

    results.innerHTML = '';

    for (let tvShow of data) {
      const show = tvShow.show;

      const article = document.createElement('article');

      const name = document.createElement('h2');
      name.innerText = show.name;

      const link = document.createElement('a');
      link.href = show.url;
      link.innerText = show.url;
      link.target = '_blank';

      const image = document.createElement('img');

      if (show.image) {
        image.src = show.image.medium;
      } else {
        image.src = 'https://placehold.co/210x295?text=Not%20Found';
      }

      image.alt = show.name;

      const summary = document.createElement('div');
      summary.innerHTML = show.summary;

      article.appendChild(name);
      article.appendChild(link);
      article.appendChild(image);
      article.appendChild(summary);

      results.appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});