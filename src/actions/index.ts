import { Dispatch } from "redux";
import actionType from "./actionTypes";
import { MovieType, StoreType, Action, SearchResponse, ActionType } from "../dataType";
import updateMoviePictures from "../helpers/movie.helpers";
/* Action Creators */

const loadStart = () => ({
    type: actionType.FETCH_REQUEST
});

const setTopMovies = (topMovies: MovieType[]) => ({
    type: actionType.FETCH_TOP_MOVIES,
    payload: topMovies
});

const setError = (error: string) => ({
    type: actionType.FETCH_ERROR,
    payload: error
})
//: ActionCreator<ThunkAction<Promise<any>, SearchResponse, null, any>>

/* Redux thunk function */

const fetchTopMovies = (url: string) => {

    return async (dispatch: Dispatch) => {

        dispatch(loadStart());

        try {
            const response = await fetch(url);
            const data = await response.json();

            dispatch(setTopMovies(updateMoviePictures(data.results.slice(0, 10))));
            return data;

        } catch (error) {
            dispatch(setError(`Failed to load movies : ${error.message}`));
        }

    }
}

export { loadStart, setTopMovies, setError, fetchTopMovies };