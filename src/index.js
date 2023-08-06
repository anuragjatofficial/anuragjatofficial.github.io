

var typed = new Typed(".typing", {
    strings: [' Backend Developer', ' Full-Stack developer', ' Java Backend developer', 'Programmer'],
    typeSpeed: 150,
    backspeed: 150,
    loop: true,
});

var typed = new Typed(".typing2", {
    strings: [' Backend Developer', ' Full-Stack developer', ' Java Backend developer', 'Programmer'],
    typeSpeed: 150,
    backspeed: 150,
    loop: true,
});

/*document.getElementById("downloadCV").addEventListener("click",()=>{
    window.open('https://drive.google.com/u/0/uc?id=1vZeu-xiBHf0hE66oxgVPPHuOovePhYfr&export=download');
});

document.getElementById("resume-button-1").addEventListener("click", () => {
    window.open('https://drive.google.com/u/0/uc?id=1vZeu-xiBHf0hE66oxgVPPHuOovePhYfr&export=download');
});*/

//---------------- for smooth scrolling ----------------//

// document.querySelectorAll('#nav-menu a[href^="#"]').forEach(anchor =>{
//     anchor.addEventListener('click',function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior : "smooth"
//         });
//         console.log("somooth");
//     });
// });
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// document.querySelector('#back-to-top>a[href^="#"]').addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth"
//     });
// });

// -------------logic for github calender-------------//

// GitHubCalendar(".react-activity-calendar", "your-username");
// GitHubCalendar(".react-activity-calendar", "anuragjatofficial", { responsive: true });

// ------------logic for navBar ---------------------//

document.querySelectorAll(".odd-nav").forEach(a => {
    a.addEventListener("click", (e) => {
        document.querySelector("header").style.backgroundColor = "var(--third-color)";
    })
});


// --------- for dynamically adding projects -------///

const projects = document.getElementById("project");

let projects_array = [
    {
        screenshots: ["./images/amazekart-1.png", "", "", "", ""],
        project_title: "Amazon clone",
        project_desc: "Amazon is the world's leading e-commerce platform for convenient and affordable shopping.",
        tech_stacks: "HTML | CSS | JavaScript",
        github_link: "https://github.com/anuragjatofficial/many-reaction-8361/",
        deployed_link: "https://anuragjatofficial.github.io/many-reaction-8361/",
    },
    {
        screenshots: ["./images/lensmart-1.png", "", "", "", ""],
        project_title: "Lenskart clone",
        project_desc: "Lenskart is the leading e-commerce portal for eyewear in India.",
        tech_stacks: "HTML | CSS | JavaScript | JSON-Server",
        github_link: "https://github.com/anuragjatofficial/lensmart",
        deployed_link: "https://anuragjatofficial.github.io/lensmart/",
    },
    {
        screenshots: ["./images/crime_mgmt-1.png", "", "", "", ""],
        project_title: "Suraksha Mitra - The Crime ManageMent System",
        project_desc: "The main objective of this system is to maintain and manage detailed information on the crime that happened in an area under a particular police station.",
        tech_stacks: "Core Java",
        github_link: "https://github.com/anuragjatofficial/encouraging-comparison-4433",
        deployed_link: "https://drive.google.com/file/d/1soD3yssxbYjdNQ60an8ctpvfo3qMdvWR/view?usp=sharing",
    },
    {
        screenshots: ["./images/excelerate1.png", "", "", "", ""],
        project_title: "eXcelerate: Accelerating Learning through Online Platforms",
        project_desc: "eXcelerate is a robust software solution that empowers remote education and training. This platform is specifically designed to equip educators with powerful tools for creating and delivering online courses",
        tech_stacks: "Java | JPA Hibernate | Mysql",
        github_link: "https://github.com/anuragjatofficial/major-flock-5344.git",
        deployed_link: "https://drive.google.com/file/d/10npOdmOa27-mL__n7wuaFJflw5aW3nGy/view?usp=sharing",
    },
    {
        screenshots: ["./images/covisafe.png", "", "", "", ""],
        project_title: "Covisafe+ : Your Trusted COVID Vaccine Companion",
        project_desc: "Covisafe+  offers real-time information, risk assessment, vaccination booking, and community support to combat the pandemic effectively.",
        tech_stacks: "Java | Spring Boot | Mysql | Sprnig Data JPA | Maven | HTML | CSS | JS",
        github_link: "https://github.com/anuragjatofficial/potent-voyage-8716",
        deployed_link: "https://drive.google.com/file/d/10npOdmOa27-mL__n7wuaFJflw5aW3nGy/view?usp=sharing",
    },
    {
        screenshots: ["./images/codepulse2.png", "", "", "", ""],
        project_title: "CodePulse : Amplifying Your Coding Potential ",
        project_desc: "An AI interview platform to practice with AI-driven simulations tailored to your skills and industry. Get instant feedback and performance insights to refine your approach.",
        tech_stacks: "Java | Spring Boot | Mysql | Sprnig Data JPA | Maven | React | TypeScript | CSS ",
        github_link: "https://github.com/anuragjatofficial/code-pulse.git",
        deployed_link: "https://codepulse.me/interview_Master",
    }
];

