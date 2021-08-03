import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Comment1 from 'features/News/components/Comment/Comment1';
import Comment2 from 'features/News/components/Comment/Comment2';
import Comment3 from 'features/News/components/Comment/Comment3';
import Comment4 from 'features/News/components/Comment/Comment4';

function CommentFilm(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.url}/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau`}
        component={Comment1}
      />
      <Route
        path={`${match.url}/review-gia-dinh-croods-ky-nguyen-moi-vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong`}
        component={Comment2}
      />
      <Route path={`${match.url}/review-tiec-trang-mau-hoi-tu-anh-tai`} component={Comment3} />
      <Route
        path={`${match.url}/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong`}
        component={Comment4}
      />
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

CommentFilm.propTypes = {};

export default CommentFilm;
