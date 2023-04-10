const getJobDetails =async id => {
    const res = await fetch('/job_info.json');
    const data = await res.json();
    const jobFilterData = data.find(jd => jd.id == id);
    return jobFilterData;
}

export {getJobDetails}