
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
const techPage = document.getElementById('techPage');

// Start of X button //
const reverseAnimations = () => {

    setTimeout(() =>{
        // technologies.style.right = "0%";
        // aboutMe.style.right = "0%";
        // aboutMeAfter.style.top = "120%";
        // contact.style.right = "0%";
        // portfolio.style.right = "0%";
        // headerBar.style.left = "0%";
        // footerIcons.style.bottom = "-60%";
        // consoleText.style.bottom = "-0%";
        // navBar.style.top = "25%";
        // portfolioPage.style.top = "120%";
        // contactInfoScreen.style.left = "120%";
        // bryant.style.maxHeight = "20%";
        // bryant.style.maxWidth = "20%";
        // bryant.style.left = "72%";   
        // techPage.style.top = "120%";


        technologies.style.right = null;
        aboutMe.style.right = null;
        aboutMeAfter.style.top = null;
        contact.style.right = null;
        portfolio.style.right = null;
        headerBar.style.top = null;
        footerIcons.style.bottom = null;
        consoleText.style.bottom = null;
        navBar.style.top = null;
        portfolioPage.style.top = null;
        contactInfoScreen.style.left = null;
        bryant.style.maxHeight = null;
        bryant.style.maxWidth = null;
        bryant.style.left = null;
        techPage.style.top = null;
    }, 15);

}



//ENd of X button //

// Click on Bryant Code //
const fadeOnBryant = () => {
  
    setTimeout(() =>{

        aboutMe.style.right = "180%";
        contact.style.right = "120%";
        portfolio.style.right = "150%";
        technologies.style.right = "120%";
        headerBar.style.left = "0%";
        footerIcons.style.bottom = "-65%";
        consoleText.style.bottom = "-65%";
        bryant.style.maxHeight = "60%";
        bryant.style.maxWidth = "60%";
        bryant.style.left = "15%";
        
    }, 15);
  
}
// Click fade on bryant //


//Begin of Click fade on About Me //
const fadeOnAboutMe = () => {

        setTimeout(() =>{
            aboutMe.style.right = "130%";
            aboutMeAfter.style.top = "35%";
            contact.style.right = "160%";
            portfolio.style.right = "140%";
            headerBar.style.left = "0%";
            footerIcons.style.bottom = "-65%";
            consoleText.style.bottom = "-65%";
            bryant.style.left = "120%";  
            technologies.style.right = "180%";

        }, 15)
   
}
// End of Click fade on About Me //

//Begin of Contact Fade Out //
const fadeOnContact = () => {
    
    setTimeout(() =>{
        technologies.style.right = "180%"
        contactInfoScreen.style.left = "0%";
        aboutMe.style.right = "180%";
        portfolio.style.right = "120%";
        headerBar.style.left = "0%";
        footerIcons.style.bottom = "-65%";
        consoleText.style.bottom = "-65%";
        bryant.style.left = "120%";  
        contact.style.right = "120%"     
    }, 15);
}
// End of Fade Out //


//Start of Portfolio Page//
// Portfolio was changed to Projects for better naming //

const fadeOnPortfolio = () => {
    
    setTimeout(() =>{
        technologies.style.right = "180%"
        aboutMe.style.right = "180%";
        portfolio.style.right = "120%";
        headerBar.style.left = "0%";
        footerIcons.style.bottom = "-65%";
        consoleText.style.bottom = "-65%";
        bryant.style.left = "120%";  
        contact.style.right = "120%"  
        portfolioPage.style.top = "10%";
    }, 15);  
   
}

// Start of Technologies animations

const fadeOnTechnologies = () => {
 
    setTimeout(() =>{
        contact.style.right = "180%"
        aboutMe.style.right = "180%";
        portfolio.style.right = "180%";
        technologies.style.right = "120%";
        headerBar.style.left = "0%";
        footerIcons.style.bottom = "5%";
        consoleText.style.bottom = "-65%";
        bryant.style.left = "120%";   
        techPage.style.top = "22%";        
    }, 15);

}

//End of Technologies animations

const backToHome = () =>{
    reverseAnimations();
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

portfolio.addEventListener('click', () => {
    fadeOnPortfolio();
})

xButton.addEventListener('click', () => {
    backToHome();
})

technologies.addEventListener('click', () => {
    fadeOnTechnologies();
})

// Animate SlideShow ///

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  console.log(dots)
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

