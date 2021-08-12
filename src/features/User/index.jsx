import NotFound from 'components/NotFound';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MyAccount from './pages/MyAccount';

User.propTypes = {
  match: PropTypes.object.isRequired,
};

function User(props) {
  //Get path from url
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MyAccount} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default User;
