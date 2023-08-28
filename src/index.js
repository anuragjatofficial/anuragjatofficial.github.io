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