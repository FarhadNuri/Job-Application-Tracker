// All jobs data
const jobsData = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "all",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "all",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Design and build scalable cloud infrastructure. Experience with AWS, Docker, and microservices architecture required.",
    status: "all",
  },
  {
    id: 5,
    companyName: "FinTech Innovations",
    position: "Frontend Engineer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    description:
      "Develop secure financial applications with modern JavaScript frameworks. Strong focus on performance and user experience.",
    status: "all",
  },
  {
    id: 6,
    companyName: "AI Research Labs",
    position: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160,000 - $220,000",
    description:
      "Build and deploy machine learning models at scale. Experience with Python, TensorFlow, and deep learning required.",
    status: "all",
  },
  {
    id: 7,
    companyName: "GameDev Studio",
    position: "Unity Developer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create immersive gaming experiences using Unity. Work on AAA titles with a talented team of developers and designers.",
    status: "all",
  },
  {
    id: 8,
    companyName: "CyberSec Pro",
    position: "Security Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$145,000 - $195,000",
    description:
      "Protect enterprise systems from cyber threats. Experience with penetration testing, security audits, and incident response.",
    status: "all",
  },
];

let jobs = [];
for (let i = 0; i < jobsData.length; i++) {
  jobs.push(jobsData[i]);
}
