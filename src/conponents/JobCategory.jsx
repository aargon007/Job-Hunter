import React, { useEffect, useState } from 'react';
import CategoryDetails from './CategoryDetails';

const JobCategory = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const loadData = async ()=>{
            const res =await fetch('/JobCategory.json');
            const data = await res.json();
            setCategory(data)
        }
        loadData();
    }, [])

    return (
        <div className='space-y-5 px-5 md:px-28'>
            <h1 className='text-3xl font-bold text-center'>Job Category List</h1>
            <p className='text-center text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex gap-5 justify-between flex-col md:flex-row'>
                {
                    category.map( item => <CategoryDetails 
                    key={item.id}
                    item={item}
                    ></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default JobCategory;