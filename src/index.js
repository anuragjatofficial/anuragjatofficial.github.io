document.getElementById("downloadCV").addEventListener("click",()=>{
    window.open('https://drive.google.com/u/0/uc?id=1vZeu-xiBHf0hE66oxgVPPHuOovePhYfr&export=download');
});

document.getElementById("resume-button-1").addEventListener("click", () => {
    window.open('https://drive.google.com/u/0/uc?id=1vZeu-xiBHf0hE66oxgVPPHuOovePhYfr&export=download');
});

//for smooth scrolling
document.querySelectorAll('#nav-menu>ul>li>a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});