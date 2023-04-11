import { CurrencyDollarIcon, EnvelopeIcon, IdentificationIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getJobData } from '../utilities/localDb';
import { toast } from 'react-toastify';

const JobDetails = () => {
    const jobInfoData = useLoaderData();
    const {jobTitle, salary, jobResponsibility, jobDescription, experiences, educationalRequirements, contactInformation, location, id} = jobInfoData;
    
    const getJobIdFrmLocal = getJobData(); 
    const [ids, setIds] = useState(getJobIdFrmLocal);

    const applyNowBtn = (id) =>{
        console.log(ids);
        if(!(ids.includes(id))){
            toast.success("You have successfully apply for this post.");
            setIds([...ids, id])
        }
        addToDb(id);
    }

    return (
        <div>
            <h1 className='bg-gray-100 px-5 md:px-28 text-2xl font-bold text-center py-10'>Job Details</h1>
            <div className='px-5 md:px-28 flex gap-10 flex-col md:flex-row mt-10'>
                <div className='space-y-5 md:w-8/12'>
                    <p>
                        <span className='font-bold leading-8 tracking-wider'>Job Description : </span> {jobDescription}
                    </p>
                    <p>
                        <span className='font-bold'>Job Responsibility : </span>
                         {jobResponsibility}
                    </p>
                    <p>
                        <span className='font-bold'>Educational Requirements : </span> <br /> 
                        {educationalRequirements}
                    </p>
                    <p>
                        <span className='font-bold'>Experiences : </span> <br />
                        {experiences}
                    </p>
                </div>
                <div className='md:w-4/12 space-y-3'>
                    <div className='bg-gray-100 space-y-3 p-5 rounded-md'>
                        <h3 className='font-bold text-lg'>Job Details</h3>
                        <hr />
                        <div className='space-y-2'>
                            <p className='flex items-center gap-2'>
                                <CurrencyDollarIcon  className='w-5 text-blue-500'></CurrencyDollarIcon>
                                <span className='font-semibold'>Salary : </span> {salary}  (Annualy)
                            </p>
                            <p className='flex items-center gap-2'>
                                <IdentificationIcon  className='w-5 text-blue-500'></IdentificationIcon>
                                <span className='font-semibold'>Job Title : </span> {jobTitle}
                            </p>
                        </div>
                        <h3 className='text-lg font-bold'>Contact Information</h3>
                        <hr />
                        <div className='space-y-2'>
                            <p className='flex items-center gap-2'>
                                <PhoneIcon  className='w-4 text-blue-500'></PhoneIcon>
                                <span className='font-semibold'>Phone : </span> {contactInformation.phone}
                            </p>
                            <p className='flex items-center gap-2'>
                                <EnvelopeIcon  className='w-4 text-blue-500'></EnvelopeIcon>
                                <span className='font-semibold'>Email : </span> {contactInformation.email}
                            </p>
                            <p className='flex items-center gap-2'>
                                <MapPinIcon  className='w-4 text-blue-500'></MapPinIcon>
                                <span className='font-semibold'>Location : </span> {location}
                            </p>
                        </div>
                    </div>
                    <button className='btn-primary w-full' {...(ids.includes(id) && {disabled:true})}  onClick={()=> applyNowBtn(id)}>
                        {ids.includes(id) ? "Submitted" : "Apply Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;