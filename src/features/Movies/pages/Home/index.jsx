import Carousel from 'components/Carousel';
import Introduction from 'components/Introduction';
import News from 'components/News';
import Popup from 'components/Popup';
import Promotion from 'components/Promotion';
import ListSlide from 'features/Movies/components/ListSlide';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';
import SystemCinema from 'features/Movies/components/SystemCinema';
import {
  getListMoviesAsync,
  getListShowTimeSystemCinemaAsync,
  getListSystemCinemaAsync
} from 'features/Movies/moviesSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Home(props) {
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
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <ListSlide></ListSlide>
      <SystemCinema></SystemCinema>
      <News></News>
      <Promotion></Promotion>
      <Introduction></Introduction>
      <Popup></Popup>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </>
  );
}

export default Home;
