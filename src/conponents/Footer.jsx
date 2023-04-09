import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#1A1919] px-5 md:px-28 py-10 text-white'>
            <div className='flex flex-col md:flex-row justify-between space-y-5 md:space-y-0'>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-bold'>Job Hunter</h1>
                    <p>Job Hunter was founded to make <br /> meaningful connections between <br /> job seekers and employers.</p>
                    <div className='flex gap-4'>
                        <img src="https://img.icons8.com/fluency/256/facebook-new.png" alt="" className='h-6'/>
                        <img src="https://img.icons8.com/color/256/twitter-circled.png" alt="" className='h-6'/>
                        <img src="https://img.icons8.com/fluency/256/instagram-new.png" alt="" className='h-6'/>
                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h3 className='text-xl font-semibold'>Company</h3>
                    <Link to='/about'>About Us</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/success'>Success</Link>
                </div> 
                <div className='space-y-3'>
                    <h3 className='text-xl font-semibold'>Contact</h3>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr className='border border-gray-100/50 my-3'></hr>
            <div className='flex justify-between flex-col md:flex-row'>
                <p>@2023 Job Hunter. All Rights Reserved</p>
                <p>Powered by Job Hunter</p>
            </div>
        </div>
    );
};

export default Footer;