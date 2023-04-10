import React from 'react';
import NavBar from './conponents/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './conponents/Footer';

const App = () => {
  return (
    <div className=''>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;