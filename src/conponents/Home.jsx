import React from 'react';
import Header from './Header';
import JobCategory from './JobCategory';
import Jobs from './Jobs';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='space-y-20'>
            <Header></Header>
            <JobCategory></JobCategory>
            <Jobs></Jobs>
            <Footer></Footer>
        </div>
    );
};

export default Home;