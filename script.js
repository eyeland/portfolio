
const aboutMe = document.getElementById('aboutMe');
const contact = document.getElementById('contact');
const portfolio = document.getElementById('portfolio');
const bryant = document.getElementById('bryant');
const body = document.body;
const aboutMeSelector = document.querySelector('#aboutMe');
const headerBar = document.getElementById('headerBar');
const footerIcons = document.getElementById('footerIcons');
const consoleText = document.getElementById('consoleText');
const navBar = document.getElementById('navBar');
const aboutMeAfter = document.getElementById('aboutMeAfter');
const contactInfoScreen = document.getElementById('contactInfoScreen')




// Click on Bryant Code //


const fadeOnBryant = () => {
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
        bryant.style.maxHeight = "60%";
        bryant.style.maxWidth = "60%";
        bryant.style.left = "15%";
        
    }, 1700);
}


// Click fade on bryant //


//Begin of Click fade on About Me //

const fadeOnAboutMe = () => {
  
    contact.style.animation="aboutMeFade 2s linear";
    portfolio.style.animation="aboutMeFade 2s ease-out";
    headerBar.style.animation="aboutMeFade 2s ease-out";
    // Down Animation //
    footerIcons.style.animation="downFade 2s ease-in";
    consoleText.style.animation="downFade 2s ease-out";
    //Left Animation //
    bryant.style.animation = "leftFade 2s linear";
    navBar.style.animation = "aboutMeClick 1.7s ease-in";
    aboutMeAfter.style.animation = "aboutMeBox 1.7s ease-in";

    setTimeout(() =>{
        // aboutMe.style.right = "180%";
        aboutMeAfter.style.top = "25%";
        contact.style.right = "180%";
        portfolio.style.right = "180%";
        headerBar.style.right = "180%";
        footerIcons.style.bottom = "-65%";
        consoleText.style.bottom = "-65%";
        bryant.style.left = "120%";  
        navBar.style.top = "0%";
        
    }, 1700);
}
// End of Click fade on About Me //

//Begin of Contact Fade Out //


const fadeOnContact = () => {
  
    aboutMe.style.animation="aboutMeFade 1.7s ease-in";
    portfolio.style.animation="aboutMeFade 2s ease-out";
    headerBar.style.animation="aboutMeFade 2s ease-out";
    // Down Animation //
    footerIcons.style.animation="downFade 2s ease-in";
    consoleText.style.animation="downFade 2s ease-out";
    //Left Animation //
    bryant.style.animation = "leftFade 2s linear";
    navBar.style.animation = "aboutMeClick 1.7s ease-in";
    contactInfoScreen.style.animation = "contactClick 1.7s ease-in";
    
    

    setTimeout(() =>{
        contactInfoScreen.style.left = "0%";
        aboutMe.style.right = "180%";
        portfolio.style.right = "180%";
        headerBar.style.right = "180%";
        footerIcons.style.bottom = "-65%";
        consoleText.style.bottom = "-65%";
        bryant.style.left = "120%";  
        navBar.style.top = "0%";
        
    }, 1700);
}



aboutMe.addEventListener('click', () => {
   fadeOnAboutMe();
})



bryant.addEventListener('click', () => {
    fadeOnBryant();
})

contact.addEventListener('click', () => {
    fadeOnContact();
})



