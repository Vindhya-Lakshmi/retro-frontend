import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/main'
import Property from '../components/Property'
import Footer from '../components/Footer';
import ViewProperty from '../components/ViewProperty';


const HomePage = () => {

  return (
    <>
      <Navbar />
      <Main />
      <Property />
      <Footer />
      <ViewProperty />
    </>
  );
}
export default HomePage;
