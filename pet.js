class Pet {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.xp = 100;
        this.ap = 50;
        this.score = 0;
    }
 
    increaseScore() { this.score += 10; }

    decreaseScore(){ 
        if(this.isSleepy() || this.isSad()){
            this.score -= 20;
        }else if(this.isDead()){this.score == 0;}
    }
 
    addHP() { this.hp = Math.min(100, this.hp + 10); }
    addXP() { this.xp = Math.min(100, this.xp + 10); }
    addAP() { this.ap = Math.min(100, this.ap + 10); }
 
    subHP() { this.hp = Math.max(0, this.hp - 10); }
    subXP() { this.xp = Math.max(0, this.xp - 10); }
    subAP() { this.ap = Math.max(0, this.ap - 10); }
 
    getScore() { return this.score; }
    getHP()    { return this.hp; }
    getXP()    { return this.xp; }
    getAP()    { return this.ap; }

    decay(){
        let selection = Math.floor(Math.random() * 4);
        if(selection >= 3){this.subHP();}
        else if(selection == 2){this.subXP();}
        else {this.subAP();}
    }

    isDead(){ return this.hp<= 0; }

    isSleepy(){ return this.xp <= 0; }

    isSad(){ return this.ap <= 0; }

    isGood(){ return this.hp > 0 && this.xp > 0 && this.ap > 0; }

}

