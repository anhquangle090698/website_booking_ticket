import React, { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailMovie from './pages/DetailMovie';
import Home from './pages/Home';
import Showing from './pages/Showing';
import ResultSearch from './pages/ResultSearch';
import PropTypes from 'prop-types';
import NotFound from 'components/NotFound';

Movies.propTypes = {
  match: PropTypes.object.isRequired,
};

function Movies(props) {
  //Get path from url
  const match = useRouteMatch();

  return (
    <Suspense>
      <Switch>
        <Route exact path={match.url} component={Home} />
        <Route path={`${match.url}/lich-chieu/:maPhim`} component={DetailMovie} />
        <Route path={`${match.url}/phim-dang-chieu`} component={Showing} />
        <Route path={`${match.url}/ket-qua-tim-kiem`} component={ResultSearch} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

Movies.propTypes = {};

export default Movies;
