import React from 'react';
import NavBar from './conponents/NavBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='px-5 md:px-28'>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;