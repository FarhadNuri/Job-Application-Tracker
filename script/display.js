function showAllJobs() {
  const allContainer = document.getElementById("allJobsContainer");
  const interviewContainer = document.getElementById("interviewJobsContainer");
  const rejectedContainer = document.getElementById("rejectedJobsContainer");

  allContainer.innerHTML = "";
  interviewContainer.innerHTML = "";
  rejectedContainer.innerHTML = "";

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    if (job.status === "all") {
      const jobCard = createJobCard(job);
      allContainer.appendChild(jobCard);
    } 
  }

}


