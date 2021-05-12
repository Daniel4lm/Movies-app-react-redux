import moviesReducer from "../../reducers/moviesReducer";
import actionName from "../../actions/actionTypes";
import * as actionCreator from "../../actions";


describe('movies reducer', () => {

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

    describe('initial state', () => {
        test('should return the initial state', () => {
            const dummyAction = {
                type: 'DELETE_MOVIE'
            }
            expect(moviesReducer(undefined, dummyAction)).toEqual(initialState);
        });
    });

    describe('handle top movies', () => {
        test('should handle top movies', async () => {

            expect(moviesReducer(undefined, actionCreator.loadStart())).toEqual(
                {
                    ...initialState,
                    isLoading: true,
                    errorMessage: ''
                }
            );

            try {
                const fetchUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ce81870dbafabf2f4570b9b9522e7a5f&language=en-US';
                const response = await fetch(fetchUrl);
                const data = await response.json();

                expect(moviesReducer(undefined, actionCreator.setTopMovies(data.results.slice(0, 10)))).toEqual(
                    {
                        ...initialState,
                        isLoading: false,
                        errorMessage: null,
                        page: 1,
                        total_results: 10,
                        total_pages: 1,
                        topMovies: data.results.slice(0, 10)
                    }
                );

            } catch (error) {
                expect(moviesReducer(undefined, actionCreator.setError(`Failed to load movies : ${error.message}`))).toEqual(
                    {
                        ...initialState,
                        isLoading: false,
                        errorMessage: `Failed to load movies : ${error.message}`
                    }
                )
            }
        })
    })

})