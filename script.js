
const aboutMe = document.getElementById('aboutMe');
const contact = document.getElementById('contact');
const portfolio = document.getElementById('portfolio');
const bryant = document.getElementById('bryant');
const body = document.body;
const aboutMeSelector = document.querySelector('#aboutMe');
const headerBar = document.getElementById('headerBar');
const footerIcons = document.getElementById('footerIcons');
const consoleText = document.getElementById('consoleText');


const fadeScreenOut = () => {
    aboutMe.style.animation="aboutMeFade 2s ease-in";
    contact.style.animation="aboutMeFade 2s linear";
    portfolio.style.animation="aboutMeFade 2s ease-out";
    headerBar.style.animation="aboutMeFade 2s ease-out";
    // Down Animation //
    footerIcons.style.animation="downFade 2s ease-in";
    consoleText.style.animation="downFade 2s ease-out";
    setTimeout(() =>{
        aboutMe.style.right = "180%";
        contact.style.right = "180%";
        portfolio.style.right = "180%";
        headerBar.style.right = "180%";

        footerIcons.style.bottom = "-65%";
        consoleText.style.bottom = "-65%";
        
    }, 1700)


}






aboutMe.addEventListener('click', () => {
   
})



bryant.addEventListener('click', () => {
    fadeScreenOut();
})




