import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Sign from 'features/Login/pages/Sign';

function Login(props) {
    const match = useRouteMatch();
    console.log(match);

  return (
    <Switch>
      <Route exact path={match.url} component={Sign} />

      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

Login.propTypes = {

}

export default Login

