import React from 'react';
import Header from './Header';
import JobCategory from './JobCategory';

const Home = () => {
    return (
        <div className='space-y-16 mb-10'>
            <Header></Header>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;