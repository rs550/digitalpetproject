const myPet = new Pet("Bluberry");          //Only one pet made 
document.getElementById("petName").querySelector("h1").textContent = myPet.name;       //Sets title to pet name               //Only pet created

//When called updates visuals on the UI
function updateUI() {
    const petImg = document.getElementById("petView");  //in scope tag, 'petview' = element responsible for which pet image is displayed

    let curStatus = myPet.statusCheck();    //checks current pet status

    //based on pet status, sets petView image
        // 0 = no negative status effects
    if(curStatus == 0) {
        petImg.src = 'idle.gif';
    }
        // 1 = pet dead, game resets score and changes pet title
    else if (curStatus == 1) {
        petImg.src = 'deadd.gif';
        document.getElementById("petName").querySelector("h1").textContent = myPet.name + ' Died';
        myPet.resetPet();
        
    }
        // 2 = pet sleeping, changes image
    else if (curStatus == 2) {petImg.src = 'sleepingZZ.gif';}
        // 3 = pet sad, changes image
    else if (curStatus == 3) {petImg.src = 'sadWBlur.gif';}

    //Update status bars based on current stat values
    document.getElementById("hpBar").style.width = myPet.getHP() + "%";
    document.getElementById("xpBar").style.width = myPet.getXP() + "%";
    document.getElementById("apBar").style.width = myPet.getAP() + "%";

    //Updates posted score    
    document.getElementById("scoreVal").textContent = myPet.getScore();
}


//Button Linked Actions
    //Feed Button Response
function feedPet(){
    myPet.addHP();
    myPet.increaseScore();  //Add points to myPet.HP and myPet.Score
    updateUI();             //Call updateUI to show changes
}
    //Sleep Button Response
function sleepPet(){
    myPet.addXP();
    myPet.increaseScore();  //Add points to myPet.XP and myPet.Score
    updateUI();             //Call updateUI to show changes
}
    //Pet Button Response
function petPet(){
    myPet.addAP();
    myPet.increaseScore();  //Add points to myPet.AP and myPet.Score
    updateUI();             //Call updateUI to show changes
}

//After first button pressed score automatically increases over 0
    //starts status decay, setInterval() calls a function at the specified interval
function startDecay(){
    setInterval(function() {
        if(myPet.getScore() > 0){
            myPet.decay();
            updateUI();
        }
    }, 7000);    //Interval number represents milliseconds
}

//Event Listener for document object
document.addEventListener("DOMContentLoaded", function() {
        // updates UI to match current pet status
    updateUI();
        //when HTML buttons are pressed, the associated function is called
    document.getElementById("feedB").addEventListener("click", feedPet);
    document.getElementById("sleepB").addEventListener("click", sleepPet);
    document.getElementById("petB").addEventListener("click", petPet);
        //calls startDecay to set decrementing interval 
    startDecay();
});