projects_array.forEach(e => {
    let t = createProjects(e);
    projects.append(t);
})

function createProjects(project) {
    let div = document.createElement("div");
    div.setAttribute("class", "project-card");
    div.innerHTML = `<div class="project-box">
                    <div class="imgDiv"><img src="${project.screenshots[0]}" alt=""></div>
                    <h2 class="project-title">${project.project_title}</h2>
                    <p class="project-description">${project.project_desc}</p>
                    <p class="project-tech-stack"><span>Tech-stack : </span>${project.tech_stacks}</p>
                    <div>
                        <a href="${project.github_link}" class="project-github-link" target="_blank"><img src="./images/github.svg" alt=""></a>
                        <a href="${project.deployed_link}" class="project-deployed-link" target="_blank"><img src="https://img.icons8.com/ios-glyphs/90/visible--v1.png" alt="visible--v1"/></a>
                    </div>
                </div>`;
    return div;
}

// ------------------------logic for window replace ---------- ///

function resume() {
    window.open("https://drive.google.com/file/d/1vZeu-xiBHf0hE66oxgVPPHuOovePhYfr/view?usp=sharing");
}


let originalOverflow = document.body.style.overflow;
const overlay = document.createElement("div");
document.querySelectorAll('.imgDiv').forEach((e,i)=>{
    
    e.addEventListener('click', (event) => {
        event.stopPropagation();
        e.style.position = "fixed";
        e.style.zIndex = "1";
        e.style.transform = "translate(-50%, -50%)";
        e.style.top = "50%";
        e.style.left = "50%";
        e.style.width = "80vw";
        e.style.border = "none";
        document.body.style.pointerEvents = "none";
        // e.style.width = "100vw";
        overlay.style.display = "flex";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        // overlay.style.zIndex = 1;
        document.querySelector('header').style.zIndex = 0;
        document.querySelectorAll(".imgDiv>img")[i].style.borderRadius = "0px";
        document.querySelector('#back-to-top').style.zIndex = 0;
        overlay.style.backgroundColor = "rgba(3, 3, 3, 0.7)"; // White color with 70% opacity
        overlay.style.backdropFilter = "blur(15px)"; // Apply blur to the entire overlay
        document.body.style.overflow = "hidden";
        document.body.append(overlay);
    
        // e.style.filter = "blur(0px)";
    })
})

document.addEventListener("click", function (event) {
    document.querySelectorAll('.imgDiv').forEach((e,i) => {
        e.style.position = ""; // Reset the position
        e.style.zIndex = ""; // Reset the z-index
        e.style.transform = ""; // Reset the transform
        e.style.top = ""; // Reset the top
        e.style.left = ""; // Reset the left
        e.style.width = ""; // Reset the width
        document.querySelector("body").style.filter = "";
        document.body.style.overflow = originalOverflow;
        overlay.style.display = "none";
        document.body.style.pointerEvents = "auto";
        document.querySelector('header').style.zIndex = 1;
        document.querySelectorAll(".imgDiv>img")[i].style.borderRadius = "";
        document.querySelector('#back-to-top').style.zIndex = 1;
    });
});



// align - items: center;
// justify - content: center;
// position: absolute;
// z - index: 1;
// left: 30 %;
// / transform: translate(-50%, -50%); /
// width: 90vw;