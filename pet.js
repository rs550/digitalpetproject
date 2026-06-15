class Pet {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.xp = 75;
        this.ap = 50;
        this.score = 0;
    }

    increaseScore() { this.score += 10; }

    //check status decrease Score based on negative status effect
    decreaseScore(){ 
        
        let curStatus = statusCheck();  // Status Values 0 = good, 1 = dead, 2 = sleepy, 3 = sad

        if(curStatus >= 2){
            this.score -= 20;           // Decrease points only for sleepy and sad
        }else if(curStatus == 1){
            this.score == 0;            // Game over for dead
        }
    }

    //On 0 HP game resets 
    resetPet() {
        this.hp = 100;
        this.xp = 75;
        this.ap = 75;
        this.score = 0;
    }
 
    //increases specified stat
    addHP() { this.hp = Math.min(100, this.hp + 10);}
    addXP() { this.xp = Math.min(100, this.xp + 10);}
    addAP() { this.ap = Math.min(100, this.ap + 10);}
 
    //decreases specified stat
    subHP() { this.hp = Math.max(0, this.hp - 10);}
    subXP() { this.xp = Math.max(0, this.xp - 10);}
    subAP() { this.ap = Math.max(0, this.ap - 10);}
 
    getScore() { return this.score; }
    getHP()    { return this.hp; }
    getXP()    { return this.xp; }
    getAP()    { return this.ap; }

    //selects status to decrease
    decay(){
        let selection = Math.floor(Math.random() * 4);
        if(selection == 3){this.subHP();}
        else if(selection == 2){this.subXP();}
        else if(selection == 1){this.subAP();}
        else {
            this.subHP();
            this.subXP();
            this.subAP();
        }
    }

    //calls to determine if pet has current negative status effect or dead
    isDead(){ 
        if(this.hp <= 0){
            return true;
        }else {return false;} 
    }
    isSleepy(){
        if(this.xp <= 0){
            return true;
        }else {return false;} 
    }
    isSad(){
        if(this.ap <= 0){
            return true;
        }else {return false;} 
    }

    //Check current pet status, calls above to check for negative status effects
    statusCheck(){ 
        if(this.isDead()){return 1;}
        else if (this.isSleepy()){return 2;}
        else if (this.isSad()){return 3;}
        else {return 0};
 }

}

