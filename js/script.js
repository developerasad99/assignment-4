let jobs = [
  {
    id: "1",
    company: "Mobile First Corp",
    title: "React Native Developer",
    locationType: "Remote",
    employmentType: "Full-time",
    salaryMin: 130000,
    salaryMax: 175000,
    status: "Not Applied",
    description:
      "Build cross-platform mobile applications using React Native for global users.",
  },
  {
    id: "2",
    company: "CloudSync Labs",
    title: "Frontend Engineer",
    locationType: "Hybrid",
    employmentType: "Full-time",
    salaryMin: 110000,
    salaryMax: 145000,
    status: "Not Applied",
    description:
      "Develop modern web interfaces using React and TypeScript.",
  },
  {
    id: "3",
    company: "FinEdge Systems",
    title: "Backend Developer",
    locationType: "Remote",
    employmentType: "Contract",
    salaryMin: 90000,
    salaryMax: 120000,
    status: "Not Applied",
    description:
      "Design and maintain scalable APIs and microservices.",
  },
  {
    id: "4",
    company: "NextWave Tech",
    title: "Full Stack Developer",
    locationType: "On-site",
    employmentType: "Full-time",
    salaryMin: 100000,
    salaryMax: 140000,
    status: "Not Applied",
    description:
      "Work across frontend and backend to deliver high-quality SaaS products.",
  },
  {
    id: "5",
    company: "BrightCore Solutions",
    title: "UI/UX Designer",
    locationType: "Hybrid",
    employmentType: "Full-time",
    salaryMin: 85000,
    salaryMax: 115000,
    status: "Not Applied",
    description:
      "Create user-centered designs and interactive prototypes for web and mobile apps.",
  },
  {
    id: "6",
    company: "DataNova Analytics",
    title: "Data Engineer",
    locationType: "Remote",
    employmentType: "Full-time",
    salaryMin: 120000,
    salaryMax: 155000,
    status: "Not Applied",
    description:
      "Build and optimize data pipelines for large-scale analytics systems.",
  },
  {
    id: "7",
    company: "CyberStack Security",
    title: "DevOps Engineer",
    locationType: "On-site",
    employmentType: "Full-time",
    salaryMin: 115000,
    salaryMax: 150000,
    status: "Not Applied",
    description:
      "Implement CI/CD pipelines and manage cloud infrastructure.",
  },
  {
    id: "8",
    company: "InnovaSoft Labs",
    title: "Mobile App Developer",
    locationType: "Remote",
    employmentType: "Contract",
    salaryMin: 95000,
    salaryMax: 125000,
    status: "Not Applied",
    description:
      "Develop and maintain high-performance mobile applications.",
  }
];
let interviewJobs = [];
let rejectedJobs = [];

const cardContainer = document.getElementById('cardContainer');
const AvailableJob = document.getElementById('AvailableJob');
const TotalJob = document.getElementById('TotalJob');
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const allbtn = document.getElementById('allBtn')
const interviewbtn = document.getElementById('interviewBtn')
const rejectbtn = document.getElementById('rejectBtn')





function loadAllData(){
    cardContainer.innerHTML = "";
    allbtn.classList.add("btn-success");
     interviewbtn.classList.remove("btn-success")
     rejectbtn.classList.remove("btn-success");
    if(jobs.length == 0){
      cardContainer.innerHTML = "no data Found";
      TotalJob.innerText = jobs.length;
      return;
    }
    for(jobchild of jobs){
     
        let createElement = document.createElement('div')
        createElement.innerHTML = `
         <div class="cardChild p-4 bg-white mb-5">
                    <div class="flex justify-between items-center ">
                        <div><h1 class="text-lg font-bold">${jobchild.company}</h1>
                         <p class="text-gray-500 mb-4">${jobchild.title}</p>
                        </div>
                        <div onclick="removeData('${jobchild.id}')" class="border border-[#ddd] p-2 flex justify-center items-center rounded-full cursor-pointer">
                            <i class="fa-regular fa-trash-can text-[#797777]"></i>
                        </div>
                    </div>
                    <p class="text-gray-500"><span>${jobchild.locationType}</span> • <span>${jobchild.employmentType}</span> • <span>${jobchild.salaryMin}</span> - <span>${jobchild.salaryMax}</span></p>
                    <button id="stutus" class="stutus btn btn-active  p-2 rounded mt-6 mb-4">${jobchild.status}</button>
                    <p>${jobchild.description}</p>
                    <div class="mt-3">
                        <button class="btn btn-outline btn-success" onclick="addInterview('${jobchild.id}')">interview</button>
                        <button class="btn btn-outline btn-secondary" onclick="rejectedJobsAdd('${jobchild.id}')">Rejected</button>


                    </div>
                </div>
        `
        cardContainer.appendChild(createElement)
      
    }

    
    interviewCount.innerText = interviewJobs.length;
    rejectedCount.innerText = rejectedJobs.length;
    TotalJob.innerText = jobs.length;
    AvailableJob.innerText = jobs.length;
    // countDashboard()
    
}

