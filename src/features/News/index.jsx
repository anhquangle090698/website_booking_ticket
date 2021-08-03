import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import BlogFilm from './pages/BlogFilm';
import CommentFilm from './pages/CommentFilm';
import PromotionFilm from './pages/PromotionFilm';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';

function News(props) {
  const match = useRouteMatch();
  console.log('macthnew', match);
  return (
    <>
      <Header></Header>
      <Switch>
        <Route path={`${match.url}/goc-dien-anh`} component={BlogFilm} />
        <Route path={`${match.url}/binh-luan-phim`} component={CommentFilm} />
        <Route path={`${match.url}/khuyen-mai`} component={PromotionFilm} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </>
  );
}

News.propTypes = {};

export default News;
