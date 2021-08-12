import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import BlogFilm from './pages/BlogFilm';
import CommentFilm from './pages/CommentFilm';
import PromotionFilm from './pages/PromotionFilm';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import NotFound from 'components/NotFound';

News.propTypes = {
  match: PropTypes.object.isRequired,
};
function News(props) {
  //Get path from url
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.url}/goc-dien-anh`} component={BlogFilm} />
        <Route path={`${match.url}/binh-luan-phim`} component={CommentFilm} />
        <Route path={`${match.url}/khuyen-mai`} component={PromotionFilm} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

News.propTypes = {};

export default News;
