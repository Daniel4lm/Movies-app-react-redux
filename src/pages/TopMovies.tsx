import React, { useEffect } from 'react';
import { MovieType } from "../dataType";
import { Action, Dispatch } from "redux";
import { connect, useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actionName from '../actions';
import { SearchResponse, StoreType } from "../dataType";

import styles from "./TopMovies.module.css";
import { Link } from 'react-router-dom';

const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';
const { REACT_APP_MOVIE_DB_API_KEY } = process.env;
const topRatedUrl: string = `${MOVIE_DB_BASE_URL}/movie/top_rated?api_key=${REACT_APP_MOVIE_DB_API_KEY}&language=en-US`;

interface StateTypes {
    topMovies: MovieType[];
    loading: boolean;
    errorMsg: string;
}

interface DispatchTypes {
    loadTopMovies: (url: string) => void;
}

type Props = StateTypes & DispatchTypes;

const TopMovies = ({ topMovies, loading, errorMsg, loadTopMovies }: Props) => {

    /*const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionName.fetchTopMovies(topRatedUrl));
    }, [dispatch]);*/


    useEffect(() => {
        loadTopMovies(topRatedUrl);
    }, []);

    useEffect(() => {
        console.log(topMovies)
    }, [topMovies])

    return (
        <div className={styles.movieContainer}>

            {loading && <p className={styles.value}>Loading ...</p>}

            {errorMsg && <p className={styles.value}>Error: {errorMsg}</p>}

            <h4 className={styles.value}> Top 10 movies </h4>
            <hr></hr>

            <div className={styles.movietvList}>
                {topMovies?.map((movie) => {
                    return (
                        <Link key={movie.id} to={`/movies/${movie.id}`}>
                            <div className={styles.movieCard}>
                                <div className={styles.cover}></div>
                                <div className={styles.cardTitle}>
                                    <span>
                                        {movie.title}<hr></hr>
                                    (<b>{movie.release_date.substring(0, 4)}</b>)
                                </span>

                                </div>
                                <img className={styles.cardImage} src={movie.poster_path} alt='Movie' />
                            </div>
                        </Link>
                    )
                })}
            </div>


        </div>
    );
}

/*
<h4 className={styles.title}>{movie.title}</h4>
                            <h6 className={styles.date}>({movie.release_date.substring(0, 4)})</h6>
                            <p className={styles.overview}>{movie.overview}</p>
*/

const mapStateToProps = (state: StoreType) => ({
    topMovies: state.movies.topMovies,
    loading: state.movies.isLoading,
    errorMsg: state.movies.errorMessage
});

interface DispatchFromProps {
    loadTopMovies: (rl: string) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<SearchResponse, void, Action>) => ({
    loadTopMovies: (url: string) => dispatch(actionName.fetchTopMovies(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);
