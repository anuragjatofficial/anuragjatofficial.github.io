

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

document.getElementById("downloadCV").addEventListener("click",()=>{
    window.open('https://drive.google.com/u/0/uc?id=1vZeu-xiBHf0hE66oxgVPPHuOovePhYfr&export=download');
});

// document.getElementById("resume-button-1").addEventListener("click", () => {
//     window.open('https://drive.google.com/u/0/uc?id=1vZeu-xiBHf0hE66oxgVPPHuOovePhYfr&export=download');
// });

//for smooth scrolling
document.querySelectorAll('#nav-menu>ul>li>a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});