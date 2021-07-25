import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import TicketRoom from './pages/TicketRoom';

function BookTicket(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}/:maLichChieu`} component={TicketRoom} />
      {/* {/* <Route path={`${match.url}/add`} component={AddEditPage} /> */}

      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

BookTicket.propTypes = {};

export default BookTicket;
