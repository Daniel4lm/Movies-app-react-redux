
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

/* Importing our main reducer */
import rootReducer from "../reducers";

const composeEnhancers = process.env.NODE_ENV === 'development' ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

/* Creating out store for entirely app */
const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk)
)

export default store;





//import { configureStore } from '@reduxjs/toolkit';
//import moviesReducer from './movieReducer';



/*
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;*/