function addInterview(idx){
    
     const filtered = jobs.filter(job => job.id === idx);
     const filterReject = rejectedJobs.filter(job => job.id !== idx);
        
      const find = jobs.find(job => job.id === idx);
      if(find){
        find.status = "Interview";
        
        
      }
        
      if(filterReject){
       rejectedJobs = filterReject;
      }

       const stutusElement =  document.getElementById(idx)
      //  stutusElement.innerText ="Interview";
       


     
     let checkDublicate = interviewJobs.some(job => job.id === idx)
      if(checkDublicate === false){
        interviewJobs.push(...filtered);
      }
    
    interviewCount.innerText = interviewJobs.length;
    rejectedCount.innerText = rejectedJobs.length;
    loadAllData();
}
function rejectedJobsAdd(idx){
    
    
      const filtered = jobs.filter(job => job.id === idx);
      const find = jobs.find(job => job.id === idx);
      if(find){
        find.status = "Rejected";
        loadAllData();
        
      }
      const filterinterView = interviewJobs.filter(job => job.id !== idx);
  if(filterinterView){
       interviewJobs = filterinterView;   
     }
       
       const stutusElement =  document.getElementById(idx)

      
       let checkDublicate = rejectedJobs.some(job => job.id === idx)
       if(checkDublicate === false){
        rejectedJobs.push(...filtered);
      }
    
    rejectedCount.innerText = rejectedJobs.length;
     interviewCount.innerText = interviewJobs.length;
}
function removeData(idx){
  let updateData = jobs.filter(job => job.id !== idx);  
  let interviewJobsUpdate = interviewJobs.filter(job => job.id !== idx);  
  let rejectJobsUpdate = rejectedJobs.filter(job => job.id !== idx);  

  jobs = updateData;
  if(interviewJobsUpdate && rejectJobsUpdate){
    interviewJobs = interviewJobsUpdate;
    rejectedJobs = rejectJobsUpdate;

  }
  loadAllData()
  interviewCount.innerText = interviewJobs.length;
  rejectedCount.innerText = rejectedJobs.length;

}
function countDashboard(){
  TotalJob.innerText = jobs.length;
  interviewCount.innerText = interviewJobs.length;
  rejectedCount.innerText = interviewJobs.length;
}

function loadInterview(){
    cardContainer.innerHTML="";
    interviewbtn.classList.add("btn-success")
    allbtn.classList.remove("btn-success");
    rejectbtn.classList.remove("btn-success");
    if(interviewJobs.length == 0){
      cardContainer.innerHTML = "no data Found";
      interviewCount.innerText = interviewJobs.length;
      AvailableJob.innerText = interviewJobs.length;
      return;
    }
    AvailableJob.innerText = interviewJobs.length;
       for(jobchild of interviewJobs){
        let createElement = document.createElement('div')
        createElement.innerHTML = `
         <div class="cardChild p-4 bg-white mb-5">
                    <div class="flex justify-between items-center ">
                        <div><h1 class="text-lg font-bold">${jobchild.company}</h1>
                         <p class="text-gray-500 mb-4">${jobchild.title}</p>
                        </div>
                        <div onclick="removeData('${jobchild.id}')" class="border border-[#ddd] p-2 flex justify-center items-center rounded-full cursor-pointer">
                            <i class="fa-regular fa-trash-can text-[#797777]"></i>
                        </div>
                    </div>
                    <p class="text-gray-500"><span>${jobchild.locationType}</span> • <span>${jobchild.employmentType}</span> • <span>${jobchild.salaryMin}</span> - <span>${jobchild.salaryMax}</span></p>
                    <button id="${jobchild.id}" class="stutus btn btn-active  p-2 rounded mt-6 mb-4">${jobchild.status}</button>
                    <p>${jobchild.description}</p>
                    <div class="mt-3">
                        <button class="btn btn-outline btn-success" onclick="addInterview('${jobchild.id}')">interview</button>
                        <button class="btn btn-outline btn-secondary" onclick="rejectedJobsAdd('${jobchild.id}')">Rejected</button>


                    </div>
                </div>
        `
        cardContainer.appendChild(createElement)
    }

}
function loadRejectedJobs(){
    cardContainer.innerHTML="";
    allbtn.classList.remove("btn-success")
    // allbtn.classList.remove("btn-active")
    // interviewbtn.classList.remove("btn-active")
    interviewbtn.classList.remove("btn-success")
    // rejectbtn.classList.add("btn-active")
    rejectbtn.classList.add("btn-success")
    console.log(allbtn.classList);
    
    
    if(rejectedJobs.length == 0){
      cardContainer.innerHTML = "no data Found";
      rejectedCount.innerText = rejectedJobs.length;
      AvailableJob.innerText = rejectedJobs.length;
      return;
    }
    AvailableJob.innerText = rejectedJobs.length;
       for(jobchild of rejectedJobs){
        let createElement = document.createElement('div')
        createElement.innerHTML = `
         <div class="cardChild p-4 bg-white mb-5">
                    <div class="flex justify-between items-center ">
                        <div><h1 class="text-lg font-bold">${jobchild.company}</h1>
                         <p class="text-gray-500 mb-4">${jobchild.title}</p>
                        </div>
                        <div onclick="removeData('${jobchild.id}')" class="border border-[#ddd] p-2 flex justify-center items-center rounded-full cursor-pointer">
                            <i class="fa-regular fa-trash-can text-[#797777]"></i>
                        </div>
                    </div>
                    <p class="text-gray-500"><span>${jobchild.locationType}</span> • <span>${jobchild.employmentType}</span> • <span>${jobchild.salaryMin}</span> - <span>${jobchild.salaryMax}</span></p>
                    <button id="${jobchild.id}" class="stutus btn btn-active  p-2 rounded mt-6 mb-4">${jobchild.status}</button>
                    <p>${jobchild.description}</p>
                    <div class="mt-3">
                        <button class="btn btn-outline btn-success" onclick="addInterview('${jobchild.id}')">interview</button>
                        <button class="btn btn-outline btn-secondary" onclick="rejectedJobsAdd('${jobchild.id}')">Rejected</button>


                    </div>
                </div>
        `
        cardContainer.appendChild(createElement)
    }

}
loadAllData()