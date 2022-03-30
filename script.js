
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
const contactInfoScreen = document.getElementById('contactInfoScreen');
const portfolioPage = document.getElementById('portfolioPage');
const teaCozyImg = document.getElementById('teaCozyImg');
const xButton = document.getElementById('xButton');
const technologies = document.getElementById('technologies');




const removeAllAnimations = () => {

    setTimeout(() => {
        aboutMe.style.removeProperty('animation');
        contact.style.removeProperty('animation');
        portfolio.style.removeProperty('animation');
        headerBar.style.removeProperty('animation');
        footerIcons.style.removeProperty('animation');
        consoleText.style.removeProperty('animation');
        bryant.style.removeProperty('animation');
        portfolioPage.style.removeProperty('animation');
        contactInfoScreen.style.removeProperty('animation');
        aboutMeAfter.style.removeProperty('animation');
        technologies.style.removeProperty('animation');
        navBar.style.removeProperty('animation');
        

    }, 2000)

}


// Start of X button //
const reverseAnimations = () => {
    aboutMe.style.animation="aboutMeFade 2s 0s 1 reverse";
    contact.style.animation="aboutMeFade 2s 0s 1 reverse";
    portfolio.style.animation="aboutMeFade 2s 0s 1 reverse";
    technologies.style.animation="aboutMeFade 2s 0s 1 reverse";
    headerBar.style.animation="headerBarFade 2s 0s 1 reverse";
    // Down Animation //
    footerIcons.style.animation="downFadeIcons 2s 0s 1 reverse";
    consoleText.style.animation="downFade 2s 0s 1 reverse";
    //Left Animation //
   
    navBar.style.animation = "aboutMeClick 1.7s 0s 1 reverse";
    aboutMeAfter.style.animation = "aboutMeBox 1.7s 0s 1 reverse";
    portfolioPage.style.animation = "portfolio 2s 0s 1 reverse";
    contactInfoScreen.style.animation = "contactClick 1.7s 0s 1 reverse";

    setTimeout(() =>{
        bryant.style.maxHeight = "20%";
        bryant.style.maxWidth = "20%";
        bryant.style.left = "72%";
    
    }, 1700);
    setTimeout(() =>{
        technologies.style.right = "0%";
        aboutMe.style.right = "0%";
        aboutMeAfter.style.top = "120%";
        contact.style.right = "0%";
        portfolio.style.right = "0%";
        headerBar.style.left = "0%";
        footerIcons.style.bottom = "-60%";
        consoleText.style.bottom = "-0%";
        // bryant.style.left = "72%";  
        navBar.style.top = "25%";
        portfolioPage.style.top = "120%";
        contactInfoScreen.style.left = "120%";
        

        
    }, 1700);

}

//ENd of X button //



// Click on Bryant Code //


const fadeOnBryant = () => {
    aboutMe.style.animation="aboutMeFade 2s ease-in";
    contact.style.animation="aboutMeFade 2s linear";
    portfolio.style.animation="aboutMeFade 2s ease-out";
    headerBar.style.animation="headerBarFade 2s ease-out";
    // Down Animation //
    footerIcons.style.animation="downFade 2s ease-in";
    consoleText.style.animation="downFade 2s ease-out";
    setTimeout(() =>{

        aboutMe.style.right = "180%";
        contact.style.right = "180%";
        portfolio.style.right = "180%";
        headerBar.style.left = "0%";

        footerIcons.style.bottom = "-65%";
        consoleText.style.bottom = "-65%";
        bryant.style.maxHeight = "60%";
        bryant.style.maxWidth = "60%";
        bryant.style.left = "15%";
        
    }, 1700);
    removeAllAnimations();
      
}


// Click fade on bryant //


//Begin of Click fade on About Me //

const fadeOnAboutMe = () => {
  
    contact.style.animation="aboutMeFade 2s linear";
    portfolio.style.animation="aboutMeFade 2s ease-out";
    headerBar.style.animation="headerBarFade 2s ease-out";
    // Down Animation //
    footerIcons.style.animation="downFade 2s ease-in";
    consoleText.style.animation="downFade 2s ease-out";
    //Left Animation //
    bryant.style.animation = "leftFade 2s linear";
    navBar.style.animation = "aboutMeClickPage 1s linear";
    aboutMeAfter.style.animation = "aboutMeBox 1.7s ease-out";
    technologies.style.animation="aboutMeFade 2s linear";

    setTimeout(() =>{
        navBar.style.top = "10%";
    }, 1000)
    

    setTimeout(() =>{
        aboutMe.style.right = "0%";
        aboutMeAfter.style.top = "35%";
        contact.style.right = "180%";
        portfolio.style.right = "180%";
        headerBar.style.left = "0%";
        footerIcons.style.bottom = "-65%";
        consoleText.style.bottom = "-65%";
        bryant.style.left = "120%";  
        
        technologies.style.right = "180%";
        
    }, 1700);
    
}
// End of Click fade on About Me //

