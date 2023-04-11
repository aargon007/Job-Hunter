import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobdetails from './AppliedJobdetails';
import { Fragment, useState } from 'react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const AppliedJob = () => {
    const totalAppliedJobs = useLoaderData();

    const [btnName, setBtnName] = useState("Filter By");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filterData, setFilterData] = useState([]);

    const handleJobType = (type)=>{
        const applyData = [...totalAppliedJobs];
        const data = applyData.filter(rd => rd.remoteOrOnsite == type);
        setBtnName(type);
        setFilterData(data);
        setIsFilterOpen(false);
    }

    return (
        <div>
            <h1 className='bg-gray-100 px-5 md:px-28 text-2xl font-bold text-center py-10'>
                Your Applied Jobs : {totalAppliedJobs ? totalAppliedJobs.length : "0"} 
            </h1>
            <div className="flex items-center mx-auto px-5 md:px-28 mt-5 justify-end md:w-[500px] w-[300px]">
                <div className="relative w-[30rem]">
                    <button onClick={()=> setIsFilterOpen(!isFilterOpen)}  className="flex w-full items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300">
                        {btnName}
                        <ChevronDownIcon  className="h-5 w-5 text-gray-400"  aria-hidden="true"    />
                    </button>
                    { isFilterOpen && (
                        <ul className="z-2 absolute mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300" x-show="open">
                            
                            <li className="cursor-pointer select-none p-2 hover:bg-gray-200" onClick={()=> handleJobType("Remote")}>
                                Remote
                            </li>
                            <li className="cursor-pointer select-none p-2 hover:bg-gray-200" onClick={()=> handleJobType("Onsite")}>
                                OnSite
                            </li>
                    </ul>
                    )}
                </div>
            </div>
            <div className='px-5 md:px-28 my-10 space-y-5'>
                {
                    (filterData == false) && totalAppliedJobs.map(jobInfo => <AppliedJobdetails
                        jobInfo={jobInfo}
                        key={jobInfo.id}
                    ></AppliedJobdetails>)
                }
                {
                  filterData &&  filterData.map(jobInfo => <AppliedJobdetails
                        jobInfo={jobInfo}
                        key={jobInfo.id}
                    ></AppliedJobdetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;