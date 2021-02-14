const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2f19285728dc98df2771c260afd0ca8e&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2f19285728dc98df2771c260afd0ca8e&query="'

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote, overview} = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        
        <div class="movie">
            <img src="` + movie.poster_path + `" alt="movie">
            <div class="movie-info">
                <h3>` + movie.title + `</h3>
                <span class="green"> ` + movie.vote + `</span>
            </div>
            <div class="overview">
                <h3>Overview</h3> ` + movie.overview + `
                
            </div>
        </div>
        
        `;
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    } else {
        window.location.reload();

    }
})



