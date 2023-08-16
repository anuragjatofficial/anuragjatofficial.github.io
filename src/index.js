/* *
 *  Author : Anurag Choudhary
 *  Github : @anuragjatofficial
 */

var typed = new Typed(".typing", {

    strings: [
        ' Backend Developer',
        ' Full-Stack developer', 
        ' Java Backend developer', 
        'Programmer'
    ],

    typeSpeed: 150,
    backspeed: 150,
    loop: true,
    
});

var typed = new Typed(".typing2", {

    strings: [
        ' Backend Developer',
        ' Full-Stack developer',
        ' Java Backend developer',
        'Programmer'
    ],  

    typeSpeed: 150,
    backspeed: 150,
    loop: true,

});

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

// if above code fails uncomment it 

// document.querySelector('#back-to-top>a[href^="#"]').addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth"
//     });
// });

// -------------logic for github calender-------------

// GitHubCalendar(".react-activity-calendar", "your-username");
// GitHubCalendar(".react-activity-calendar", "anuragjatofficial", { responsive: true });


document.querySelector(".react-activity-calendar").innerHTML = CreateGitHubCalendar();

function CreateGitHubCalendar(){

    return `
        <img 
        src="https://ssr-contributions-svg.vercel.app/_/anuragjatofficial?format=svg&weeks=50&theme=native&widget_size=medium" 
        style = "width: 100%" 
        alt="Github calender"
        />`;

}


// ------------logic for navBar ---------------------//

document
    .querySelectorAll(".odd-nav")
    .forEach(a => {

        a.addEventListener("click", (e) => {

            document
                .querySelector("header")
                .style
                .backgroundColor = "var(--third-color)";
                
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

window.addEventListener('load',(event)=>{
    event.preventDefault;
    projects_array.forEach(e => {
        let t = createProjects(e);
        projects
            .append(t);
    })
})

function createProjects(project) {
    let div = document.createElement("div");
    div.setAttribute("class", "project-card");
    div.innerHTML = 
                `<div class="project-box">
                    <div class="imgDiv">
                        <img src="${project.screenshots[0]}" alt="">
                    </div>
                    <h2 class="project-title">
                        ${project.project_title}
                    </h2>
                    <p class="project-description">
                        ${project.project_desc}
                    </p>
                    <p class="project-tech-stack">
                        <span>Tech-stack : </span>
                        ${project.tech_stacks}
                    </p>
                    <div>
                        <a href="${project.github_link}" class="project-github-link" target="_blank">
                            <img src="./images/github.svg" alt="">
                        </a>
                        <a href="${project.deployed_link}" class="project-deployed-link" target="_blank">
                            <img src="https://img.icons8.com/ios-glyphs/90/visible--v1.png" alt="visible--v1"/>
                        </a>
                    </div>
                </div>`;
    return div;
}


const skills = [
    {
        image : "./images/java.svg",
        alt : "JAVA",
        name : "Java"
    },
    {
        image: "./images/springBoot.svg",
        alt: "Spring Boot",
        name: "Spring Boot"
    },
    {
        image: "./images/Hibernate.svg",
        alt: "Hibernate",
        name: "Hibernate"
    },
    {
        image: "./images/resApi.svg",
        alt: "Rest APIs",
        name: "Rest APIs"
    },
    {
        image: "./images/Html.svg",
        alt: "HTML 5",
        name: "HTML 5"
    },
    {
        image: "./images/css.svg",
        alt: "CSS 3",
        name: "CSS 3"
    },
    {
        image: "./images/js.svg",
        alt: "JavaScript",
        name: "JavaScript"
    },
    {
        image: "./images/MySql.svg",
        alt: "MySQL",
        name: "MySQL"
    },
    {
        image: "./images/github.svg",
        alt: "GitHub",
        name: "GitHub"
    },
    {
        image: "https://img.icons8.com/glyph-neue/64/json.png",
        alt: "JSON",
        name: "JSON"
    },
    {
        image: "./images/git.svg",
        alt: "Git",
        name: "Git"
    },
    {
        image: "./images/postman.svg",
        alt: "Postman",
        name: "Postman"
    }
];

window.addEventListener('load',createSkills(skills));

function createSkills(skills){
    let skillsDiv = document.querySelector(".tech-skills");
    skillsDiv.innerHTML = skills.map(e=>`
                    <div class="skills-card">
                        <img class="skills-card-img" src="${e.image}" alt="${e.alt}">
                        <p class="skills-card-name">${e.name}</p>
                    </div>
    `).join("");
}



// ------------------------logic for window replace ---------- ///

function resume() {
    window.open("https://drive.google.com/file/d/1vZeu-xiBHf0hE66oxgVPPHuOovePhYfr/view?usp=sharing");
}

// logic to blur the background & zoom project screenshots on click 

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

        document
            .body
            .style
            .pointerEvents = "none";

        overlay
            .style
            .display = "flex";

        overlay
            .style
            .position = "fixed";
            
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";

        document
            .querySelector('header')
            .style
            .zIndex = 0;

        document
            .querySelectorAll(".imgDiv>img")[i]
            .style.borderRadius = "0px";

        document
            .querySelector('#back-to-top')
            .style
            .zIndex = 0;

        overlay
            .style
            .backgroundColor = "rgba(3, 3, 3, 0.7)"; // White color with 70% opacity

        overlay
            .style
            .backdropFilter = "blur(15px)"; // Apply blur to the entire overlay

        document
            .body
            .style
            .overflow = "hidden";

        document
            .body
            .append(overlay);
    })
})

