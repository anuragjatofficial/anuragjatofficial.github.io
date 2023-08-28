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

window.addEventListener('load', (event) => {
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



// logic to blur the background & zoom project screenshots on click 

let originalOverflow = document.body.style.overflow;
const overlay = document.createElement("div");
document.querySelectorAll('.imgDiv').forEach((e, i) => {

    e.addEventListener('click', (event) => {
        console.log(e);
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
            .querySelectorAll('.imgDiv').forEach((e, i) => {
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



