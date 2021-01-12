import Axios from "axios";

export async function getLatestMovies() {
    return Axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&include_adult=false&api_key=64e5e52b0be480556671e1b5f5e825bd')
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
    return Axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=64e5e52b0be480556671e1b5f5e825bd')
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
    return Axios.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=64e5e52b0be480556671e1b5f5e825bd&append_to_response=credits&language=en-US')
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
        poster: 'https://image.tmdb.org/t/p/w500/'+data.poster_path,
        overview: data.overview,
    }
}

