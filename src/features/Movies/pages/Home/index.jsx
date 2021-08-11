import Carousel from 'components/Carousel';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Introduction from 'components/Introduction';
import Loading from 'components/Loading';
import News from 'components/News';
import Popup from 'components/Popup';
import Promotion from 'components/Promotion';
import ScrollToTop from 'components/ScrollToTop';
import ListSlide from 'features/Movies/components/ListSlide';
import SelectSearch from 'features/Movies/components/SelectSearch';
import SystemCinema from 'features/Movies/components/SystemCinema';
import {
  getAllListShowtimeAsync,
  getListMoviesAsync,
  getListShowTimeSystemCinemaAsync,
  getListSystemCinemaAsync,
} from 'features/Movies/moviesSlice';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

Home.propTypes = {
  loading: PropTypes.bool,
  getListMovies: PropTypes.func,
  getListSystemCinema: PropTypes.func,
  getListShowtime: PropTypes.func,
  getAllListShowtime: PropTypes.func,
};

function Home(props) {
  //Custom hook show loading
  const loading = useShowLoading(1500);

  const dispatch = useDispatch();

  useEffect(() => {
    const getListMovies = async () => {
      dispatch(await getListMoviesAsync());
    };

    getListMovies();
  }, []);

  useEffect(() => {
    const getListSystemCinema = async () => {
      dispatch(await getListSystemCinemaAsync());
    };

    getListSystemCinema();
  }, []);

  useEffect(() => {
    const getListShowtime = async () => {
      dispatch(await getListShowTimeSystemCinemaAsync('BHDStar'));
    };

    getListShowtime();
  }, []);

  useEffect(() => {
    const getAllListShowtime = async () => {
      dispatch(await getAllListShowtimeAsync());
    };

    getAllListShowtime();
  }, []);
  return (
    <>
      {loading && <Loading></Loading>}

      {!loading && (
        <>
          <Header></Header>
          <Carousel></Carousel>
          <SelectSearch></SelectSearch>
          <ListSlide></ListSlide>
          <SystemCinema></SystemCinema>
          <News></News>
          <Promotion></Promotion>
          <Introduction></Introduction>
          <Popup></Popup>
          <ScrollToTop></ScrollToTop>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default Home;
