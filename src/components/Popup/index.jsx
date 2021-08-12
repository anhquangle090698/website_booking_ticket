import { closePopup } from 'features/Logic/logicSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

Popup.propTypes = {
  active: PropTypes.bool.isRequired,
  sourceVideo: PropTypes.string.isRequired,
};

Popup.defaultProps = {
  active: false,
  sourceVideo: '',
};

//Component popup handle popup for view video intro movie
function Popup() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.logic.active);
  const sourceVideo = useSelector((state) => state.logic.sourceVideo);

  return (
    <>
      <div
        className={active ? `popup active` : 'popup'}
        onClick={() => {
          dispatch(closePopup());
        }}
      >
        <div className="popup-content">
          <div
            className="popup-content__close"
            onClick={() => {
              // dispatch(handleLogicPopupCloseAction());
            }}
          >
            <i className="fa fa-times popup-content__icon"></i>
          </div>
        <iframe
            title="Trailer Movie"
            className="popup-content__frame"
            width="900"
            height="600"
            src={sourceVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Popup;
