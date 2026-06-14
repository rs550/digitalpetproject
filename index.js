const myPet = new Pet("Bluberry");

function updateUI() {
    const petImg = document.getElementById("petView");
    const petName = document.getElementById('petName');

    if(!myPet.isGood()){
        if(myPet.isSad()){
            petImg.src = 'sadWBlur.gif';
        }
        else if (myPet.isSleepy()){
            petImg.src = 'sleeping.gif';
        }
        else if(myPet.isDead()){
            petImg.src = 'deadd.gif';
            document.getElementById("petName").textContent = "You Died";
        }
    }
    else{
        petImg.src = 'idle.gif';
    }

    document.getElementById("petName").querySelector("h1").textContent = myPet.name;
    
    document.getElementById("hpBar").style.width = myPet.getHP() + "%";
    document.getElementById("xpBar").style.width = myPet.getXP() + "%";
    document.getElementById("apBar").style.width = myPet.getAP() + "%";

  
    
    document.getElementById("scoreVal").textContent = myPet.getScore();
}

function feedPet(){
    myPet.addHP();
    myPet.increaseScore();
    updateUI();
}

function sleepPet(){
    myPet.addXP();
    myPet.increaseScore();
    updateUI();
}

function petPet(){
    myPet.addAP();
    myPet.increaseScore();
    updateUI();
}

function petStats(){
    if(!myPet.isGood){
        myPet.decreaseScore();
    }
}

function startDecay(){
    setInterval(function() {
        if(myPet.getScore() > 0){
            petStats();
            myPet.decay();
            updateUI();
        }
    }, 700);
}


document.addEventListener("DOMContentLoaded", function() {
    updateUI();
    document.getElementById("feedB").addEventListener("click", feedPet);
    document.getElementById("sleepB").addEventListener("click", sleepPet);
    document.getElementById("petB").addEventListener("click", petPet);
    startDecay();
});