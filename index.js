const myPet = new Pet("Bluberry");

function updateUI() {
    document.getElementById("petName").querySelector("h1").textContent = myPet.name;
    
    document.getElementById("hpBar").style.width = myPet.getHP() + "%";
    document.getElementById("xpBar").style.width = myPet.getXP() + "%";
    document.getElementById("apBar").style.width = myPet.getAP() + "%";

    document.getElementById("hpVal").textContent = myPet.getHP();
    document.getElementById("xpVal").textContent = myPet.getXP();
    document.getElementById("apVal").textContent = myPet.getAP();
    document.getElementById("scoreVal").textContent = myPet.getScore();
}


function feedPet(){
    myPet.addHP();
    myPet.increaseScore();
    updateUI();

    console.log("HP: ",myPet.getHP());
}

function sleepPet(){
    myPet.addXP();
    myPet.increaseScore();
    updateUI();
    
    console.log("XP: ",myPet.getXP());
}

function petPet(){
    myPet.addAP();
    myPet.increaseScore();
    updateUI();

    console.log("AP: ",myPet.getAP());
}

document.addEventListener("DOMContentLoaded", function() {
    updateUI();
    document.getElementById("feedB").addEventListener("click", feedPet);
    document.getElementById("sleepB").addEventListener("click", sleepPet);
    document.getElementById("petB").addEventListener("click", petPet);
});