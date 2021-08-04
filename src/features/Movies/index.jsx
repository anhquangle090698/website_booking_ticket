import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailMovie from './pages/DetailMovie';
import Home from './pages/Home';
import Showing from './pages/Showing';
import ResultSearch from './pages/ResultSearch';

function Movies(props) {
  const match = useRouteMatch();
  // console.log(match);

  return (
    <Switch>
      <Route exact path={match.url} component={Home} />
      <Route path={`${match.url}/lich-chieu/:maPhim`} component={DetailMovie} />
      <Route path={`${match.url}/phim-dang-chieu`} component={Showing} />
      <Route path={`${match.url}/ket-qua-tim-kiem`} component={ResultSearch} />

      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

Movies.propTypes = {};

export default Movies;
