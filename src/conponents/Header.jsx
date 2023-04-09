import React from 'react';

const Header = () => {
    return (
        <div className='flex mt-10 md:flex-row flex-col-reverse gap-20 items-center'>
            <div className='w-full space-y-6'>
                <h1 className='text-5xl font-bold tracking-widest'>Find Your <br /> <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Dream Job</span> Now.</h1>
                <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn-primary">Get Started</button>
            </div>
            <img src='/milon.png.png' alt="" className='w-full h-1/2 md:h-[500px] md:px-20' />
        </div>
    );
};

export default Header;