import Footer from 'components/Footer';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';

import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import 'styles/scss/main.scss';

const Movies = lazy(() => import('features/Movies'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/trang-chu" />
            <Route path="/trang-chu" component={Movies} />
            {/* <Route component={NotFound} /> */}
          </Switch>

          <ScrollToTop></ScrollToTop>
          <Footer></Footer>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
