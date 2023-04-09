import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobItem from './JobItem';

const Jobs = () => {
    const jobData = useLoaderData();
    const [showAll, setShowAll] = useState(false);

    return (
        <div className='space-y-5 px-5 md:px-28'>
            <h1 className='text-center text-3xl font-bold'>Featured Jobs</h1>
            <p className='text-center text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                {
                    jobData.slice(0, showAll ? 6 : 4).map( jobInfo => <JobItem
                    key={jobInfo.id}
                    jobInfo={jobInfo}
                    ></JobItem>)
                }
            </div>
            <div className='text-center'>
                {
                    !showAll && <button className='btn-primary' onClick={()=> setShowAll(true)}>See All Jobs</button>
                }
            </div>
        </div>
    );
};

export default Jobs;