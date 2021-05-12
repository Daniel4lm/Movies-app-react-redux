import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import * as actionType from "../../actions";
import * as actionName from "../../actions/actionTypes";
import { MovieType } from '../../dataType';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Initialize mockstore with empty state
const initialState = {
    page: 0,
    total_results: 0,
    total_pages: 0,
    results: [],
    topMovies: [],
    selectedMovie: 0,
    isLoading: false,
    errorMessage: ''
}
const store = mockStore(initialState)

describe('movies reducer tests', () => {

    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    });

    /* Sync actions */
    describe('select movie', () => {
        test('Dispatches the correct action and payload', () => {
            const expectedActions = [
                {
                    type: actionName.default.SELECT_MOVIE,
                    payload: 448,
                },
            ];

            store.dispatch(actionType.selectMovie(448));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should set error state', () => {
        const expectedAction = {
            type: actionName.default.FETCH_ERROR,
            payload: 'Not found'
        }
        expect(actionType.setError('Not found')).toEqual(expectedAction);
    });

    /* Async actions */
    it('should execute fetch data', () => {
        // Return the promise
        return store.dispatch<any>(actionType.fetchMovie('https://api.themoviedb.org/3/movie/23816?api_key=ce81870dbafabf2f4570b9b9522e7a5f&language=en-US'))
            .then((data: MovieType) => {
                const actions = store.getActions();
                //console.log('Akcije iz async ', actions);
                expect(actions).toContainEqual(actionType.loadStart());
                expect(actions[1]).toEqual(actionType.setMovie(data));
            })
    });

})