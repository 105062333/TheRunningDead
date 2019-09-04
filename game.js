var game = new Phaser.Game(1080, 760, Phaser.AUTO, 'phaser-example');

document.getElementsByTagName("div")[0].onmousedown= function(){
    var e= window.event;
    if (e.which === 3 || e.button === 2) alert("v1.113-558")
}

//-----
function OOCallback(obj,meth,arg){
	var _pt= this;
	_pt.obj = obj;
	_pt.meth = meth;
	_pt.arg = arg;
	this.fcn= function(a,b,c,d,e){ _pt.obj[_pt.meth](a,b,c,d,e); }
	this.fcna= function(b,c,d){ _pt.obj[_pt.meth](_pt.arg,b,c,d);}
}
function Cloner(o){
	this.copy = {};
	for (var m in o) this.copy[m]= o[m];
}
function Flagger(o, flagName){
	this.client = o;
	this.flagName = (flagName) ? flagName : "isRunning";
	this.set= function(){ this.client[this.flagName]= true }
	this.clear= function(){ this.client[this.flagName]= false }
}
function CanFlagger(o){
	this.constructor= Flagger;
	this.constructor(o, "canPlayAnimation");
}

var hi, enemyTest, enemyTest2P2, enemyTest2P1;
var paused;
var inter = 1, bloodToSpawn = 1;
var enemyTest2ArrayP1 = new Array();
var enemyTest2ArrayP2 = new Array();

var helper = {
    totalEnemySpawned: 0,
    splatArray: new Array(),
    bulletArrayP1: new Array(),
    bulletArrayP2: new Array(),
    
    bullets: null,
    bulletsP2: null,
    
    canP1Move: true,
    canP2Move: true,
    
    canP1Shoot: true,
    canP2Shoot: true,
    
    canP1SwitchWeapons: true,
    canP2SwitchWeapons: true,

    deleteMarkedElements : function( at, mark ){
        var arrayToAdd = new Array();
        for (var i = 0; i < at.length; i ++){
            if (!at[i][mark]){ 
                arrayToAdd.push(at[i]);
            } else {
                console.log("enemy removed");
            }
        }
        
        return arrayToAdd;
    }
    
   /*helper.splatArray = new Array();
   helper.bulletArrayP1 = new Array();
   helper.bulletArrayP2 = new Array();
   helper.bullets = null;
   helper.bulletsP2 = null; */
}

var selector = {
    nextUp: function(){
        if(this.curNum >= this.images.length){
            this.curNum = 0;
        }
        return this.images[this.curNum++];
    },
    images: ["bloodTest1", "bloodTest2", "bloodTest3"],
    curNum: 0,
}


function EnemyCollider(){
    this.check = function (enemyArrayPx, collideFun){
        enemyArrayPx.sort(this.compareX);
        for (var i = 1, j = 0; i < enemyArrayPx.length; i++){
            for(var k = j; k < i; k++){
                collideFun(enemyArrayPx[i], enemyArrayPx[k]);
            }
            if (enemyArrayPx[i].body.x - enemyArrayPx[j].body.x > 30){
                j++;
            }
            if (enemyArrayPx[i].body.x - enemyArrayPx[j].body.x > 30){
                j++;
            }
        }
    }
    this.compareX = function(objectA, objectB){
        return objectA.body.x - objectB.body.y;
    }
}

var enemyCollider1 = new EnemyCollider();

var gunP1Stuff = {
    //stupid members, some code knows these as xxP1 or xxP2.
    numOfGuns: 4,
    currentGun: 1,
    currentGunNum: 1,
    fireRate: null,
    explosionArray: new Array(),
    //normal members
    explosion: null,
    bulletsToSpawn: 1,
    images: ["pistolIMG", "shotgunIMG", "machineGunIMG", "rocketLauncherIMG"],  
    weaponInaccuracy: 100,      //higher = more inaccurate
    // pistolBullets: 25,
    shotgunBullets: 25,
    machineGunBullets: 100,
    rocketBullets: 10,
    bombBullets: 5,
    setIdiotMembers: function(suf){
  	for (var m in this) this[m+suf] = this[m];
    },
    
    switchGuns: function(){
        if (this.currentGunP1 > 16 ){
            this.currentGunP1 = 1;
            console.log("fds");
        } else if (this.currentGunP1 <= 0){
            this.currentGunP1 = 16;
            console.log("yuyju");
        }
        if(this.currentGunP1 >= 1 && this.currentGunP1 <= 4){
            this.bulletsToSpawn = 1;
            this.fireRateP1 = 300;
            this.currentGunNumP1 = 1;
            this.weaponInaccuracy = 100;
            console.log("current gun is Pistol");
            return this.images[0];
        } else if (this.currentGunP1 >= 5 && this.currentGunP1 <= 8){
            this.bulletsToSpawn = 5;
            this.fireRateP1 = 500;
            this.currentGunNumP1 = 2;
            this.weaponInaccuracy = 1000;
            console.log("current gun is shotgun");
            return this.images[1];
        } else if (this.currentGunP1 >= 9 && this.currentGunP1 <= 12){
            this.bulletsToSpawn = 1;
            this.fireRateP1 = 50;
            this.currentGunNumP1 = 3;
            this.weaponInaccuracy = 250;
            console.log("current gun is machine gune");
            return this.images[2];
        } else {
            console.log("current gun is rocket launcher");
            this.bulletsToSpawn = 1;
            this.fireRateP1 = 750;
            this.currentGunNumP1 = 4;
            this.weaponInaccuracy = 300;
            this.weaponInaccuracy = 400;
            return this.images[3];
        }
    }
}

