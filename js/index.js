

// all dom references

const job_container = document.querySelector('.jobs');
const clear_btn = document.querySelector('.clear_btn');
const filterbar = document.querySelector('.filterbar');

const data = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
      },
      {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      },
      {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"]
      },
      {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
      },
      {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
      },
      {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
      },
      {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
      },
      {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      }
];
  
    const modified = data.map((job)=>{
        return {
            name:job.company,
            tags:[job.role,job.level,...job.languages,...job.tools],
            logo:job.logo,
            timestamp:job.postedAt,
            contract:job.contract,
            location:job.location,
            role:job.role,
            is_new:job.new,
            is_features:job.featured,
            position:job.position,
        }
    })

    console.log(modified);

    

   

    const job = (is_new,logo,name,role,position,contract,location,tags,timestamp,feeatured)=>{
        return `<div class="job ${is_new && "new_job"}">
        <div class="job-container">
          <div class="job-meta">
            
              <img src="${logo}" alt="company-logo">
              <div class="job-info">
                <div class="job-info-top">
                  <span class="company-name">${name}</span>
                  ${is_new ?`<div class="job-stats"><span class="chip new">New</span> ${feeatured?`<span class="chip featured-chip">Featured</span>`:''}</div>`:`<div></div>`}
                </div>

                <h3 class="job-role">${position}</h3>
                <div class="job-meta-info">
                  <span>${timestamp}</span> <span>${contract}.</span> <span>${location}</span>
                </div>
                <hr/>
              </div>
            
          </div>
          <div class="job-tags">
              ${
                  tags.map((tag)=>{
                        return `<div class="job-tag">
                        <span>${tag}</span>
                        </div>`
                  })
              }
             
          </div>

        </div>
      </div>`
    }

   
        modified.forEach((item)=>{
            let job_element = job(item.is_new,item.logo,item.name,item.role,item.position,item.contract,item.location,item.tags,item.timestamp,item.is_features);
            job_container.innerHTML+=job_element;
        })



        // handle filter add

const job_tabs = document.querySelectorAll('.job-tag');

Array.from(job_tabs).forEach((tab)=>{
    tab.addEventListener('click',(e)=>{
        const filter = e.target.children[0].textContent;
        addFilter(filter);
    });
})
    


let filters = [];

function addFilter(filter){
    const index = filters.indexOf(filter);
    if(index === -1){
        if(filters.length<4){
            filters.push(filter);
            document.querySelector('.filters').innerHTML+=`<div class="filter">
            <span>${filters[filters.length-1]}</span>
            <button class="filter-delete">
              <img src="./images/icon-remove.svg" alt="">
            </button>
          </div>`;

          applyFilters(filter);
          if(!checkFilterActive()){
            applyFilterDeleteEvent();
            filterbar.classList.add('filterbar_active');
            filterbar.classList.remove('fillbar_cleared');
          }
        }
        else{
            alert('You can only add 4 filters');
        }
      
    }
    
    
}

//filterbar_active

// clear filters

clear_btn.addEventListener('click',()=>{
    
    filterbar.classList.add('fillbar_cleared');
    filters = [];
    document.querySelector('.filters').innerHTML = '';
    filterbar.classList.remove('filterbar_active');

    Array.from(document.querySelectorAll('.job')).forEach((job)=>{
        job.classList.remove('filtered');
    })
})

// while adding filter check is filterbar already active or not

const checkFilterActive = ()=>{
    const is_filter_bar_active = filterbar.classList.contains('filterbar_active');
   
}


// rerender jobs



const applyFilters = (filter)=>{
    console.log(filter);
    const jobs = document.querySelectorAll('.job');
        Array.from(jobs).forEach((job)=>{
            const tags = job.querySelectorAll('.job-tag');
            const job_tags = Array.from(tags).map((tag)=>{
                return tag.children[0].textContent;
            });
            const is_filtered = job_tags.includes(filter);
            if(is_filtered){
                job.classList.remove('filtered');
            }
            else{
                job.classList.add('filtered');
            }
    })
}







//handle filter delete



const applyFilterDeleteEvent =()=>{
    const filter_delete_btns = document.querySelectorAll('.filter-delete');

Array.from(filter_delete_btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target.parentElement);
        const filter = e.target.parentElement.children[0];
       
        e.target.parentElement.remove();
        
        const index = filters.indexOf(filter.textContent);
        filters.splice(index,1);
       
        if(filters.length>1){
            applyFilters(filters[filters.length-1]);
        }
        
        else{
            filterbar.classList.remove('filterbar_active');
            Array.from(document.querySelectorAll('.job')).forEach((job)=>{
                job.classList.remove('filtered');
            })
            
        }
    })
})
}