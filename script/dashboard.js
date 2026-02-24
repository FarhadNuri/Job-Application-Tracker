function updateJobsCountInHeader() {
    const allTabBtn = document.querySelector('[data-tab="all"]');
    const interviewTabBtn = document.querySelector('[data-tab="interview"]');
    const rejectedTabBtn = document.querySelector('[data-tab="rejected"]');

    let count = 0;

    if (allTabBtn.classList.contains("active")) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].status === "all") {
                count = count + 1;
            }
        }
    } else if (interviewTabBtn.classList.contains("active")) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].status === "interview") {
                count = count + 1;
            }
        }
    } else if (rejectedTabBtn.classList.contains("active")) {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].status === "rejected") {
                count = count + 1;
            }
        }
    }
    const jobsCountElement = document.getElementById("jobsCount");
    jobsCountElement.innerText = count;
}

function updateDashboardCounts() {
    const totalCount = jobs.length;
    const totalElement = document.getElementById("totalCount");
    totalElement.innerText = totalCount;

    let interviewCount = 0;
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === "interview") {
            interviewCount = interviewCount + 1;
        }
    }
    const interviewElement = document.getElementById("interviewCount");
    interviewElement.innerText = interviewCount;

    let rejectedCount = 0;
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === "rejected") {
            rejectedCount = rejectedCount + 1;
        }
    }
    const rejectedElement = document.getElementById("rejectedCount");
    rejectedElement.innerText = rejectedCount;
}