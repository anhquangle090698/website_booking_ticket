import { unwrapResult } from '@reduxjs/toolkit';
import Carousel from 'components/Carousel';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Popup from 'components/Popup';
import ListSlide from 'features/Movies/components/ListSilde';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Counter } from './features/counter/Counter';
import 'styles/scss/main.scss';
import SystemCinema from 'features/Movies/components/SystemCinema';
import { getListMoviesAsync, getListSystemCinemaAsync, getListShowTimeSystemCinemaAsync } from 'features/Movies/moviesSlice';
import ScrollToTop from 'components/ScrollToTop';
import News from 'components/News';

function App() {

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
      <Popup></Popup>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </>
  );
}

export default App;
