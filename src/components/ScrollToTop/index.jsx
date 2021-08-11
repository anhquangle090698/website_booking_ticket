import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

ScrollToTop.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isComponentMounted: PropTypes.bool.isRequired,
  handleScrollToTop : PropTypes.func
};

ScrollToTop.defaultProps = {
  isVisible: false,
  isComponentMounted: true,
  handleScrollToTop : () => {}
};

function ScrollToTop(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isComponentMounted, setIsComponentMounted] = useState(true);

  useEffect(() => {
    if (isComponentMounted) {
      document.addEventListener('scroll', () => {
        if (window.pageYOffset > 1000) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }

    return () => {
      setIsComponentMounted(false);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="scroll"
          onClick={() => {
            handleScrollToTop();
          }}
        >
          <i className="fa fa-angle-double-up scroll__icon"></i>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
