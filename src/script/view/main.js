import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('#movieList');

  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
  };

  const renderResult = results => {
    movieListElement.innerHTML = `<h4 class="text-center mb-4 result">Result Search</h4>`;
    results.forEach ( movies => {
      const {id, original_title, vote_average, poster_path, release_date, original_language } = movies;

      const movieElement = document.createElement('div');
      movieElement.setAttribute('class', 'movie');

      movieElement.innerHTML = `
      <p class="id" hidden>${id}</p>
      <div class="card me-3" id="card">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${poster_path}" id="poster">
        <div class="card-body p-0">
          <h5 class="card-title text-dark mt-2 mb-0">${original_title}</h5>
            <div class="flex items-center text-dark">
                <span class="movie-dec"><i class="bi bi-star-fill" style="color: yellow"></i>
                ${vote_average}</span>
                <span class="movie-dec">|</span>
                <span class="movie-dec">${release_date}</span>
                <span class="movie-dec">|</span>
                <span class="certification movie-dec">${original_language}</span>
            </div>
        </div>
      </div>
    `;

      movieListElement.appendChild(movieElement);
    });
  };

  const fallbackResult = message => {
      movieListElement.innerHTML = '';
      movieListElement.innerHTML += `<p class="rejectMessage">Sorry, the "${message}" movie you were looking for couldn't be found</p>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;