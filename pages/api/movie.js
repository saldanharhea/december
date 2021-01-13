import Axios from "axios";

const prefix = 'https://api.themoviedb.org/3/';
const api_key = '64e5e52b0be480556671e1b5f5e825bd';

export async function getLatestMovies() {
    return Axios.get(`${prefix}movie/now_playing?`, {params: {api_key: api_key}})
        .then((movieResponse) => {
            if (movieResponse) {
                return {
                    statusCode: movieResponse.status,
                    data: movieResponse.data.results.map((mov) => {
                        return formatMovieResponse(mov);
                    })
                }
            }
        })
}

export async function getTrendingMovies() {
    return Axios.get(`${prefix}trending/movie/week`, {params: {api_key: api_key}})
        .then((movieResponse) => {
            if (movieResponse) {
                return {
                    statusCode: movieResponse.status,
                    data: movieResponse.data.results.map((mov) => {
                        return formatMovieResponse(mov);
                    })
                }
            }
        })
}

export async function getQueriedDetails(query) {
    return Axios.get(`${prefix}search/multi`, {params: {api_key: api_key, query: query}})
        .then((movieResponse) => {
            if (movieResponse) {
                return {
                    statusCode: movieResponse.status,
                    data: movieResponse.data.results.map((mov) => {
                        return formatMovieResponse(mov);
                    })
                }
            }
        })
}

export async function getMovieDetails(movieId) {
    return Axios.get(`${prefix}movie/${movieId}`, {params: {api_key: api_key}})
        .then((movieResponse) => {
            if (movieResponse) {
                console.log(movieResponse)
                return {
                    statusCode: movieResponse.status,
                    data: formatMovieResponse(movieResponse.data),

                }
            }
        })
}

const formatMovieResponse = (data) => {
    return {
        id: data.id,
        title: data.title,
        vote: data.vote_average,
        poster: data.poster_path ? 'https://image.tmdb.org/t/p/w500/' + data.poster_path: '',
        overview: data.overview,
    }
}

