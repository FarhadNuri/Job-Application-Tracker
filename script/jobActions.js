function changeJobStatus(jobId, newStatus) {
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === jobId) {
            if (jobs[i].status === newStatus) {
                jobs[i].status = "all";
            } else {
                jobs[i].status = newStatus;
            }
            break;
        }
    }
    showAllJobs();
    updateDashboardCounts();
}

function deleteJob(jobId) {
    const newJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id !== jobId) {
            newJobs.push(jobs[i]);
        }
    }
    jobs = newJobs;
    showAllJobs();
    updateDashboardCounts();
}
