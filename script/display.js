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
  showHideEmptyMessages();
}

function showHideEmptyMessages() {
  const allContainer = document.getElementById("allJobsContainer");
  const allEmpty = document.getElementById("allEmpty");
  if (allContainer.children.length === 0) {
    allEmpty.classList.remove("hidden");
  } else {
    allEmpty.classList.add("hidden");
  }

  const interviewContainer = document.getElementById("interviewJobsContainer");
  const interviewEmpty = document.getElementById("interviewEmpty");
  if (interviewContainer.children.length === 0) {
    interviewEmpty.classList.remove("hidden");
  } else {
    interviewEmpty.classList.add("hidden");
  }

  const rejectedContainer = document.getElementById("rejectedJobsContainer");
  const rejectedEmpty = document.getElementById("rejectedEmpty");
  if (rejectedContainer.children.length === 0) {
    rejectedEmpty.classList.remove("hidden");
  } else {
    rejectedEmpty.classList.add("hidden");
  }
}
