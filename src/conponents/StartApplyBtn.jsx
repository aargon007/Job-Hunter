import React from 'react';
import Jobs from './Jobs';

const StartApplyBtn = () => {
    return (
        <>
            <h1 className='bg-gray-100 px-5 md:px-28 text-2xl font-bold text-center py-10'>Welcome to Dream Job</h1>
            <div className='my-10'>
                <Jobs></Jobs>
            </div>
        </>
    );
};

export default StartApplyBtn;