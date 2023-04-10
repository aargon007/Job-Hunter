
const getJobData = () => {
    let appliedJob = [];
    //get data from local storage
    const Jobs = localStorage.getItem('appliedJob');
    if (Jobs) {
        appliedJob = JSON.parse(Jobs);
    }
    return appliedJob;
}

const getJobDataFrmLocal = async () => {
    const res = await fetch('job_info.json');
    const data = await res.json();

    const appliedJob = getJobData();
    const jobContainer = [];

    for (const id of appliedJob) {
      const foundJob = data.find(job => job.id == id)
      if (foundJob) {
        jobContainer.push(foundJob)
      }
    }
    
    return jobContainer;
}

const addToDb = id => {
    let appliedJob = [...getJobData()];
    if (!appliedJob.includes(id)) {
        appliedJob.push(id)
    }
    localStorage.setItem('appliedJob', JSON.stringify(appliedJob));
}




export {addToDb, getJobData, getJobDataFrmLocal}