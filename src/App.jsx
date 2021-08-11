import Authentication from 'components/Authentication';
import Loading from 'components/Loading';
import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//Main contain entire scss of app
import 'styles/scss/main.scss';

const Movies = lazy(() => import('features/Movies'));
const Login = lazy(() => import('features/Login'));
const User = lazy(() => import('features/User'));
const BookTicket = lazy(() => import('features/BookTicket'));
const News = lazy(() => import('features/News'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <Switch>
          <Redirect exact from="/" to="/trang-chu" />
          <Route path="/trang-chu" component={Movies} />
          <Route path="/dang-nhap" component={Login} />
          <Route path="/tai-khoan-cua-toi" component={User} />
          <Route path="/tin-tuc" component={News} />
          <Authentication path="/dat-ve" Component={BookTicket}></Authentication>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
