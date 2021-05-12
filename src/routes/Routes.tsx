import React, { forwardRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import TopMovies from "../pages/TopMovies";
import MovieList from "../pages/MovieList";
import Movie from "../pages/Movie";

const Routes = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div role='routes' ref={ref}>
            <Switch>
                <Route exact path='/' component={TopMovies} />
                <Route exact path='/movies' component={MovieList} />
                <Route path='/movies/:id' component={Movie} />
            </Switch>
        </div>

    );
})

export default Routes;