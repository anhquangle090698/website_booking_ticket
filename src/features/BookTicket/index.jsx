import NotFound from 'components/NotFound';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import TicketRoom from './pages/TicketRoom';

BookTicket.propTypes = {
  match: PropTypes.object.isRequired,
};

function BookTicket(props) {
  //Get path from url
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/:maLichChieu`} component={TicketRoom} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default BookTicket;
