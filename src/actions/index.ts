import { Dispatch } from "redux";
import actionType from "./actionTypes";
import { MoviesType, MovieType } from "../dataType";
import updateMoviePictures from "../helpers/movie.helpers";

/* Action Creators */

const loadStart = () => ({
    type: actionType.FETCH_REQUEST
});

const setTopMovies = (topMovies: MoviesType[]) => ({
    type: actionType.FETCH_TOP_MOVIES,
    payload: topMovies
});

const setError = (error: string) => ({
    type: actionType.FETCH_ERROR,
    payload: error
});

const selectMovie = (id: number) => ({
    type: actionType.SELECT_MOVIE,
    payload: id
});

const setMovie = (movie: MovieType) => ({
    type: actionType.FETCH_MOVIE,
    payload: movie
});


//: ActionCreator<ThunkAction<Promise<any>, SearchResponse, null, any>>

/* Redux thunk functions */

const fetchTopMovies = (url: string, limit?: number) => {

    return async (dispatch: Dispatch) => {

        dispatch(loadStart());

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (limit) {
                dispatch(setTopMovies(updateMoviePictures(data.results.slice(0, limit))));
                return data;
            }

            dispatch(setTopMovies(updateMoviePictures(data.results)));
            return data;

        } catch (error) {
            dispatch(setError(`Failed to load movies : ${error.message}`));
        }
    }
}

const fetchMovie = (url: string) => {

    return async (dispatch: Dispatch) => {
        dispatch(loadStart());

        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch(setMovie(data));
            return data;

        } catch (error) {
            dispatch(setError(`Failed to load movie : ${error.message}`));
        }
    }
}

export { loadStart, setTopMovies, setMovie, setError, fetchTopMovies, fetchMovie, selectMovie };