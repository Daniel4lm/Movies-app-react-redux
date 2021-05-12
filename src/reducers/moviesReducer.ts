import actionType from "../actions/actionTypes";
import { Action, SearchResponse } from "../dataType";

const initialState: SearchResponse = {
    page: 0,
    total_results: 0,
    total_pages: 0,
    results: [],
    topMovies: [],
    selectedMovie: 0,
    isLoading: false,
    errorMessage: ''
};

const moviesReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case actionType.FETCH_MOVIES:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                page: action.payload.page,
                total_results: action.payload.total_results,
                total_pages: action.payload.total_pages,
                results: action.payload.results,
            };
        case actionType.FETCH_TOP_MOVIES:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                page: 1,
                total_results: 10,
                total_pages: 1,
                topMovies: action.payload
            };
        case actionType.SELECT_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload
            };
        case actionType.FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMessage: ''
            };
        case actionType.FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default moviesReducer;