var gunP2Stuff = new Cloner(gunP1Stuff).copy
gunP2Stuff.explosionArray = new Array();
gunP1Stuff.setIdiotMembers("P1");
gunP2Stuff.setIdiotMembers("P2");
gunP2Stuff.setIdiotMembers("P1");


var p1Stuff = {
  maxHealth: 100,
  healthBarRed: null,
  healthBarGreen: null,
  totalKilled: 0,
  totalDMGTaken: 0,
  setIdiotMembers: function(suf){
  	for (var m in this) this[m+suf] = this[m];
  }
}

var wallStuff = {
    wallArray: new Array(),
    coordsX: [150, 100, 100, 350, 500, 500, 600, 460],
    coordsY: [120, 425, 475, 250, 90, 90, 90, 450],
    scaleX: [0.03, 0.03, 0.2, 0.1, 0.03, 0.1, 0.03, 0.075],
    scaleY: [0.2, 0.06, 0.035, 0.1, 0.075, 0.035, 0.2, 0.075],
    
    set: function(numXY, numToSet){
        if (numXY == 1){
            return this.coordsX[numToSet];
        } else if (numXY == 2){
            return this.coordsY[numToSet];
        } else if (numXY == 3){
            return this.scaleX[numToSet];        
        } else if (numXY == 4){
            return this.scaleY[numToSet];
        }
    }
}

var p2Stuff = new Cloner(p1Stuff).copy;
    p1Stuff.setIdiotMembers("P1");
    p2Stuff.setIdiotMembers("P2");

var enemyCollisionGroup, bulletCollisionGroup;
var bulletTime = 0;
var hiFacingDirection = 0, p2FacingDirection = 0; //0 = up, 1 = down, 2 = right, 3 = left

var fireRate = 100;
var nextFire = 0, scoreP1 = 0, healthP1 = 100;
var scoreP2, healthP2 = 100;

var healthTXTP1, scoreTXTP1, healthTXTP2, scoreTXTP2;

var keyW, keyA, keyS, keyD, keyV, keyP, keyK, keyL, keyJ, keyQ, keyE, keyC, keyB, keyT;
//You need to go cold turkey and stop declaring ANY more global variables.

var nextfirep2=0, fireratep2=[500, 2000, 1000, 100, 750];
var nextfirep1=0;

var p1gunArray=[1, 0, 0, 0, 0];
var p2gunArray=[1, 0, 0, 0, 0];

var currentGun=1, currentGunp1=1;

var bulletSpawn=1, bulletSpawnp1=1;
var weaponAccuracy=100, weaponAccuracyp1=100;

var select;
var currentlevel;
var zombiedead = 0;

var boss_bulletArray = new Array();

var boss1, boss2;

var bossp1={
    hp: 15,
    time: 0,
    rate: 1500,
    direction: null,
    isDead: false,
    walking: false
}
var bossp2={
    hp: 15,
    time: 0,
    rate: 1500,
    direction: null,
    isDead: false,
    walking: false
}
var bossp3={
    hp: 15,
    time: 0,
    rate: 1500,
    direction: null,
    isDead: false,
    walking: false
}
var bossp4={
    hp: 15,
    time: 0,
    rate: 1500,
    direction: null,
    isDead: false,
    walking: false
}
var bossp5={
    hp: 15,
    time: 0,
    rate: 1500,
    direction: null,
    isDead: false,
    walking: false
}
var bossp6={
    hp: 15,
    time: 0,
    rate: 1500,
    direction: null,
    isDead: false,
    walking: false
}
var bossP1Array = new Array();
var bossP2Array = new Array();

//var enemyhp = 5;

var p1healthBarGreen;
var p1healthBarRed;
var p2healthBarGreen;
var p2healthBarRed;

var checkdoor = false;
var input;
var mapnow;

var ifnext=false;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('inst', instState);
game.state.add('level', levelState);
game.state.add('end', endState);
game.state.add('end2', end2State);
game.state.add('p1win', p1winState);
game.state.add('p2win', p2winState);
game.state.add('pass', passState);
game.state.add('rank', rankState);
game.state.add('single', singleState);
game.state.add('select', selectState);
game.state.add('game', gameVar);
game.state.add('game2', game2State);
game.state.add('game3', game3State);
game.state.add('game4', game4State);
game.state.add('game5', game5State);
game.state.add('game6', game6State);
game.state.add('game7', game7State);
game.state.add('game8', game8State);
game.state.add('game9', game9State);
game.state.add('game10', game10State);
game.state.add('game11', game11State);
game.state.add('game12', game12State);
game.state.add('game13', game13State);
game.state.add('game14', game14State);
game.state.add('game15', game15State);
game.state.add('game16', game16State);
game.state.add('game17', game17State);
game.state.add('death', deathState);

game.state.start('boot');