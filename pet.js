export default class Pet{
    constructor(name){
        this.name=name;
        this.hp=100;
        this.xp=100;
        this.ap=50;
        this.score=0;
    }
}

function increaseScore(){sore+=10;}

function addHP(){hp+=10;}

function addXP(){xp+=10;}

function addAP(){ap+=10;}

function subHP(){hp-=10;}

function subXP(){xp-=10;}

function subAP(){ap-=10;}


function getScore(){return this.score;}

function getHP(){return this.hp;}

function getXP(){return this.xp;}

function getAP(){return this.ap;}