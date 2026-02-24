function createJobCard(job) {
  const card = document.createElement("div");
  card.className =
    "bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition";
  card.id = "job-" + job.id;

  const companyDiv = document.createElement("div");
  companyDiv.className = "flex justify-between items-start mb-4";

  const infoDiv = document.createElement("div");

  const companyName = document.createElement("h4");
  companyName.className = "text-lg font-bold text-gray-900 mb-1";
  companyName.innerText = job.companyName;

  const position = document.createElement("p");
  position.className = "text-gray-500 font-medium";
  position.innerText = job.position;

  infoDiv.appendChild(companyName);
  infoDiv.appendChild(position);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn text-gray-400 hover:text-red-500";
  deleteBtn.innerHTML =
    '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>';
  deleteBtn.addEventListener("click", function () {
    deleteJob(job.id);
  });

  companyDiv.appendChild(infoDiv);
  companyDiv.appendChild(deleteBtn);

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "text-sm text-gray-600 mb-4";

  const details = document.createElement("p");
  details.className = "mb-1";
  details.innerText = job.location + " • " + job.type + " • " + job.salary;

  detailsDiv.appendChild(details);

  const statusDiv = document.createElement("div");
  if (job.status === "interview") {
    statusDiv.className =
      "bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded inline-block mb-4";
    statusDiv.innerText = "INTERVIEW";
  } else if (job.status === "rejected") {
    statusDiv.className =
      "bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded inline-block mb-4";
    statusDiv.innerText = "REJECTED";
  } else {
    statusDiv.className =
      "bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded inline-block mb-4";
    statusDiv.innerText = "NOT APPLIED";
  }

  const description = document.createElement("p");
  description.className = "text-gray-700 text-sm mb-6";
  description.innerText = job.description;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "flex gap-3";

  const interviewBtn = document.createElement("button");
  if (job.status === "interview") {
    interviewBtn.className =
      "border-2 border-teal-500 bg-teal-500 text-white px-2 py-1 rounded font-medium text-xs transition hover:bg-teal-600";
  } else {
    interviewBtn.className =
      "border-2 border-teal-500 text-teal-500 px-2 py-1 rounded font-medium text-xs transition hover:bg-teal-50";
  }
  interviewBtn.innerText = "INTERVIEW";
  interviewBtn.addEventListener("click", function () {
    changeJobStatus(job.id, "interview");
  });

  const rejectedBtn = document.createElement("button");
  if (job.status === "rejected") {
    rejectedBtn.className =
      "border-2 border-red-500 bg-red-500 text-white px-2 py-1 rounded font-medium text-xs transition hover:bg-red-600";
  } else {
    rejectedBtn.className =
      "border-2 border-red-500 text-red-500 px-2 py-1 rounded font-medium text-xs transition hover:bg-red-50";
  }
  rejectedBtn.innerText = "REJECTED";
  rejectedBtn.addEventListener("click", function () {
    changeJobStatus(job.id, "rejected");
  });

  buttonsDiv.appendChild(interviewBtn);
  buttonsDiv.appendChild(rejectedBtn);

  card.appendChild(companyDiv);
  card.appendChild(detailsDiv);
  card.appendChild(statusDiv);
  card.appendChild(description);
  card.appendChild(buttonsDiv);

  return card;
}
