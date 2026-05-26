class Pet {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.xp = 100;
        this.ap = 50;
        this.score = 0;
    }
 
    increaseScore() { this.score += 10; }
 
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
}

