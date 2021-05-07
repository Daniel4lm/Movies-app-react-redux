import { MovieType } from "../dataType";


const updateMoviePictures = (movies: MovieType[], width: number = 300) => {

    return movies.map((movie) => {
        if (movie.backdrop_path !== 'null' && movie.poster_path !== 'null') {
            return {
                ...movie,
                backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                poster_path: `https://image.tmdb.org/t/p/w${width}${movie.poster_path}`
            }
        } else {
            return movie;
        }
    });
}

export default updateMoviePictures;