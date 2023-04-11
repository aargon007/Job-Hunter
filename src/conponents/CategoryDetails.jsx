import React from 'react';

const CategoryDetails = ({item}) => {
    const {logo, name, jobs} = item;

    return (
        <div className='bg-gray-100 space-y-5 rounded-md shadow-md transition-all hover:bg-indigo-100 px-10 py-10 w-full'>
            <img src={logo} alt="" className='h-10 w-10' />
            <h3 className='text-lg font-semibold'>{name}</h3>
            <p className=''>{jobs} jobs available</p>
        </div>
    );
};

export default CategoryDetails;