let facts = {
    0 : "I like Pizza",
    1 : "I like Buffalo Wings",
    2 : "I like to Hike",
    3 : "League of Legends is my Favorite Game",
    4 : "I use MacOs and Windows Daily",
    

}

let ranNum = () => Math.round(Math.random()*4)
let counter = 0



let randomFacts = () => {
    
    document.getElementById("factsP").innerHTML = facts[counter];
    counter++;
    if(counter > 4){
        counter = 0;
    }
}
