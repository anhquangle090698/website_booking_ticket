import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyAccount from './pages/MyAccount';

function User(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MyAccount} />

      {/* {/* <Route path={`${match.url}/add`} component={AddEditPage} /> */}

      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

User.propTypes = {};

export default User;
