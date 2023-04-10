import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliedJobdetails = ({jobInfo}) => {
    const {companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrParttime, salary, location, id} = jobInfo;
    const navigate = useNavigate();
    const handleNavigation = ()=>{
        navigate(`/job/${id}`)
    }

    return (
        <div className='border rounded-md p-5 space-y-5 flex justify-between flex-col md:flex-row md:items-center' >
            <div className='flex md:items-center flex-col md:flex-row gap-10'>
                <div className='bg-gray-100 py-16  md:px-8 px-28 rounded-md'>
                    <img src={companyLogo} alt="" className='max-h-10 w-24' />
                </div>
                <div className='space-y-3'>
                    <h3 className='text-2xl font-bold'>{jobTitle}</h3>
                    <p className='text-xl text-[#757575]'>{companyName}</p>
                    <div className='flex gap-4'>
                        <p className='text-blue-500 border rounded-md px-2 py-1 border-blue-500'>{remoteOrOnsite}</p>
                        <p className='text-blue-500 border rounded-md px-2 py-1 border-blue-500'>{fulltimeOrParttime}</p>
                    </div>
                    <div className='flex gap-5 text-[#757575]'>
                        <p className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {location}
                        </p>
                        <p className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>  Salary : {salary} </p>
                    </div>
                </div>
            </div>
            <button className='btn-primary' onClick={handleNavigation}>View Details</button>
        </div>
    );
};

export default AppliedJobdetails;