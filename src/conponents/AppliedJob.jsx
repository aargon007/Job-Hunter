import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobdetails from './AppliedJobdetails';

const AppliedJob = () => {
    const totalAppliedJobs = useLoaderData();

    return (
        <div>
            <h1 className='bg-gray-100 px-5 md:px-28 text-2xl font-bold text-center py-10'>
                Your Applied Jobs : {totalAppliedJobs ? totalAppliedJobs.length : "0"} 
            </h1>
            <div className='px-5 md:px-28 my-10 space-y-5'>
                {
                    totalAppliedJobs.map(jobInfo => <AppliedJobdetails
                        jobInfo={jobInfo}
                        key={jobInfo.id}
                    ></AppliedJobdetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;