document
    .addEventListener("click", function (event) {
        document
            .querySelectorAll('.imgDiv').forEach((e,i) => {
                e.style.position = ""; // Reset the position
                e.style.zIndex = ""; // Reset the z-index
                e.style.transform = ""; // Reset the transform
                e.style.top = ""; // Reset the top
                e.style.left = ""; // Reset the left
                e.style.width = ""; // Reset the width

                document
                    .querySelector("body")
                    .style
                    .filter = "";

                document
                    .body
                    .style
                    .overflow = originalOverflow;

                overlay
                    .style
                    .display = "none";

                document
                    .body
                    .style
                    .pointerEvents = "auto";

                document
                    .querySelector('header')
                    .style
                    .zIndex = 1;
                document
                    .querySelectorAll(".imgDiv>img")[i]
                    .style
                    .borderRadius = "";
                document
                    .querySelector('#back-to-top')
                    .style
                    .zIndex = 1;
            });
    });

window.addEventListener('load', displayForm());

function displayForm(){
  let contactDiv =   document.querySelector('.contactForm');
    contactDiv.innerHTML = `<form class="form_container" action="https://formspree.io/f/xgejazqb" method="POST" >
  <!--<div class="title_container">
    <p class="title">Login to your Account</p>
    <span class="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
  </div>-->
  <br>
  <div class="input_container">
    <label class="input_label" for="email_field">Name</label>
    <svg fill="#141b34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"  width="24" id="user" class="icon"><path stroke-linejoin="round" stroke-width="1.5" stroke-linecap="round" stroke="#141B34" d="M670.1 278.4c0 8.8-.6 17.6-1.7 26.3.5-3.5 1-7.1 1.4-10.6-2.4 17.4-7 34.3-13.7 50.5 1.3-3.2 2.7-6.4 4-9.6-6.7 15.8-15.3 30.6-25.8 44.2l6.3-8.1c-10.4 13.4-22.5 25.5-35.9 35.9l8.1-6.3c-13.6 10.4-28.4 19.1-44.2 25.8 3.2-1.3 6.4-2.7 9.6-4-16.2 6.7-33.1 11.3-50.5 13.7 3.5-.5 7.1-1 10.6-1.4-17.5 2.3-35.1 2.3-52.6 0 3.5.5 7.1 1 10.6 1.4-17.4-2.4-34.3-7-50.5-13.7 3.2 1.3 6.4 2.7 9.6 4-15.8-6.7-30.6-15.3-44.2-25.8l8.1 6.3c-13.4-10.4-25.5-22.5-35.9-35.9l6.3 8.1c-10.4-13.6-19.1-28.4-25.8-44.2 1.3 3.2 2.7 6.4 4 9.6-6.7-16.2-11.3-33.1-13.7-50.5.5 3.5 1 7.1 1.4 10.6-2.3-17.5-2.3-35.1 0-52.6-.5 3.5-1 7.1-1.4 10.6 2.4-17.4 7-34.3 13.7-50.5-1.3 3.2-2.7 6.4-4 9.6 6.7-15.8 15.3-30.6 25.8-44.2l-6.3 8.1c10.4-13.4 22.5-25.5 35.9-35.9l-8.1 6.3c13.6-10.4 28.4-19.1 44.2-25.8-3.2 1.3-6.4 2.7-9.6 4 16.2-6.7 33.1-11.3 50.5-13.7-3.5.5-7.1 1-10.6 1.4 17.5-2.3 35.1-2.3 52.6 0-3.5-.5-7.1-1-10.6-1.4 17.4 2.4 34.3 7 50.5 13.7-3.2-1.3-6.4-2.7-9.6-4 15.8 6.7 30.6 15.3 44.2 25.8l-8.1-6.3c13.4 10.4 25.5 22.5 35.9 35.9l-6.3-8.1c10.4 13.6 19.1 28.4 25.8 44.2-1.3-3.2-2.7-6.4-4-9.6 6.7 16.2 11.3 33.1 13.7 50.5-.5-3.5-1-7.1-1.4-10.6 1.1 8.7 1.6 17.5 1.7 26.3.1 20.9 18.3 41 40 40 21.6-1 40.1-17.6 40-40-.2-47.9-14.6-96.9-42.8-135.9-7.6-10.5-15.7-20.8-24.7-30.1-9.1-9.4-19.1-17.5-29.5-25.4-18.9-14.4-40-25-62.4-33.2-90.3-33.1-199.2-3.6-260.3 70.8-8.4 10.2-16.4 20.8-23.2 32.2-6.8 11.3-12.1 23.3-17 35.5-9.2 22.6-13.9 46.6-15.8 70.9-3.7 47.6 8.7 97.3 33.5 138.1 23.9 39.4 60 73.2 102.2 92.3 12.4 5.6 25.1 10.8 38.3 14.5 13.1 3.6 26.4 5.6 39.9 7.2 24.6 2.9 49.7.9 74-4 92.3-18.8 169.6-98.3 183.9-191.6 2.1-13.6 3.7-27.2 3.7-41 .1-20.9-18.5-41-40-40-21.6.7-39.8 17.3-39.8 39.7zm132.7 625.3H289.7c-22.7 0-45.4.2-68.1 0-2.5 0-5-.2-7.4-.5 3.5.5 7.1 1 10.6 1.4-4-.6-7.8-1.7-11.5-3.2 3.2 1.3 6.4 2.7 9.6 4-4-1.7-7.7-3.9-11.2-6.6l8.1 6.3c-3-2.5-5.8-5.2-8.2-8.2l6.3 8.1c-2.7-3.5-4.8-7.2-6.6-11.2 1.3 3.2 2.7 6.4 4 9.6-1.5-3.7-2.5-7.6-3.2-11.5.5 3.5 1 7.1 1.4 10.6-1.6-12.1-.5-24.9-.5-37.1v-42.8c0-10.7.6-21.3 2-31.9-.5 3.5-1 7.1-1.4 10.6 2.8-20.5 8.2-40.6 16.3-59.7-1.3 3.2-2.7 6.4-4 9.6 7.8-18.2 17.8-35.3 29.9-51l-6.3 8.1c12.1-15.5 26-29.5 41.6-41.6L283 673c15.7-12.1 32.8-22.1 51-29.9-3.2 1.3-6.4 2.7-9.6 4 19.1-8 39.1-13.5 59.7-16.3-3.5.5-7.1 1-10.6 1.4 14.8-1.9 29.5-2 44.4-2h183c16.5 0 32.9-.1 49.4 2-3.5-.5-7.1-1-10.6-1.4 20.5 2.8 40.6 8.2 59.7 16.3-3.2-1.3-6.4-2.7-9.6-4 18.2 7.8 35.3 17.8 51 29.9l-8.1-6.3c15.5 12.1 29.5 26 41.6 41.6l-6.3-8.1c12.1 15.7 22.1 32.8 29.9 51-1.3-3.2-2.7-6.4-4-9.6 8 19.1 13.5 39.1 16.3 59.7-.5-3.5-1-7.1-1.4-10.6 1.9 15.1 2 30.1 2 45.3v49.5c0 5.7.2 11.4-.5 17 .5-3.5 1-7.1 1.4-10.6-.6 4-1.7 7.8-3.2 11.5 1.3-3.2 2.7-6.4 4-9.6-1.7 4-3.9 7.7-6.6 11.2l6.3-8.1c-2.5 3-5.2 5.8-8.2 8.2l8.1-6.3c-3.5 2.7-7.2 4.8-11.2 6.6 3.2-1.3 6.4-2.7 9.6-4-3.7 1.5-7.6 2.5-11.5 3.2 3.5-.5 7.1-1 10.6-1.4-2.2.3-4.5.4-6.8.5-10.3.1-20.9 4.4-28.3 11.7-6.9 6.9-12.2 18.3-11.7 28.3 1 21.4 17.6 40.3 40 40 38.9-.6 73.1-26 84.5-63.3 4.5-14.8 3.5-30.7 3.5-45.9 0-34.8 1.1-69.3-4.9-103.8-8.8-50.5-34.2-98-69-135.3-34.8-37.3-81.6-64.7-131.1-76.9-28.4-7-57-8.1-86-8.1H422.4c-29.7 0-59.2 1.4-88.1 9.1-49.1 13-95.3 40.7-129.4 78.3-34.4 37.9-59.3 85.5-67.4 136.3-5.4 34.1-4.3 68.3-4.3 102.7 0 15.8-.9 32.3 4.8 47.4 7.4 19.4 19.2 34.7 36.5 46.2 13.5 8.9 30.6 13.2 46.6 13.4 7.8.1 15.6 0 23.4 0h558.4c20.9 0 41-18.4 40-40-1-21.8-17.6-40.1-40.1-40.1z"></path></svg>
    <input placeholder="John doe" title="Inpit title" name="input-name" type="text" class="input_field" id="email_field" required >
  </div>
  <div class="input_container">
    <label class="input_label" for="email_field">Email</label>
    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
      <path stroke-linejoin="round" stroke-width="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
    </svg>
    <input placeholder="name@mail.com" title="Inpit title" name="input-name" type="text" class="input_field" id="email_field" required >
  </div>
  <div class="input_container">
    <label class="input_label" for="email_field">Message</label>
    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
      <path stroke-linejoin="round" stroke-width="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
    </svg>
    
    <textarea placeholder="Your message" title="Inpit title" name="input-name" type="text" class="input_field" id="email_field" required ></textarea>
  </div>
  <!--<div class="input_container">
    <label class="input_label" for="email_field">Attachment</label>
  <div class="container"> 
        <div class="upper"> 
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
            <p>Browse File to upload!</p>
        </div> 
        <label for="file" class="bottomPart"> 
            <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg> 
            <p>Not selected file</p> 
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#000000" stroke-width="2"></path> <path d="M19.5 5H4.5" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#000000" stroke-width="2"></path> </g></svg>
        </label> 
        <input id="file" type="file"> 
        </div>-->
  </div>
  <button title="Sign In" type="submit" class="sign-in_btn">
    <span>Sign In</span>
  </button>`;
}


//-- code to redirect to github -- //



const URL = `https://github.com/anuragjatofficial`;

document
    .querySelectorAll(".redirect_to_github")
    .forEach(e=>{
        e.style.cursor = "pointer";
        e.addEventListener('click',()=>{
            window.open(URL,"_blank");
        })
    })


// -- code to disable right click , view source , inspect -- //

// document
//     .addEventListener("contextmenu", ( e => e.preventDefault())), 
//     document
//         .onkeydown = function (e) {
//             return 123 != event.keyCode && (
//                 (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))
//                 )
//         } 