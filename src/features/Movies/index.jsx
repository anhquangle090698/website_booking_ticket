import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailMovie from './pages/DetailMovie';
import Home from './pages/Home';

function Movies(props) {
  const match = useRouteMatch();
  //   console.log(match);

  return (
    <Switch>
      <Route exact path={match.url} component={Home} />
      <Route path={`${match.url}/lịch-chiếu/:maPhim`} component={DetailMovie} />

      {/* {/* <Route path={`${match.url}/add`} component={AddEditPage} /> */}

      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

Movies.propTypes = {};

export default Movies;
