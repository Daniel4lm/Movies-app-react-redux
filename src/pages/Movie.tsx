import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action, Dispatch } from "redux";
import * as actionName from '../actions';
import { MovieType, SearchResponse, StoreType } from "../dataType";
import { useParams } from 'react-router-dom';

const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';
const { REACT_APP_MOVIE_DB_API_KEY } = process.env;
const movieUrl: string = `${MOVIE_DB_BASE_URL}/movie/{movie_id}?api_key=${REACT_APP_MOVIE_DB_API_KEY}&language=en-US`;

interface StateTypes {
    movie: MovieType | null;
    loading: boolean;
    errorMsg: string;
}

interface DispatchTypes {
    loadMovie: (url: string) => void;
}

type Props = StateTypes & DispatchTypes;

const Movie = ({ movie, loading, errorMsg, loadMovie }: Props) => {

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        console.log(movieUrl.replace(/{movie_id}/i, id))
        loadMovie(movieUrl.replace(/{movie_id}/i, id));
    }, []);

    return (
        <div >
            <h1>{movie?.title}</h1>
            <h5>IMDB: {movie?.imdb_id}</h5>
            <p>{movie?.overview}</p>
            <p>Popularity: {movie?.popularity}</p>
            <p>Budget: ${movie?.budget}</p>
        </div>
    );
}

const mapStateToProps = (state: StoreType) => ({
    movie: state.movie.data,
    loading: state.movie.isLoading,
    errorMsg: state.movie.errorMessage
});

const mapDispatchToProps = (dispatch: ThunkDispatch<SearchResponse, void, Action>) => ({
    loadMovie: (url: string) => dispatch(actionName.fetchMovie(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);