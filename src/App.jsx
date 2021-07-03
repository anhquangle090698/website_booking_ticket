import Carousel from 'components/Carousel';
import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
// import { Counter } from './features/counter/Counter';
import 'styles/scss/main.scss';

function App() {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <Footer></Footer>
    </>
  );
}

export default App;
