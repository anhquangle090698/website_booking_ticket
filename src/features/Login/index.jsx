import NotFound from 'components/NotFound';
import Sign from 'features/Login/pages/Sign';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

Login.propTypes = {
  match: PropTypes.object.isRequired,
};

function Login(props) {
  //Get path from url
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={Sign} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Login;
