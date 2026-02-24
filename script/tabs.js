function setupTabButtons() {
  const allTabBtn = document.querySelector('[data-tab="all"]');
  const interviewTabBtn = document.querySelector('[data-tab="interview"]');
  const rejectedTabBtn = document.querySelector('[data-tab="rejected"]');

  allTabBtn.addEventListener("click", function () {
    switchToTab("all");
  });

  interviewTabBtn.addEventListener("click", function () {
    switchToTab("interview");
  });

  rejectedTabBtn.addEventListener("click", function () {
    switchToTab("rejected");
  });
}

function switchToTab(tabName) {
  const allTabBtn = document.querySelector('[data-tab="all"]');
  const interviewTabBtn = document.querySelector('[data-tab="interview"]');
  const rejectedTabBtn = document.querySelector('[data-tab="rejected"]');

  allTabBtn.classList.remove("active", "bg-blue-500", "text-white");
  interviewTabBtn.classList.remove("active", "bg-blue-500", "text-white");
  rejectedTabBtn.classList.remove("active", "bg-blue-500", "text-white");

  if (tabName === "all") {
    allTabBtn.classList.add("active", "bg-blue-500", "text-white");
  } else if (tabName === "interview") {
    interviewTabBtn.classList.add("active", "bg-blue-500", "text-white");
  } else if (tabName === "rejected") {
    rejectedTabBtn.classList.add("active", "bg-blue-500", "text-white");
  }

  const allTab = document.getElementById("allTab");
  const interviewTab = document.getElementById("interviewTab");
  const rejectedTab = document.getElementById("rejectedTab");

  allTab.classList.add("hidden");
  interviewTab.classList.add("hidden");
  rejectedTab.classList.add("hidden");

  if (tabName === "all") {
    allTab.classList.remove("hidden");
  } else if (tabName === "interview") {
    interviewTab.classList.remove("hidden");
  } else if (tabName === "rejected") {
    rejectedTab.classList.remove("hidden");
  }
  updateJobsCountInHeader();
}
