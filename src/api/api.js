import axios from 'axios';

const API_BASE = 'https://movies-tv-shows-database.p.rapidapi.com/';
const HEADERS = {
    'x-rapidapi-key': 'your_api_key',
    'x-rapidapi-host': 'movies-tv-shows-database.p.rapidapi.com'
};

export async function fetchTrendingMovies() {
    const response = await axios.get(API_BASE, {
        params: { page: '1' },
        headers: { ...HEADERS, Type: 'get-trending-movies' }
    });
    return response.data.movie_results;
}

export async function fetchImageByImdb(imdbId) {
    const response = await axios.get(API_BASE, {
        params: { movieid: imdbId },
        headers: { ...HEADERS, Type: 'get-movies-images-by-imdb' }
    });
    return response.data;
}

export async function fetchMovieById(imdbId) {
    const response = await axios.get(API_BASE, {
        params: { movieid: imdbId },
        headers: { ...HEADERS, Type: 'get-movie-details' }
    });
    return response.data;
}

export async function searchMoviesByTitle(title) {
    try {
        const response = await axios.get(API_BASE, {
            params: {
                title,
            },
            headers: {
                ...HEADERS,
                Type: 'get-movies-by-title',
            },
        });

        return response.data.movie_results || []; // <- зависит от структуры
    } catch (error) {
        console.error("Ошибка при поиске фильмов:", error);
        throw error;
    }
}