import actionType from "../actions/actionTypes";
import { Action, SelectedMovie } from "../dataType";

const initialState: SelectedMovie = {
    data: null,
    isLoading: false,
    errorMessage: ''
};

const selectedMovieReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case actionType.FETCH_REQUEST:
            return {
                ...state,
                data: null,
                isLoading: true,
                errorMessage: null,
            }
        case actionType.FETCH_MOVIE:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                errorMessage: null,
            }
        case actionType.FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default selectedMovieReducer;