import NotFound from 'components/NotFound';
import Blog1 from 'features/News/components/Blog/Blog1';
import Blog2 from 'features/News/components/Blog/Blog2';
import Blog3 from 'features/News/components/Blog/Blog3';
import Blog4 from 'features/News/components/Blog/Blog4';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

BlogFilm.propTypes = {
  match: PropTypes.object,
};

function BlogFilm(props) {
  //Get path from url
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          path={`${match.url}/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam`}
          component={Blog1}
        />
        <Route path={`${match.url}/pixar-ngoai-le-duy-nhat-cua-hollywood-p2`} component={Blog2} />
        <Route
          path={`${match.url}/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds`}
          component={Blog3}
        />
        <Route
          path={`${match.url}/phim-kinh-dien-su-im-lang-cua-bay-cuu-tieng-thet-dam-mau-va-ga-bac-si-benh-hoan`}
          component={Blog4}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default BlogFilm;
