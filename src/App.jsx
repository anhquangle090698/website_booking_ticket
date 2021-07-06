import { unwrapResult } from '@reduxjs/toolkit';
import Carousel from 'components/Carousel';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Popup from 'components/Popup';
import ListSlide from 'features/Movies/components/ListSilde';
import { getAllAsync } from 'features/Movies/moviesSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Counter } from './features/counter/Counter';
import 'styles/scss/main.scss';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllList = async () => {
      dispatch(await getAllAsync());
    };

    getAllList();
  }, [])
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <ListSlide></ListSlide>
      <Popup></Popup>
      <Footer></Footer>
    </>
  );
}

export default App;