//Begin of Contact Fade Out //


const fadeOnContact = () => {
    technologies.style.animation="aboutMeFade 2s linear";
    aboutMe.style.animation="aboutMeFade 1.7s ease-in";
    portfolio.style.animation="aboutMeFade 2s ease-out";
    headerBar.style.animation="headerBarFade 2s ease-out";
    // Down Animation //
    footerIcons.style.animation="downFade 2s ease-in";
    consoleText.style.animation="downFade 2s ease-out";
    //Left Animation //
    bryant.style.animation = "leftFade 2s linear";
    navBar.style.animation = "aboutMeClick 1.7s ease-in";
    contactInfoScreen.style.animation = "contactClick 1.7s ease-in";
    
    

    setTimeout(() =>{
        technologies.style.right = "180%"
        contactInfoScreen.style.left = "0%";
        aboutMe.style.right = "180%";
        portfolio.style.right = "180%";
        headerBar.style.left = "0%";
        footerIcons.style.bottom = "-65%";
        consoleText.style.bottom = "-65%";
        bryant.style.left = "120%";  
        navBar.style.top = "0%";
        
    }, 1700);
}



// End of Fade Out //



//Start of Portfolio Page//
// Portfolio was changed to Projects for better naming //

const fadeOnPortfolio = () => {
    technologies.style.animation="aboutMeFade 1.7s linear";
    portfolioPage.style.animation="portfolio 1.7s ease-in";
    contact.style.animation="aboutMeFade 2s linear";
    aboutMe.style.animation="aboutMeFade 1.7s ease-in";
    portfolio.style.animation="aboutMeFade 2s ease-out";
    headerBar.style.animation="headerBarFade 2s ease-out";
    // Down Animation //
    
    consoleText.style.animation="downFade 2s ease-out";
    //Left Animation //
    bryant.style.animation = "leftFade 2s linear";
    navBar.style.animation = "aboutMeClick 1.7s ease-in";
    portfolio.style.animation="aboutMeFade 2s ease-out";
   
    
    setTimeout(() =>{
        contact.style.right = "180%";
        aboutMe.style.right = "180%";
        portfolio.style.right = "180%";
        headerBar.style.left = "-120%";
       
        consoleText.style.bottom = "-65%";
        bryant.style.left = "120%";  
        navBar.style.top = "120%";
        portfolioPage.style.top = "10%";
        

        
    }, 1700);

    
    
   
}

// Start of Technologies animations

const fadeOnTechnologies = () => {
    contact.style.animation="aboutMeFade 1.7s ease"
    aboutMe.style.animation="aboutMeFade 1.7s ease-in";
    portfolio.style.animation="aboutMeFade 2s ease-out";
    headerBar.style.animation="headerBarFade 2s ease-out";
    // Down Animation //
    footerIcons.style.animation="downFade 2s ease-in";
    consoleText.style.animation="downFade 2s ease-out";
    //Left Animation //
    bryant.style.animation = "leftFade 2s linear";
    navBar.style.animation = "aboutMeClickTech 1.7s ease-in";
    footerIcons.style.animation="downFadeIcons 2s ease-in";
  
    
    

    setTimeout(() =>{
        contact.style.right = "180%"
        aboutMe.style.right = "180%";
        portfolio.style.right = "180%";
        headerBar.style.left = "0%";
        footerIcons.style.bottom = "10%";
        consoleText.style.bottom = "-65%";
        bryant.style.left = "120%";  
        navBar.style.top = "-20%";
        
        
    }, 1700);

}

//End of Technologies animations

const backToHome = () =>{
    reverseAnimations();
}






aboutMe.addEventListener('click', () => {
   fadeOnAboutMe();
   removeAllAnimations();
})

bryant.addEventListener('click', () => {
    fadeOnBryant();
    removeAllAnimations();
})

contact.addEventListener('click', () => {
    fadeOnContact();
    removeAllAnimations();
})

portfolio.addEventListener('click', () => {
    fadeOnPortfolio();
    removeAllAnimations();
})

xButton.addEventListener('click', () => {
    backToHome();
    removeAllAnimations();
})

technologies.addEventListener('click', () => {
    fadeOnTechnologies();
    removeAllAnimations();

})
