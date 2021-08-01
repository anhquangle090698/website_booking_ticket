import Authentication from 'components/Authentication';
import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import 'styles/scss/main.scss';

const Movies = lazy(() => import('features/Movies'));
const Login = lazy(() => import('features/Login'));
const User = lazy(() => import('features/User'));
const BookTicket = lazy(() => import('features/BookTicket'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Redirect exact from="/" to="/trang-chủ" />
          <Route path="/trang-chủ" component={Movies}/>
          <Route path="/đăng-nhập" component={Login} />
          <Route path="/tài-khoản-của-tôi" component={User} />
          <Authentication path="/đặt-vé" Component={BookTicket}></Authentication>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
