import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { USER_LOGIN } from 'utils/config';

function Authentication(props) {
  const { Component, ...restParams } = props;

  return (
    <Route
      {...restParams}
      render={(propsRoute) => {
        if (localStorage.getItem(USER_LOGIN)) {
          return <Component {...propsRoute}></Component>;
        }

        return <Redirect to="/đăng-nhập"></Redirect>;
      }}
    />
  );
}

Authentication.propTypes = {};

export default Authentication;
