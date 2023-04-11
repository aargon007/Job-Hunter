import React from 'react';
import Lottie from 'lottie-react'
import jobHunting from  '../assets/jobHunting.json';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const handleNavigation = ()=>{
        navigate("/all-jobs")
    }

    return (
        <div className='flex md:flex-row flex-col-reverse md:gap-20 gap-6 items-center bg-gray-100 py-5 md:py-0 px-5 md:px-28'>
            <div className='w-full space-y-6'>
                <h1 className='md:text-5xl text-3xl font-bold tracking-widest leading-loose md:leading-loose'>Find Your <br /> <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Dream Job</span> Now.</h1>
                <p className='text-[#757575] tracking-wider leading-loose'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn-primary" onClick={handleNavigation}>Get Started</button>
            </div>
            <div className='md:w-full w-3/4 bg-gray-100  md:px-20'>
                    <Lottie animationData={jobHunting} loop={true} />
            </div>
        </div>
    );
};

export default Header;