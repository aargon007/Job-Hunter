import React from 'react';
import NavBar from './conponents/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './conponents/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=''>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;