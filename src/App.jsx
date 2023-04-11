import React from 'react';
import NavBar from './conponents/NavBar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './conponents/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=''>
      <NavBar></NavBar>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;