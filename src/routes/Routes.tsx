import React, { forwardRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import TopMovies from "../pages/TopMovies";
import MovieList from "../pages/MovieList";

const Routes = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref}>
            <Switch>
                <Route exact path='/' component={TopMovies} />
                <Route path='/movies' component={MovieList} />
            </Switch>
        </div>

    );
})

export default Routes;