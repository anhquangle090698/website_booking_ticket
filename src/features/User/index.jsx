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

      {/* {/* <Route path={`${match.url}/add`} component={AddEditPage} /> */}

      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

User.propTypes = {};

export default User;
