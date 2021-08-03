import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Promotion1 from 'features/News/components/Promotion/Promotion1';
import Promotion2 from 'features/News/components/Promotion/Promotion2';
import Promotion3 from 'features/News/components/Promotion/Promotion3';
import Promotion4 from 'features/News/components/Promotion/Promotion4';
import Promotion5 from 'features/News/components/Promotion/Promotion5';
import Promotion6 from 'features/News/components/Promotion/Promotion6';
import Promotion7 from 'features/News/components/Promotion/Promotion7';
import Promotion8 from 'features/News/components/Promotion/Promotion8';

function PromotionFilm(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/bap-milo-doc-la-chao-2021`} component={Promotion1} />
      <Route path={`${match.url}/ngay-thanh-vien-milo-day`} component={Promotion2} />
      <Route path={`${match.url}/tung-bung-hai-sao-nhan-uu-dai-khung`} component={Promotion3} />
      <Route path={`${match.url}/x2-thanh-vien-x2-quyen-loi`} component={Promotion4} />
      <Route
        path={`${match.url}/ngay-tri-an-cua-galaxy-cinema-ngay-thu-hai-dau-tien-moi-thang`}
        component={Promotion5}
      />
      <Route path={`${match.url}/tiec-tra-tat-nien-xem-phim-mien-phi`} component={Promotion6} />
      <Route path={`${match.url}/galaxy-cinema-tri-an-thanh-vien`} component={Promotion7} />
      <Route path={`${match.url}/xem-phim-hay-nhan-li-xi-chat`} component={Promotion8} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

PromotionFilm.propTypes = {};

export default PromotionFilm;
