
var bulletSpawnX, bulletSpawnY;
var bulletSpawnXp1, bulletSpawnYp1;

var currentRate, currentRatep1;

var p2gun;
//p1gun;

var treasure1, treasure2;
var once1=0, once2=0;

var singleState = {
    gameState: 1, //0 = start menu, 1 = in game, 3 = dead
    mainMenuScreem: null,
    deadScreen: null,
    startButton: null,
    retryButton: null,
    backGround: null,
    
    explosionSound: null,
    pistolSound: null,
    shotgunSound: null,
    walkingSound: null,
    zombieSoun: null,
    machineGunSound: null,
    rocketLaunchSound: null,
    dryFireGunSound: null,
    footStepsSound: null,
    
    weaponSwitchSoundP1: null,
    weaponSwitchSoundP2: null,
    
    zombieSounds: {
        zombieSoundP1Num1: null, 
        zombieSoundP1Num2: null, 
        zombieSoundP1Num3: null, 
        zombieSoundP2Num1: null, 
        zombieSoundP2Num2: null, 
        zombieSoundP2Num3: null
    },
    
    //p1GunStuffText: null,
    p2GunStuffText: null,
    enemySpawnLimit: 999999,
    i: 0,
    w: 0,
    layer: null,
    level: null,
    init: function(map, level){
        this.map = map;
        this.level = level;
    },
    
    preload: function () {
 
    },

    create: function() {
        this.gameState=1;
        healthP1=100;
        healthP2=100;
        select = 0;
        zombiedead = 0;
        checkdoor = false;
        //p1gunArray[2-1]=1;
        p2gunArray[2-1]=1;
        //currentlevel = 1;
//        game.physics.startSystem(Phaser.Physics.P2JS);
//        game.physics.p2.setImpactEvents(true);
//        game.physics.p2.restitution = 0.8;
        
//        button = game.add.button(game.world.centerX - 95, 400, 'p1Anim', null, this, 1, 0, 2, 3);

//        button.onInputOver.add(over, this);
//        button.onInputOut.add(out, this);
//        button.onInputUp.add(up, this);

if(mapnow == 2){
            //      ---------------------------------map2-------------------------------------
             this.map = game.add.tilemap('map2');
             this.map.addTilesetImage('123');
             this.map.addTilesetImage('lightSand');
     
             this.layer2 = this.map.createLayer('Layer2');
             this.layer2.resizeWorld();
             this.layer = this.map.createLayer('Layer1');
             this.layer.resizeWorld();
     
             //this.map.setCollision(1);
             //this.map.setCollision(1, true, 'Layer1');
             this.map.setCollision(2, true, 'Layer1');
             this.map.setCollision(3, true, 'Layer1');
             this.map.setCollision(5, true, 'Layer1');
             this.map.setCollision(6, true, 'Layer1');
             this.map.setCollision(7, true, 'Layer1');
             this.map.setCollision(8, true, 'Layer1');
             this.map.setCollision(9, true, 'Layer1');
             this.map.setCollision(10, true, 'Layer1');
             this.map.setCollision(11, true, 'Layer1');
             this.map.setCollision(12, true, 'Layer1');
             this.map.setCollision(13, true, 'Layer1');
             this.map.setCollision(14, true, 'Layer1');
             this.map.setCollision(15, true, 'Layer1');
             this.map.setCollision(16, true, 'Layer1');
             this.map.setCollision(17, true, 'Layer1');
             this.map.setCollision(18, true, 'Layer1');
             this.map.setCollision(19, true, 'Layer1');
             this.map.setCollision(20, true, 'Layer1');
             this.map.setCollision(21, true, 'Layer1');
             this.map.setCollision(22, true, 'Layer1');
             this.map.setCollision(23, true, 'Layer1');
             this.map.setCollision(24, true, 'Layer1');
             //this.map.setCollision(25, true, 'Layer1');
             this.map.setCollision(26, true, 'Layer1');
             this.map.setCollision(27, true, 'Layer1');
             //this.map.setCollision(27, true, 'Layer1');
             p2 = game.add.sprite(game.world.centerX, game.world.centerY-100, "p2Anim1");
             game.physics.arcade.enable(p2);
             // game.physics.p2.enable(p2);
             p2.body.collideWorldBounds = true;
             p2.scale.x = .3;
             p2.scale.y = .3;
             p2.anchor.setTo(0.5);
             //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
             p2.animations.add('up', [12, 13, 14, 15], 10, true);
             p2.animations.add('down', [0, 1, 2, 3], 10, true);
             p2.animations.add('left', [4, 5, 6, 7], 10, true);
             p2.animations.add('right', [8, 9, 10, 11], 10, true);
        
             
             p2FacingDirection = 1;
             
             p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
             p2healthBarRed.scale.y = 0.06;
             p2healthBarRed.scale.x = 0.2;
             //p2healthBarRed.anchor.setTo(0.5);
             game.physics.arcade.enable(p2healthBarRed);
             
             p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
             p2healthBarGreen.scale.y = 0.06;
             p2healthBarGreen.scale.x = 0.2;
             //p2healthBarGreen.anchor.setTo(0.5);
             game.physics.arcade.enable(p2healthBarGreen);
     
}
else if(mapnow == 3){

             //-----------------------------------map3-------------------------------------
        this.map = game.add.tilemap('map3');
        this.map.addTilesetImage('oakk');
        this.map.addTilesetImage('grass');

        this.layer2 = this.map.createLayer('Layer2');
        this.layer2.resizeWorld();
        this.layer = this.map.createLayer('Layer1');
        this.layer.resizeWorld();


        this.map.setCollision(31, true, 'Layer1');
        this.map.setCollision(32, true, 'Layer1');

        this.map.setCollision(38, true, 'Layer1');
        this.map.setCollision(39, true, 'Layer1');
        this.map.setCollision(45, true, 'Layer1');
        this.map.setCollision(46, true, 'Layer1');
        this.map.setCollision(52, true, 'Layer1');
        this.map.setCollision(53, true, 'Layer1');
        p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
        game.physics.arcade.enable(p2);
        // game.physics.p2.enable(p2);
        p2.body.collideWorldBounds = true;
        p2.scale.x = .3;
        p2.scale.y = .3;
        p2.anchor.setTo(0.5);
        //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
        p2.animations.add('up', [12, 13, 14, 15], 10, true);
        p2.animations.add('down', [0, 1, 2, 3], 10, true);
        p2.animations.add('left', [4, 5, 6, 7], 10, true);
        p2.animations.add('right', [8, 9, 10, 11], 10, true);
        
        
        p2FacingDirection = 1;
        
        p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
        p2healthBarRed.scale.y = 0.06;
        p2healthBarRed.scale.x = 0.2;
        //p2healthBarRed.anchor.setTo(0.5);
        game.physics.arcade.enable(p2healthBarRed);
        
        p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
        p2healthBarGreen.scale.y = 0.06;
        p2healthBarGreen.scale.x = 0.2;
        //p2healthBarGreen.anchor.setTo(0.5);
        game.physics.arcade.enable(p2healthBarGreen);
}
else if(mapnow == 4){
        
         //-----------------------------------map4-------------------------------------
         this.map = game.add.tilemap('map4');
         this.map.addTilesetImage('igloo');
         this.map.addTilesetImage('snow');
 
         this.layer2 = this.map.createLayer('Layer2');
         this.layer2.resizeWorld();
         this.layer = this.map.createLayer('Layer1');
         this.layer.resizeWorld();
 
         //this.map.setCollision(1);
         //this.map.setCollision(0, true, 'Layer1');
         //this.map.setCollision(1, true, 'Layer1');
         //this.map.setCollision(2, true, 'Layer1');
         this.map.setCollision(3, true, 'Layer1');
         this.map.setCollision(4, true, 'Layer1');
         //this.map.setCollision(6, true, 'Layer1');
         //this.map.setCollision(7, true, 'Layer1');
         this.map.setCollision(8, true, 'Layer1');
         this.map.setCollision(9, true, 'Layer1');
         this.map.setCollision(10, true, 'Layer1');
         this.map.setCollision(11, true, 'Layer1');
         //this.map.setCollision(12, true, 'Layer1');
         this.map.setCollision(13, true, 'Layer1');
         this.map.setCollision(14, true, 'Layer1');
         this.map.setCollision(15, true, 'Layer1');
         this.map.setCollision(16, true, 'Layer1');
         this.map.setCollision(17, true, 'Layer1');
         //this.map.setCollision(18, true, 'Layer1');
         //this.map.setCollision(19, true, 'Layer1');
         this.map.setCollision(20, true, 'Layer1');
         this.map.setCollision(21, true, 'Layer1');
         this.map.setCollision(22, true, 'Layer1');
         this.map.setCollision(23, true, 'Layer1');
         this.map.setCollision(24, true, 'Layer1');
         //this.map.setCollision(25, true, 'Layer1');
         //this.map.setCollision(26, true, 'Layer1');
         //this.map.setCollision(27, true, 'Layer1');
         //this.map.setCollision(28, true, 'Layer1');
         //this.map.setCollision(29, true, 'Layer1');
         p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
         game.physics.arcade.enable(p2);
         // game.physics.p2.enable(p2);
         p2.body.collideWorldBounds = true;
         p2.scale.x = .3;
         p2.scale.y = .3;
         p2.anchor.setTo(0.5);
         //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
         p2.animations.add('up', [12, 13, 14, 15], 10, true);
         p2.animations.add('down', [0, 1, 2, 3], 10, true);
         p2.animations.add('left', [4, 5, 6, 7], 10, true);
         p2.animations.add('right', [8, 9, 10, 11], 10, true);
        
         
         p2FacingDirection = 1;
         
         p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
         p2healthBarRed.scale.y = 0.06;
         p2healthBarRed.scale.x = 0.2;
         //p2healthBarRed.anchor.setTo(0.5);
         game.physics.arcade.enable(p2healthBarRed);
         
         p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
         p2healthBarGreen.scale.y = 0.06;
         p2healthBarGreen.scale.x = 0.2;
         //p2healthBarGreen.anchor.setTo(0.5);
         game.physics.arcade.enable(p2healthBarGreen);

}
else if(mapnow == 5){


        
                //-----------------------------------map5-------------------------------------
                this.map = game.add.tilemap('map5');
                
                this.map.addTilesetImage('wall');
                this.map.addTilesetImage('maya');
                this.map.addTilesetImage('bridge2');
                this.map.addTilesetImage('lightSand2');
        
                this.layer2 = this.map.createLayer('Layer2');
                this.layer2.resizeWorld();
                this.layer = this.map.createLayer('Layer1');
                this.layer.resizeWorld();
        
                //this.map.setCollision(1);
                this.map.setCollision([1,2,3,13,22,31,41,42,49,50,51,57,58,59,60,65,66,67,68,69,73,74,75,76,77,78,
                81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,
                115,116,135,136,137,138,139,140,156,157,158,159,160,161,162,163,178,179,180,181,182,183,184,185,
                200,201,202,203,204,205,206,207,221,222,223,224,225,226,227,228,230,242,243,247,248,253,263,264,269,270,275,276,284,285,286,290,291,292,293,298,
                305,306,307,312,313,314,315,320,321,326,327,328,333,334,335,336,337,338,343,344,347,348,349,350,355,356,357,358,359,360,365,366,367,368,370,371,377,378,379,380,381,382,383,388,389,398,399,
                ,400,401,402,403,404,405,420,421,422,423,424,425,426,427,428,440,441,442,443,444,445,446,447,448,449,450,461,466,467,468,469
                ], true, 'Layer1');
         
                //setCollisionBetween(72, 467, true, 'Layer1');
                p2 = game.add.sprite(game.world.centerX, game.world.centerY-300, "p2Anim1");
                game.physics.arcade.enable(p2);
                // game.physics.p2.enable(p2);
                p2.body.collideWorldBounds = true;
                p2.scale.x = .3;
                p2.scale.y = .3;
                p2.anchor.setTo(0.5);
                //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
                p2.animations.add('up', [12, 13, 14, 15], 10, true);
                p2.animations.add('down', [0, 1, 2, 3], 10, true);
                p2.animations.add('left', [4, 5, 6, 7], 10, true);
                p2.animations.add('right', [8, 9, 10, 11], 10, true);
        
                
                p2FacingDirection = 1;
                
                p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
                p2healthBarRed.scale.y = 0.06;
                p2healthBarRed.scale.x = 0.2;
                //p2healthBarRed.anchor.setTo(0.5);
                game.physics.arcade.enable(p2healthBarRed);
                
                p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
                p2healthBarGreen.scale.y = 0.06;
                p2healthBarGreen.scale.x = 0.2;
                //p2healthBarGreen.anchor.setTo(0.5);
                game.physics.arcade.enable(p2healthBarGreen);
        
}
else if(mapnow == 6){
   
        //-----------------------------------map6-------------------------------------
        this.map = game.add.tilemap('map6');
         
        this.map.addTilesetImage('wall');
        //this.map.addTilesetImage('123');
        this.map.addTilesetImage('lightSand2');
 
        this.layer2 = this.map.createLayer('Layer2');
        this.layer2.resizeWorld();
        this.layer = this.map.createLayer('Layer1');
        this.layer.resizeWorld();
 
        //this.map.setCollision(1);
        this.map.setCollision(0, true, 'Layer1');
        this.map.setCollision(1, true, 'Layer1');
        this.map.setCollision(2, true, 'Layer1');
        this.map.setCollision(3, true, 'Layer1');
        this.map.setCollision(4, true, 'Layer1');
        this.map.setCollision(5, true, 'Layer1');
        this.map.setCollision(6, true, 'Layer1');
        this.map.setCollision(7, true, 'Layer1');
        this.map.setCollision(8, true, 'Layer1');
        this.map.setCollision(9, true, 'Layer1');
        this.map.setCollision(10, true, 'Layer1');
        this.map.setCollision(11, true, 'Layer1');
        this.map.setCollision(12, true, 'Layer1');
        this.map.setCollision(13, true, 'Layer1');
        this.map.setCollision(14, true, 'Layer1');
        this.map.setCollision(15, true, 'Layer1');
        this.map.setCollision(16, true, 'Layer1');
        this.map.setCollision(17, true, 'Layer1');
        this.map.setCollision(18, true, 'Layer1');
        this.map.setCollision(19, true, 'Layer1');
        this.map.setCollision(20, true, 'Layer1');
        this.map.setCollision(21, true, 'Layer1');
        this.map.setCollision(22, true, 'Layer1');
        this.map.setCollision(23, true, 'Layer1');
        this.map.setCollision(24, true, 'Layer1');
        p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
game.physics.arcade.enable(p2);
// game.physics.p2.enable(p2);
p2.body.collideWorldBounds = true;
p2.scale.x = .3;
p2.scale.y = .3;
p2.anchor.setTo(0.5);
//p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
p2.animations.add('up', [12, 13, 14, 15], 10, true);
p2.animations.add('down', [0, 1, 2, 3], 10, true);
p2.animations.add('left', [4, 5, 6, 7], 10, true);
p2.animations.add('right', [8, 9, 10, 11], 10, true);


p2FacingDirection = 1;

p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
p2healthBarRed.scale.y = 0.06;
p2healthBarRed.scale.x = 0.2;
//p2healthBarRed.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarRed);

p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
p2healthBarGreen.scale.y = 0.06;
p2healthBarGreen.scale.x = 0.2;
//p2healthBarGreen.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarGreen);
 
}
else if(mapnow == 7){

        //-----------------------------------map7-------------------------------------
        this.map = game.add.tilemap('map7');

        this.map.addTilesetImage('lake');

        this.map.addTilesetImage('grass2');

        this.layer2 = this.map.createLayer('Layer2');
        this.layer2.resizeWorld();
        this.layer = this.map.createLayer('Layer1');
        this.layer.resizeWorld();

        //this.map.setCollision(1);
        this.map.setCollision([347,348,349,350,351,384,385,386,387,388,389,390,391,392,393,394,395,396,397
            ,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,496,497,498,499
            ,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591
            ,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,636,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,673,674,675,690,691,692,693,694,695,696,697,698,699
            ,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794
            ,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,893,894,895,896,897,898,899
            ,900,901,902,903,904,905,906,907,908,909,910,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987
            ,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1052,1053,1054,1055,1056,1057,1058,1059], true, 'Layer1');

            p2 = game.add.sprite(game.world.centerX, game.world.centerY-200, "p2Anim1");
game.physics.arcade.enable(p2);
// game.physics.p2.enable(p2);
p2.body.collideWorldBounds = true;
p2.scale.x = .3;
p2.scale.y = .3;
p2.anchor.setTo(0.5);
//p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
p2.animations.add('up', [12, 13, 14, 15], 10, true);
p2.animations.add('down', [0, 1, 2, 3], 10, true);
p2.animations.add('left', [4, 5, 6, 7], 10, true);
p2.animations.add('right', [8, 9, 10, 11], 10, true);


p2FacingDirection = 1;

p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
p2healthBarRed.scale.y = 0.06;
p2healthBarRed.scale.x = 0.2;
//p2healthBarRed.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarRed);

p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
p2healthBarGreen.scale.y = 0.06;
p2healthBarGreen.scale.x = 0.2;
//p2healthBarGreen.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarGreen);
        }

else if(mapnow == 8){

//      ---------------------------------map8-------------------------------------
this.map = game.add.tilemap('map8');
this.map.addTilesetImage('1234');
this.map.addTilesetImage('4321');
this.map.addTilesetImage('lightSand2');

this.layer2 = this.map.createLayer('Layer2');
this.layer2.resizeWorld();
this.layer = this.map.createLayer('Layer1');
this.layer.resizeWorld();

//this.map.setCollision(1);
//this.map.setCollision(1, true, 'Layer1');
this.map.setCollision(1, true, 'Layer1');
this.map.setCollision(2, true, 'Layer1');
this.map.setCollision(3, true, 'Layer1');
this.map.setCollision(5, true, 'Layer1');
this.map.setCollision(6, true, 'Layer1');
this.map.setCollision(7, true, 'Layer1');
this.map.setCollision(8, true, 'Layer1');
this.map.setCollision(9, true, 'Layer1');
this.map.setCollision(10, true, 'Layer1');
this.map.setCollision(11, true, 'Layer1');
this.map.setCollision(12, true, 'Layer1');
this.map.setCollision(13, true, 'Layer1');
this.map.setCollision(14, true, 'Layer1');
this.map.setCollision(15, true, 'Layer1');
this.map.setCollision(16, true, 'Layer1');
this.map.setCollision(17, true, 'Layer1');
this.map.setCollision(18, true, 'Layer1');
this.map.setCollision(19, true, 'Layer1');
this.map.setCollision(20, true, 'Layer1');
this.map.setCollision(21, true, 'Layer1');
this.map.setCollision(22, true, 'Layer1');
this.map.setCollision(23, true, 'Layer1');
this.map.setCollision(24, true, 'Layer1');
this.map.setCollision(25, true, 'Layer1');
this.map.setCollision(26, true, 'Layer1');
this.map.setCollision(27, true, 'Layer1');
this.map.setCollision(28, true, 'Layer1');
this.map.setCollision(29, true, 'Layer1');
this.map.setCollision(30, true, 'Layer1');
this.map.setCollision(31, true, 'Layer1');
this.map.setCollision(32, true, 'Layer1');
this.map.setCollision(33, true, 'Layer1');
this.map.setCollision(34, true, 'Layer1');
this.map.setCollision(35, true, 'Layer1');
this.map.setCollision(36, true, 'Layer1');
p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
game.physics.arcade.enable(p2);
// game.physics.p2.enable(p2);
p2.body.collideWorldBounds = true;
p2.scale.x = .3;
p2.scale.y = .3;
p2.anchor.setTo(0.5);
//p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
p2.animations.add('up', [12, 13, 14, 15], 10, true);
p2.animations.add('down', [0, 1, 2, 3], 10, true);
p2.animations.add('left', [4, 5, 6, 7], 10, true);
p2.animations.add('right', [8, 9, 10, 11], 10, true);


p2FacingDirection = 1;

p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
p2healthBarRed.scale.y = 0.06;
p2healthBarRed.scale.x = 0.2;
//p2healthBarRed.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarRed);

p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
p2healthBarGreen.scale.y = 0.06;
p2healthBarGreen.scale.x = 0.2;
//p2healthBarGreen.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarGreen);
}
else if(mapnow == 9){

//      ---------------------------------map9-------------------------------------
         this.map = game.add.tilemap('map9');
         this.map.addTilesetImage('1234');
         this.map.addTilesetImage('4321');
         this.map.addTilesetImage('54321');
         this.map.addTilesetImage('lightSand3');
 
         this.layer2 = this.map.createLayer('Layer2');
         this.layer2.resizeWorld();
         this.layer = this.map.createLayer('Layer1');
         this.layer.resizeWorld();
 
         //this.map.setCollision(1);
         //this.map.setCollision(1, true, 'Layer1');
         this.map.setCollision(1, true, 'Layer1');
         this.map.setCollision(2, true, 'Layer1');
         this.map.setCollision(3, true, 'Layer1');
         this.map.setCollision(5, true, 'Layer1');
         this.map.setCollision(6, true, 'Layer1');
         this.map.setCollision(7, true, 'Layer1');
         this.map.setCollision(8, true, 'Layer1');
         this.map.setCollision(9, true, 'Layer1');
         this.map.setCollision(10, true, 'Layer1');
         this.map.setCollision(11, true, 'Layer1');
         this.map.setCollision(12, true, 'Layer1');
         this.map.setCollision(13, true, 'Layer1');
         this.map.setCollision(14, true, 'Layer1');
         this.map.setCollision(15, true, 'Layer1');
         this.map.setCollision(16, true, 'Layer1');
         this.map.setCollision(17, true, 'Layer1');
         this.map.setCollision(18, true, 'Layer1');
         this.map.setCollision(19, true, 'Layer1');
         this.map.setCollision(20, true, 'Layer1');
         this.map.setCollision(21, true, 'Layer1');
         this.map.setCollision(22, true, 'Layer1');
         this.map.setCollision(23, true, 'Layer1');
         this.map.setCollision(24, true, 'Layer1');
         this.map.setCollision(25, true, 'Layer1');
         this.map.setCollision(26, true, 'Layer1');
         this.map.setCollision(27, true, 'Layer1');
         this.map.setCollision(28, true, 'Layer1');
         this.map.setCollision(29, true, 'Layer1');
         this.map.setCollision(30, true, 'Layer1');
         this.map.setCollision(31, true, 'Layer1');
         this.map.setCollision(32, true, 'Layer1');
         this.map.setCollision(33, true, 'Layer1');
         this.map.setCollision(34, true, 'Layer1');
         this.map.setCollision(35, true, 'Layer1');
         this.map.setCollision(36, true, 'Layer1');
         this.map.setCollision(37, true, 'Layer1');
         this.map.setCollision(38, true, 'Layer1');
         this.map.setCollision(39, true, 'Layer1');
         this.map.setCollision(40, true, 'Layer1');
         this.map.setCollision(41, true, 'Layer1');
         this.map.setCollision(42, true, 'Layer1');
         this.map.setCollision(43, true, 'Layer1');
         this.map.setCollision(44, true, 'Layer1');
         this.map.setCollision(45, true, 'Layer1');
         this.map.setCollision(46, true, 'Layer1');
         this.map.setCollision(47, true, 'Layer1');
         this.map.setCollision(48, true, 'Layer1');
         this.map.setCollision(49, true, 'Layer1');
         this.map.setCollision(50, true, 'Layer1');
         this.map.setCollision(51, true, 'Layer1');
         this.map.setCollision(52, true, 'Layer1');
         this.map.setCollision(53, true, 'Layer1');
         this.map.setCollision(54, true, 'Layer1');


         //this.map.setCollision(25, true, 'Layer1');
         //this.map.setCollision(27, true, 'Layer1');
         p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
         game.physics.arcade.enable(p2);
         // game.physics.p2.enable(p2);
         p2.body.collideWorldBounds = true;
         p2.scale.x = .3;
         p2.scale.y = .3;
         p2.anchor.setTo(0.5);
         //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
         p2.animations.add('up', [12, 13, 14, 15], 10, true);
         p2.animations.add('down', [0, 1, 2, 3], 10, true);
         p2.animations.add('left', [4, 5, 6, 7], 10, true);
         p2.animations.add('right', [8, 9, 10, 11], 10, true);
        
         
         p2FacingDirection = 1;
         
         p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
         p2healthBarRed.scale.y = 0.06;
         p2healthBarRed.scale.x = 0.2;
         //p2healthBarRed.anchor.setTo(0.5);
         game.physics.arcade.enable(p2healthBarRed);
         
         p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
         p2healthBarGreen.scale.y = 0.06;
         p2healthBarGreen.scale.x = 0.2;
         //p2healthBarGreen.anchor.setTo(0.5);
         game.physics.arcade.enable(p2healthBarGreen);
 
}
else if(mapnow == 10){
//      ---------------------------------map10-------------------------------------
this.map = game.add.tilemap('map10');
this.map.addTilesetImage('museum');
this.map.addTilesetImage('candy');
this.map.addTilesetImage('bakery');
this.map.addTilesetImage('cinema');
this.map.addTilesetImage('casino');
this.map.addTilesetImage('street2');
this.map.addTilesetImage('lightSand');

this.layer2 = this.map.createLayer('Layer2');
this.layer2.resizeWorld();
this.layer = this.map.createLayer('Layer1');
this.layer.resizeWorld();


this.map.setCollision([05,06,14,15,16,17,18,24,25,26,27,28,34,35,36,37,38,44,45,46,47,48,54,55,56,57,58,64,65,66,67,68,73,74,75,76,77,78,84,85,86,87,
105,113,114,115,116,117,122,123,124,125,126,127,132,133,134,135,136,137,142,143,144,145,146,147,152,153,154,155,156,157,158,159,164,165,166,167,
185,195,196,197,198,205,206,207,208,215,216,217,218,225,226,227,228,235,236,237,238,245,246,247,248,255,256,257,258,265,266,267,268,272,273,274,275,276,277,278,284,285,286,287,
313,314,323,324,325,326,333,334,335,336,337,343,344,345,346,347,348,349,353,354,355,356,357,358,359,364,365,366,367,368,
386,395,396,404,405,406,413,414,415,416,417,418,423,424,425,426,427,428,433,434,435,436,437,438,444,445,446,447], true, 'Layer1');
p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
game.physics.arcade.enable(p2);
// game.physics.p2.enable(p2);
p2.body.collideWorldBounds = true;
p2.scale.x = .3;
p2.scale.y = .3;
p2.anchor.setTo(0.5);
//p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
p2.animations.add('up', [12, 13, 14, 15], 10, true);
p2.animations.add('down', [0, 1, 2, 3], 10, true);
p2.animations.add('left', [4, 5, 6, 7], 10, true);
p2.animations.add('right', [8, 9, 10, 11], 10, true);


p2FacingDirection = 1;

p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
p2healthBarRed.scale.y = 0.06;
p2healthBarRed.scale.x = 0.2;
//p2healthBarRed.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarRed);

p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
p2healthBarGreen.scale.y = 0.06;
p2healthBarGreen.scale.x = 0.2;
//p2healthBarGreen.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarGreen);
}
else if(mapnow == 11){


//      ---------------------------------map11-------------------------------------
         this.map = game.add.tilemap('map11');
         this.map.addTilesetImage('rock');
         this.map.addTilesetImage('oakk2');
         this.map.addTilesetImage('grass2');
 
         this.layer2 = this.map.createLayer('Layer2');
         this.layer2.resizeWorld();
         this.layer = this.map.createLayer('Layer1');
         this.layer.resizeWorld();
 
         this.map.setCollision(1, true, 'Layer1');
         this.map.setCollision(2, true, 'Layer1');
         this.map.setCollision(4, true, 'Layer1');
         this.map.setCollision(5, true, 'Layer1');
         this.map.setCollision(6, true, 'Layer1');
         this.map.setCollision(7, true, 'Layer1');
         this.map.setCollision(8, true, 'Layer1');
         this.map.setCollision(9, true, 'Layer1');
         this.map.setCollision([639,640,643,644,647,648], true, 'Layer1');
         p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
         game.physics.arcade.enable(p2);
         // game.physics.p2.enable(p2);
         p2.body.collideWorldBounds = true;
         p2.scale.x = .3;
         p2.scale.y = .3;
         p2.anchor.setTo(0.5);
         //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
         p2.animations.add('up', [12, 13, 14, 15], 10, true);
         p2.animations.add('down', [0, 1, 2, 3], 10, true);
         p2.animations.add('left', [4, 5, 6, 7], 10, true);
         p2.animations.add('right', [8, 9, 10, 11], 10, true);
        
         
         p2FacingDirection = 1;
         
         p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
         p2healthBarRed.scale.y = 0.06;
         p2healthBarRed.scale.x = 0.2;
         //p2healthBarRed.anchor.setTo(0.5);
         game.physics.arcade.enable(p2healthBarRed);
         
         p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
         p2healthBarGreen.scale.y = 0.06;
         p2healthBarGreen.scale.x = 0.2;
         //p2healthBarGreen.anchor.setTo(0.5);
         game.physics.arcade.enable(p2healthBarGreen);
}
else if(mapnow == 12){


//      ---------------------------------map12-------------------------------------
this.map = game.add.tilemap('map12');
this.map.addTilesetImage('building');
this.map.addTilesetImage('building3');
this.map.addTilesetImage('parking');
this.map.addTilesetImage('street2');
this.map.addTilesetImage('lightSand');

this.layer2 = this.map.createLayer('Layer2');
this.layer2.resizeWorld();
this.layer = this.map.createLayer('Layer1');
this.layer.resizeWorld();


this.map.setCollision([47,48,57,58,66,67,68,69,75,76,77,78,79,80,85,86,87,88,89,90,95,96,97,98,99,
100,105,106,107,108,109,110,115,116,117,118,119,120,125,126,127,128,129,130,135,136,137,138,139,140,145,146,147,148,149,150,155,156,157,158,159,160,165,166,167,168,169,170,175,176,177,178,179,180,185,186,187,188,189,190,195,196,197,198,199,
200,204,205,206,207,208,209,210,
227,228,236,237,238,239,240,245,246,247,248,249,250,255,256,257,258,259,260,265,266,267,268,269,270,275,276,277,278,279,280,285,286,287,288,289,290,295,296,297,298,299,300,305,306,307,308,309,310,315,316,317,318,319,320,325,326,327,328,329,330,334,335,336,337,338,339,340,341,345,346,347,348,349,
367,368,375,376,377,378,379,380,384,385,386,387,388,389,390,391,394,395,396,397,398,399,400,401,404,405,406,407,408,409,410,411,414,415,416,417,418,419,420,421,425,426,427,428,429,430], true, 'Layer1');
p2 = game.add.sprite(game.world.centerX, game.world.centerY-300, "p2Anim1");
game.physics.arcade.enable(p2);
// game.physics.p2.enable(p2);
p2.body.collideWorldBounds = true;
p2.scale.x = .3;
p2.scale.y = .3;
p2.anchor.setTo(0.5);
//p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
p2.animations.add('up', [12, 13, 14, 15], 10, true);
p2.animations.add('down', [0, 1, 2, 3], 10, true);
p2.animations.add('left', [4, 5, 6, 7], 10, true);
p2.animations.add('right', [8, 9, 10, 11], 10, true);


p2FacingDirection = 1;

p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
p2healthBarRed.scale.y = 0.06;
p2healthBarRed.scale.x = 0.2;
//p2healthBarRed.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarRed);

p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
p2healthBarGreen.scale.y = 0.06;
p2healthBarGreen.scale.x = 0.2;
//p2healthBarGreen.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarGreen);
}
else if(mapnow == 13){

//      ---------------------------------map13-------------------------------------
this.map = game.add.tilemap('map13');
this.map.addTilesetImage('santa2');
this.map.addTilesetImage('snow');

this.layer2 = this.map.createLayer('Layer2');
this.layer2.resizeWorld();
this.layer = this.map.createLayer('Layer1');
this.layer.resizeWorld();


this.map.setCollision([3,4,5,14,15,16,17,18,24,25,26,27,28,29,35,36,37,38,39,46,48,49,50,57,59,60,61,62,71,72,73,74,82,83,84,92,93,94,95
 ,103,104,105,106,107,112,113,114,115,116,117,118,119,120,123,124,125,126,127,128,129,130,131,134,135,136,137,138,139,140,141,142,145,146,147,148,149,150,151,152,153,157,158,159,160,161,162,163,164,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,190,191,192,193,194,195,196,197,
 ,202,203,204,205,206,207,213,214,215,216,217,218,224,225,226,227,228,229,235,236,237,238,239,240,246,247,248,249,250,251,257,258,259,260,261,262,263,268,269,270,271,272,273,274], true, 'Layer1');

 p2 = game.add.sprite(game.world.centerX, game.world.centerY-300, "p2Anim1");
 game.physics.arcade.enable(p2);
 // game.physics.p2.enable(p2);
 p2.body.collideWorldBounds = true;
 p2.scale.x = .3;
 p2.scale.y = .3;
 p2.anchor.setTo(0.5);
 //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
 p2.animations.add('up', [12, 13, 14, 15], 10, true);
 p2.animations.add('down', [0, 1, 2, 3], 10, true);
 p2.animations.add('left', [4, 5, 6, 7], 10, true);
 p2.animations.add('right', [8, 9, 10, 11], 10, true);
 
 
 p2FacingDirection = 1;
 
 p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
 p2healthBarRed.scale.y = 0.06;
 p2healthBarRed.scale.x = 0.2;
 //p2healthBarRed.anchor.setTo(0.5);
 game.physics.arcade.enable(p2healthBarRed);
 
 p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
 p2healthBarGreen.scale.y = 0.06;
 p2healthBarGreen.scale.x = 0.2;
 //p2healthBarGreen.anchor.setTo(0.5);
 game.physics.arcade.enable(p2healthBarGreen); 
}
else if(mapnow == 14){

//      ---------------------------------map14-------------------------------------
this.map = game.add.tilemap('map14');
this.map.addTilesetImage('tree');
this.map.addTilesetImage('snow');

this.layer2 = this.map.createLayer('Layer2');
this.layer2.resizeWorld();
this.layer = this.map.createLayer('Layer1');
this.layer.resizeWorld();


this.map.setCollision([2,3,4,6,7,8,9,10,11,12,13,14,15,17,18,19,22,23,24,27,28,29,33,38,43], true, 'Layer1');
p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
game.physics.arcade.enable(p2);
// game.physics.p2.enable(p2);
p2.body.collideWorldBounds = true;
p2.scale.x = .3;
p2.scale.y = .3;
p2.anchor.setTo(0.5);
//p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
p2.animations.add('up', [12, 13, 14, 15], 10, true);
p2.animations.add('down', [0, 1, 2, 3], 10, true);
p2.animations.add('left', [4, 5, 6, 7], 10, true);
p2.animations.add('right', [8, 9, 10, 11], 10, true);


p2FacingDirection = 1;

p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
p2healthBarRed.scale.y = 0.06;
p2healthBarRed.scale.x = 0.2;
//p2healthBarRed.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarRed);

p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
p2healthBarGreen.scale.y = 0.06;
p2healthBarGreen.scale.x = 0.2;
//p2healthBarGreen.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarGreen);
}
else if(mapnow == 15){

  //      ---------------------------------map15-------------------------------------
  this.map = game.add.tilemap('map15');
  this.map.addTilesetImage('tree');
  this.map.addTilesetImage('snow');

  this.layer2 = this.map.createLayer('Layer2');
  this.layer2.resizeWorld();
  this.layer = this.map.createLayer('Layer1');
  this.layer.resizeWorld();


  this.map.setCollision([2,3,4,6,7,8,9,10,11,12,13,14,15,17,18,19,22,23,24,27,28,29,33,38,43], true, 'Layer1');
  p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
  game.physics.arcade.enable(p2);
  // game.physics.p2.enable(p2);
  p2.body.collideWorldBounds = true;
  p2.scale.x = .3;
  p2.scale.y = .3;
  p2.anchor.setTo(0.5);
  //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
  p2.animations.add('up', [12, 13, 14, 15], 10, true);
  p2.animations.add('down', [0, 1, 2, 3], 10, true);
  p2.animations.add('left', [4, 5, 6, 7], 10, true);
  p2.animations.add('right', [8, 9, 10, 11], 10, true);
  
  
  p2FacingDirection = 1;
  
  p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
  p2healthBarRed.scale.y = 0.06;
  p2healthBarRed.scale.x = 0.2;
  //p2healthBarRed.anchor.setTo(0.5);
  game.physics.arcade.enable(p2healthBarRed);
  
  p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
  p2healthBarGreen.scale.y = 0.06;
  p2healthBarGreen.scale.x = 0.2;
  //p2healthBarGreen.anchor.setTo(0.5);
  game.physics.arcade.enable(p2healthBarGreen);
}
else if(mapnow == 16){
  
 //      ---------------------------------map16-------------------------------------
 this.map = game.add.tilemap('map16');
 this.map.addTilesetImage('candyhouse');
 this.map.addTilesetImage('grass2');

 this.layer2 = this.map.createLayer('Layer2');
 this.layer2.resizeWorld();
 this.layer = this.map.createLayer('Layer1');
 this.layer.resizeWorld();


 this.map.setCollision([4,11,12,13,18,19,20,21,22,23,26,27,28,29,30,31,32,34,35,36,37,38,39,40,42,43,44,45,46,47,48,51,52,53,54,55], true, 'Layer1');

 p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
game.physics.arcade.enable(p2);
// game.physics.p2.enable(p2);
p2.body.collideWorldBounds = true;
p2.scale.x = .3;
p2.scale.y = .3;
p2.anchor.setTo(0.5);
//p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
p2.animations.add('up', [12, 13, 14, 15], 10, true);
p2.animations.add('down', [0, 1, 2, 3], 10, true);
p2.animations.add('left', [4, 5, 6, 7], 10, true);
p2.animations.add('right', [8, 9, 10, 11], 10, true);


p2FacingDirection = 1;

p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
p2healthBarRed.scale.y = 0.06;
p2healthBarRed.scale.x = 0.2;
//p2healthBarRed.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarRed);

p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
p2healthBarGreen.scale.y = 0.06;
p2healthBarGreen.scale.x = 0.2;
//p2healthBarGreen.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarGreen);
}
else if(mapnow == 17){
 
 //      ---------------------------------map17-------------------------------------
 this.map = game.add.tilemap('map17');
 this.map.addTilesetImage('123');
 this.map.addTilesetImage('321');
 this.map.addTilesetImage('lightSand');

 this.layer2 = this.map.createLayer('Layer2');
 this.layer2.resizeWorld();
 this.layer = this.map.createLayer('Layer1');
 this.layer.resizeWorld();


 this.map.setCollision([2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,30,31,32,33,34,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53,54,55], true, 'Layer1');
 p2 = game.add.sprite(game.world.centerX, game.world.centerY, "p2Anim1");
 game.physics.arcade.enable(p2);
 // game.physics.p2.enable(p2);
 p2.body.collideWorldBounds = true;
 p2.scale.x = .3;
 p2.scale.y = .3;
 p2.anchor.setTo(0.5);
 //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
 p2.animations.add('up', [12, 13, 14, 15], 10, true);
 p2.animations.add('down', [0, 1, 2, 3], 10, true);
 p2.animations.add('left', [4, 5, 6, 7], 10, true);
 p2.animations.add('right', [8, 9, 10, 11], 10, true);
 
 
 p2FacingDirection = 1;
 
 p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
 p2healthBarRed.scale.y = 0.06;
 p2healthBarRed.scale.x = 0.2;
 //p2healthBarRed.anchor.setTo(0.5);
 game.physics.arcade.enable(p2healthBarRed);
 
 p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
 p2healthBarGreen.scale.y = 0.06;
 p2healthBarGreen.scale.x = 0.2;
 //p2healthBarGreen.anchor.setTo(0.5);
 game.physics.arcade.enable(p2healthBarGreen);
}
else if(mapnow == 1){


//      ---------------------------------map1-------------------------------------
this.map = game.add.tilemap('map1');
this.map.addTilesetImage('grass2');
this.map.addTilesetImage('oakk2');
this.map.addTilesetImage('rock');

this.layer2 = this.map.createLayer('Layer2');
this.layer2.resizeWorld();
this.layer = this.map.createLayer('Layer1');
this.layer.resizeWorld();

//this.map.setCollision(1);
//this.map.setCollision(1, true, 'Layer1');
this.map.setCollision(1, true, 'Layer1');
this.map.setCollision(2, true, 'Layer1');
this.map.setCollision(4, true, 'Layer1');
this.map.setCollision(5, true, 'Layer1');
this.map.setCollision(6, true, 'Layer1');
this.map.setCollision(7, true, 'Layer1');
this.map.setCollision(8, true, 'Layer1');
this.map.setCollision(9, true, 'Layer1');
this.map.setCollision([639,640,643,644,647,648], true, 'Layer1');
p2 = game.add.sprite(400, game.world.centerY+80, "p2Anim1");
game.physics.arcade.enable(p2);
// game.physics.p2.enable(p2);
p2.body.collideWorldBounds = true;
p2.scale.x = .3;
p2.scale.y = .3;
p2.anchor.setTo(0.5);
//p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
p2.animations.add('up', [12, 13, 14, 15], 10, true);
p2.animations.add('down', [0, 1, 2, 3], 10, true);
p2.animations.add('left', [4, 5, 6, 7], 10, true);
p2.animations.add('right', [8, 9, 10, 11], 10, true);


p2FacingDirection = 1;

p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
p2healthBarRed.scale.y = 0.06;
p2healthBarRed.scale.x = 0.2;
//p2healthBarRed.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarRed);

p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
p2healthBarGreen.scale.y = 0.06;
p2healthBarGreen.scale.x = 0.2;
//p2healthBarGreen.anchor.setTo(0.5);
game.physics.arcade.enable(p2healthBarGreen);

}
        this.explosionSound  = game.add.audio('explosionSound');
        this.pistolSound = game.add.audio('pistolSound');
        this.shotgunSound = game.add.audio('shotgunSound');
        this.walkingSound = game.add.audio('walkingSound');
        this.zombieSound = game.add.audio('zombieSound');
        this.machineGunSound = game.add.audio('machineGunSound');
        this.rocketLaunchSound = game.add.audio('rocketLaunchSound');
        this.dryFireGunSound = game.add.audio("dryFireGunSound");
        this.footStepsSound = game.add.audio("footStepsSound");
        this.weaponSwitchSoundP1 = game.add.audio("gunClickSound");
        this.weaponSwitchSoundP2 = game.add.audio("gunClickSound");
        this.buttonSound = game.add.audio('button');
        this.boss_ball = game.add.audio('boss_ball');
        this.ballhitplayer = game.add.audio('ballhitplayer');

        this.receivebox = game.add.audio('receivebox');
        this.win = game.add.audio('win');
        this.lose = game.add.audio('gameover');
        this.start = game.add.audio('start');
        
        this.zombieSounds.zombieSoundP1Num1 = game.add.audio("zombieSound");
        this.zombieSounds.zombieSoundP1Num2 = game.add.audio("zombieSound");
        this.zombieSounds.zombieSoundP1Num3 = game.add.audio("zombieSound");
        this.zombieSounds.zombieSoundP2Num1 = game.add.audio("zombieSound");
        this.zombieSounds.zombieSoundP2Num2 = game.add.audio("zombieSound");
        this.zombieSounds.zombieSoundP2Num3 = game.add.audio("zombieSound");
        
    	//game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.startSystem('arcade');
        this.drawGame();
        
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
        cursors = game.input.keyboard.createCursorKeys();
        
        keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
        keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
        keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
        keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
        keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
        keyV = game.input.keyboard.addKey(Phaser.Keyboard.V);
        keyP = game.input.keyboard.addKey(Phaser.Keyboard.P);
        keyK = game.input.keyboard.addKey(Phaser.Keyboard.K);
        keyL = game.input.keyboard.addKey(Phaser.Keyboard.L);
        keyJ = game.input.keyboard.addKey(Phaser.Keyboard.J);
        keyQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        keyE = game.input.keyboard.addKey(Phaser.Keyboard.E);
        keyC = game.input.keyboard.addKey(Phaser.Keyboard.C);
        keyB = game.input.keyboard.addKey(Phaser.Keyboard.B);
        
        game.stage.backgroundColor = 0xffffff;


        this.emitter = game.add.emitter(0, 0, 15);
        this.emitter.makeParticles('pixel');
        this.emitter.setYSpeed(-150, 150);
        this.emitter.setXSpeed(-150, 150);
        this.emitter.setScale(2, 0, 2, 0, 800);
        this.emitter.gravity = 0;
        this.emitter2 = game.add.emitter(0, 0, 15);
        this.emitter2.makeParticles('pixel2');
        this.emitter2.setYSpeed(-150, 150);
        this.emitter2.setXSpeed(-150, 150);
        this.emitter2.setScale(2, 0, 2, 0, 800);
        this.emitter2.gravity = 0;

        currentGunp1=1;
        currentGun=1;

        this.nextLabel = game.add.text(1200, 380, 'Next \nLEVEL', { font: '30px Permanent Marker', fill: '#CD0000'});
        this.nextLabel.anchor.setTo(0.5, 0.5);
        //game.add.tween(this.nextLabel).to({x: 920}, 1000).easing(Phaser.Easing.Exponential.Out).start();
        game.add.tween(this.nextLabel).to({angle: -2}, 200).to({angle: 2}, 400).to({angle: 0}, 200).loop().start();
        this.nextLabel.visible = false;
        this.nextdoor = game.add.sprite(1005, 380, "doorright");
        this.nextdoor.anchor.setTo(0.5, 0.5);
        this.nextdoor.animations.add('doright', [0, 0, 0, 1, 2, 3, 2, 1, 0], 10, true);
        this.nextdoor.visible = false;
        this.nextdoor.animations.play('doright');

        this.backLabel = game.add.text(-120, 380, 'Prev \nLEVEL', { font: '30px Permanent Marker', fill: '#CD0000'});
        this.backLabel.anchor.setTo(0.5, 0.5);
        //game.add.tween(this.backLabel).to({x: 180}, 1000).easing(Phaser.Easing.Exponential.Out).start();
        game.add.tween(this.backLabel).to({angle: -2}, 200).to({angle: 2}, 400).to({angle: 0}, 200).loop().start();
        this.backLabel.visible = false;
        this.leftdoor = game.add.sprite(75, 380, "doorleft");
        this.leftdoor.anchor.setTo(0.5, 0.5);
        this.leftdoor.animations.add('doleft', [0, 0, 0, 1, 2, 3, 2, 1, 0], 10, true);
        this.leftdoor.visible = false;
        this.leftdoor.animations.play('doleft');

        this.selectLabel = game.add.text(550, -50, 'Select LEVEL', { font: '30px Permanent Marker', fill: '#CD0000'});
        this.selectLabel.anchor.setTo(0.5, 0.5);
        //game.add.tween(this.selectLabel).to({y: 140}, 1000).easing(Phaser.Easing.Exponential.Out).start();
        game.add.tween(this.selectLabel).to({angle: -2}, 200).to({angle: 2}, 400).to({angle: 0}, 200).loop().start();
        this.selectLabel.visible = false;
        this.updoor = game.add.sprite(550, 75, "doorup");
        this.updoor.anchor.setTo(0.5, 0.5);
        this.updoor.animations.add('doup', [0, 0, 0, 1, 2, 3, 2, 1, 0], 10, true);
        this.updoor.visible = false;
        this.updoor.animations.play('doup');

        this.menuLabel = game.add.text(550, 810, 'Back to Menu', { font: '30px Permanent Marker', fill: '#CD0000'});
        this.menuLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(this.menuLabel).to({y: 600}, 1000).easing(Phaser.Easing.Exponential.Out).start();
        game.add.tween(this.menuLabel).to({angle: -2}, 200).to({angle: 2}, 400).to({angle: 0}, 200).loop().start();
        this.menuLabel.visible = false;
        this.downdoor = game.add.sprite(550, 685, "doordown");
        this.downdoor.anchor.setTo(0.5, 0.5);
        this.downdoor.animations.add('dodown', [0, 0, 0, 1, 2, 3, 2, 1, 0], 10, true);
        this.downdoor.visible = false;
        this.downdoor.animations.play('dodown');

        if (!game.device.desktop) {
            this.addMobileInputs();
        }
    },
    
    drawGame: function() {
        if (this.gameState == 0){
            console.log("drawing game phase 0");
            
    }
    

        else if (this.gameState == 1){
            console.log("drawing game phase 1");
                    
            this.start.play();
            this.start.volume = 2;

            helper.canP1Move = true;
            helper.canP2Move = true;
            
            helper.canP1Shoot = true;
            helper.canP2Shoot = true;
            
            helper.canP1SwitchWeapons = true;
            helper.canP2SwitchWeapons = true;
            
            //hi = game.add.sprite(game.world.centerX*4/3, game.world.centerY, "p1Anim1");
            //game.physics.arcade.enable(hi);
            //game.physics.p2.enable(hi);
            //hi.body.collideWorldBounds = true;
            //hi.frame = 1;
            //hi.scale.x = .3;
            //hi.scale.y = .3;
            //hi.anchor.setTo(0.5);
            //hi.animations.add('walkP1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
            //hi.animations.add('up', [12, 13, 14, 15], 10, true);
           // hi.animations.add('down', [0, 1, 2, 3], 10, true);
            //hi.animations.add('left', [4, 5, 6, 7], 10, true);
            //hi.animations.add('right', [8, 9, 10, 11], 10, true);
/*
            gunP1Stuff.gun1P1 = game.add.sprite(-25 + hi.body.width/2, -75, "pistolIMG");
            game.physics.arcade.enable(gunP1Stuff.gun1P1);
    //        gunP1Stuff.gun1P1.body.collideWorldBounds = true;
            gunP1Stuff.gun1P1.scale.x = .3;
            gunP1Stuff.gun1P1.scale.y = .3;
            gunP1Stuff.gun1P1.anchor.setTo(.5);
            gunP1Stuff.gun1P1.angle = 0;
            hi.addChild(gunP1Stuff.gun1P1);
            gunP1Stuff.gun1P1.nextFire = 0;
            gunP1Stuff.gun1P1.fireRate = 300;
            gunP1Stuff.gun1P1.fireRateP1 = 300;
            gunP1Stuff.fireRateP1 = 300;
            gunP1Stuff.weaponInaccuracy = 100;
            gunP1Stuff.currentGunP1  = 1;
            gunP1Stuff.currentGunNumP1 = 1;
   */         
            //hiFacingDirection = 1;
            
            //p1healthBarRed = game.add.sprite (game.world.centerX*4/3 - 10, game.world.centerY-30, "healthBarRedIMG");
            //p1healthBarRed.scale.y = 0.06;
            //p1healthBarRed.scale.x = 0.2;
            //p1healthBarRed.anchor.setTo(0.5);
            //game.physics.arcade.enable(p1healthBarRed);
            
           // p1healthBarGreen = game.add.sprite(game.world.centerX*4/3 - 10, game.world.centerY-30, "healthBarGreenIMG")
           // p1healthBarGreen.scale.y = 0.06;
          //  p1healthBarGreen.scale.x = 0.2;
            //p1healthBarGreen.anchor.setTo(0.5);
          //  game.physics.arcade.enable(p1healthBarGreen);


/*
            p2 = game.add.sprite(400, game.world.centerY, "p2Anim1");
            game.physics.arcade.enable(p2);
            // game.physics.p2.enable(p2);
            p2.body.collideWorldBounds = true;
            p2.scale.x = .3;
            p2.scale.y = .3;
            p2.anchor.setTo(0.5);
            //p2.animations.add('walkP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 40, true);
            p2.animations.add('up', [12, 13, 14, 15], 10, true);
            p2.animations.add('down', [0, 1, 2, 3], 10, true);
            p2.animations.add('left', [4, 5, 6, 7], 10, true);
            p2.animations.add('right', [8, 9, 10, 11], 10, true);

            
            p2FacingDirection = 1;
            
            p2healthBarRed = game.add.sprite(400-10, game.world.centerY-30, "healthBarRedIMG");
            p2healthBarRed.scale.y = 0.06;
            p2healthBarRed.scale.x = 0.2;
            //p2healthBarRed.anchor.setTo(0.5);
            game.physics.arcade.enable(p2healthBarRed);
            
            p2healthBarGreen = game.add.sprite(400-10, game.world.centerY-30, "healthBarGreenIMG")
            p2healthBarGreen.scale.y = 0.06;
            p2healthBarGreen.scale.x = 0.2;
            //p2healthBarGreen.anchor.setTo(0.5);
            game.physics.arcade.enable(p2healthBarGreen);
    
*/
            this.readyLabel = game.add.text(550, -50, 'READY',
            { font: '50px Permanent Marker', fill: '#ffffff' });
            this.readyLabel.anchor.setTo(0.5, 0.5);
            game.add.tween(this.readyLabel).to({y: 280}, 1000).easing(Phaser.Easing.Exponential.Out).start();
            game.time.events.add(1500,function() {
                this.readyLabel.visible = false;
                this.goLabel = game.add.text(550, 280, 'FIGHT !!',
                { font: '50px Permanent Marker', fill: '#ffffff' });
                this.goLabel.anchor.setTo(0.5, 0.5);
                this.goLabel.alpha = 0;
                game.add.tween(this.goLabel).to({ alpha: 1 }, 100, "Linear", true, 0, -1).yoyo(true, 150).start();
                game.time.events.add(1500,function() {
                    this.goLabel.visible = false;
                    
                }, this);
            }, this);


            //this.p1GunStuffText = game.add.text(1030-150+10, 50, "∞", { font: '28px Arial', fill: '#ffffff' });
            //this.p1GunStuffText.fill = "black";
            // healthTXTP1 = game.add.text(575, 525, 'Health: ' + healthP1, { font: '28px Arial', fill: '#ffffff' });
            // healthTXTP1.fill = "black";

            this.p2GunStuffText = game.add.text(100+180+10, 50, "∞", { font: '28px Arial', fill: '#ffffff' });
            this.p2GunStuffText.fill = "black";
            scoreTXTP2 = game.add.text(850, 50, '' + scoreP2, { font: '35px Viga', fill: '#ffffff' });
            scoreTXTP2.anchor.setTo(0.5, 0.5);
            scoreTXTP2.fill = "black";
            // healthTXTP2 = game.add.text(100, 525, 'Health: ' + healthP2, { font: '28px Arial', fill: '#ffffff' });
            // healthTXTP2.fill = "black";
            p2gun = game.add.sprite(10+190, 10, "pistolpng");
            //p1gun = game.add.sprite(950-150, 10, "pistolpng");
            
            healthP1 = 100;
            healthP2 = 100;
            
            scoreP1 = 0;
            scoreP2 = 0;
            
               // pistolBullets: 25,
            gunP1Stuff.shotgunBullets = 25;
            gunP1Stuff.machineGunBullets = 100;
            gunP1Stuff.rocketBullets = 10;
            gunP1Stuff.bombBullets = 10;

            gunP2Stuff.shotgunBullets = 25;
            gunP2Stuff.machineGunBullets = 100;
            gunP2Stuff.rocketBullets = 10;
            gunP2Stuff.bombBullets = 10;
            
            
            scoreTXTP2.text = "SCORE: " + scoreP2;

            enemySpawnTimer = game.time.events.loop(Phaser.Timer.SECOND, this.spawnNewEnemy, this);

           //enemyTest = game.add.sprite(300, 300, "blood1IMG");
    //        game.physics.p2.enable(enemyTest, false);
            //enemyTest.scale.x = .2;
           // enemyTest.scale.y = .2;
          //  enemyTest.anchor.setTo(.5);
           // enemyTest.kill();
            
            
            if (this.retryButton != null){
                this.retryButton.kill();
            }
            if (this.startButton != null){
                this.startButton.kill();
            }
            
        }
    
        else if (this.gameState == 2){
            console.log("drawing game phase 2");

            
            helper.canP1Move = false;
            helper.canP2Move = false;
            
            helper.canP1Shoot = false;
            helper.canP2Shoot = false;
            
            helper.canP1SwitchWeapons = false;
            helper.canP2SwitchWeapons = false;
            
            //this.p1GunStuffText.kill();
            this.p2GunStuffText.kill();
            
            /*p1Stuff.healthBarRed.kill();
            p1Stuff.healthBarGreen.kill();
            
            p2Stuff.healthBarRed.kill();
            p2Stuff.healthBarGreen.kill();*/
            
            this.lose.play();

            console.log("player 1");
            
            this.enemySpawnLimit = 999999;
            
            if (!this.zombieSounds.zombieSoundP1Num1.isPlaying ){
                  this.zombieSounds.zombieSoundP1Num1.stop();
              } else if (!this.zombieSounds.zombieSoundP1Num2.isPlaying ){
                  this.zombieSounds.zombieSoundP1Num2.stop();
              } else if (this.zombieSounds.zombieSoundP1Num3.isPlaying){
                  this.zombieSounds.zombieSoundP1Num3.stop();
              }

            if (!this.zombieSounds.zombieSoundP2Num1.isPlaying ){
                  this.zombieSounds.zombieSoundP2Num1.stop();
                } else if (!this.zombieSounds.zombieSoundP2Num2.isPlaying ){
                  this.zombieSounds.zombieSoundP2Num2.stop();
                } else if (this.zombieSounds.zombieSoundP2Num3.isPlaying){
                  this.zombieSounds.zombieSoundP2Num3.stop();
                }
            

        }
    },

    
    spawnNewEnemy: function(){
        for (var ToSpawn = 0; ToSpawn < 1; ToSpawn++){
            if (inter%2 == 1){
                if (this.enemySpawnLimit >= enemyTest2ArrayP1.length){
                    inter ++;
                    enemyTest2P1 = game.add.sprite(game.world.randomX + game.width, game.world.randomY + game.height, "zombieAnim3");
                    enemyTest2P1.scale.x = 1;
                    enemyTest2P1.scale.y = 1;
                    enemyTest2P1.anchor.setTo(.5, 0.5);
                    game.physics.arcade.enable(enemyTest2P1);
    
                    enemyTest2P1.isDead = false;
                    enemyTest2P1.hp=10;
    
                    enemyTest2ArrayP1.push(enemyTest2P1);
    
                    //enemyTest2P1.animations.add('walkZombieP1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 40, true);
                    //enemyTest2P1.animations.play("walkZombieP1");

                    enemyTest2P1.animations.add('down', [0, 1, 2, 3], 10, true);
                    enemyTest2P1.animations.add('left', [12, 13, 14, 15], 10, true);
                    enemyTest2P1.animations.add('right', [24, 25, 26, 27], 10, true);
                    enemyTest2P1.animations.add('up', [36, 37, 38, 39], 10, true);
                    enemyTest2P1.animations.add('leftdown', [4, 5, 6, 7], 10, true);
                    enemyTest2P1.animations.add('rightdown', [16, 17, 18, 19], 10, true);
                    enemyTest2P1.animations.add('leftup', [28, 29, 30, 31], 10, true);
                    enemyTest2P1.animations.add('rightup', [40, 41, 42, 43], 10, true);

                    if(enemyTest2P1.body.velocity.x < 0 && Math.abs(enemyTest2P1.body.y-hi.body.y)<40)
                        enemyTest2P1.animations.play("left");
                    else if(enemyTest2P1.body.velocity.x > 0 && Math.abs(enemyTest2P1.body.y-hi.body.y)<40)
                        enemyTest2P1.animations.play("right");
                    else if(enemyTest2P1.body.velocity.y > 0 && Math.abs(enemyTest2P1.body.x-hi.body.x)<40)
                        enemyTest2P1.animations.play("down");
                    else if(enemyTest2P1.body.velocity.y < 0 && Math.abs(enemyTest2P1.body.x-hi.body.x)<40)
                        enemyTest2P1.animations.play("up");
                    else if(enemyTest2P1.body.velocity.x < 0 && enemyTest2P1.body.velocity.y>0)
                        enemyTest2P1.animations.play("leftdown");
                    else if(enemyTest2P1.body.velocity.x > 0 && enemyTest2P1.body.velocity.y>0)
                        enemyTest2P1.animations.play("rightdown");
                        else if(enemyTest2P1.body.velocity.y < 0 && enemyTest2P1.body.velocity.x < 0)
                        enemyTest2P1.animations.play("leftup");
                    else if(enemyTest2P1.body.velocity.y < 0 && enemyTest2P1.body.velocity.x > 0)
                        enemyTest2P1.animations.play("rightup");
                }
            } else {
                if (this.enemySpawnLimit >= enemyTest2ArrayP2.length){
                    enemyTest2P2 = game.add.sprite(game.world.randomX - game.width, game.world.randomY - game.height, "zombieAnim3");
                    enemyTest2P2.scale.x = 1;
                    enemyTest2P2.scale.y = 1;
                    enemyTest2P2.anchor.setTo(.5, 0.5);
                    game.physics.arcade.enable(enemyTest2P2);
    
                    enemyTest2P2.isDead = false;
                    enemyTest2P2.hp=10;
    
                    enemyTest2ArrayP2.push(enemyTest2P2);
                    inter ++;
    
                    //enemyTest2P2.animations.add('walkZombieP2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 40, true);
                    //enemyTest2P2.animations.play("walkZombieP2");

                    enemyTest2P2.animations.add('down', [0, 1, 2, 3], 10, true);
                    enemyTest2P2.animations.add('left', [12, 13, 14, 15], 10, true);
                    enemyTest2P2.animations.add('right', [24, 25, 26, 27], 10, true);
                    enemyTest2P2.animations.add('up', [36, 37, 38, 39], 10, true);
                    enemyTest2P2.animations.add('leftdown', [4, 5, 6, 7], 10, true);
                    enemyTest2P2.animations.add('rightdown', [16, 17, 18, 19], 10, true);
                    enemyTest2P2.animations.add('leftup', [28, 29, 30, 31], 10, true);
                    enemyTest2P2.animations.add('rightup', [40, 41, 42, 43], 10, true);

                    if(enemyTest2P2.body.velocity.x < 0 && Math.abs(enemyTest2P2.body.y-p2.body.y)<40)
                        enemyTest2P2.animations.play("left");
                    else if(enemyTest2P2.body.velocity.x > 0 && Math.abs(enemyTest2P2.body.y-p2.body.y)<40)
                        enemyTest2P2.animations.play("right");
                    else if(enemyTest2P2.body.velocity.y > 0 && Math.abs(enemyTest2P2.body.x-p2.body.x)<40)
                        enemyTest2P2.animations.play("down");
                    else if(enemyTest2P2.body.velocity.y < 0 && Math.abs(enemyTest2P2.body.x-p2.body.x)<40)
                        enemyTest2P2.animations.play("up");
                    else if(enemyTest2P2.body.velocity.x < 0 && enemyTest2P2.body.velocity.y>0)
                        enemyTest2P2.animations.play("leftdown");
                    else if(enemyTest2P2.body.velocity.x > 0 && enemyTest2P2.body.velocity.y>0)
                        enemyTest2P2.animations.play("rightdown");
                    else if(enemyTest2P2.body.velocity.y < 0 && enemyTest2P2.body.velocity.x < 0)
                        enemyTest2P2.animations.play("leftup");
                    else if(enemyTest2P2.body.velocity.y < 0 && enemyTest2P2.body.velocity.x > 0)
                        enemyTest2P2.animations.play("rightup");
                }
            }
            helper.totalEnemySpawned ++;
            // this.enemySpawnLimit ++;
            
        }
        
        this.reDrawEveryThing();

    },
    
    
    bulletHasHitEnemyP1: function(bullet, enemy){
        if(bullet==helper.bullets){
            if(currentGunp1!=3)
            bullet.kill();
        } else
            if(currentGun!=3)
                bullet.kill();

        console.log("hit");
        bullet.kill();

        enemy.isToDel = true;



        if(bullet == helper.bulletsP2 && currentGun == 1){
            enemy.hp--;
            console.log(enemy.hp);
            if(enemy.hp<=0){
                var bloodSpat = game.add.sprite(enemy.body.x,enemy.body.y, "blood");
                bloodSpat.scale.x = .2;
                bloodSpat.scale.y = .2;
                helper.splatArray.push(bloodSpat);
                zombiedead += 1;
                enemy.kill();

                    scoreP2 += 5;
                    scoreTXTP2.text = "SCORE: " + scoreP2;
                    p2Stuff.totalKilledP2 ++;
            }
            bullet.kill();
        }
        


    else if (bullet == helper.bulletsP2 && currentGun == 2){
            once2=1;
            enemy.hp -= 10;
            console.log(enemy.hp);
            
            if(enemy.hp<=0){
                var bloodSpat = game.add.sprite(enemy.body.x,enemy.body.y, "blood");
                bloodSpat.scale.x = .2;
                bloodSpat.scale.y = .2;
                helper.splatArray.push(bloodSpat);
                zombiedead += 1;
                enemy.kill();
                    scoreP2 += 5;
                    scoreTXTP2.text = "SCORE: " + scoreP2;
                    p2Stuff.totalKilledP2 ++;
            }
            bullet.kill();

            gunP2Stuff.explosion = game.add.sprite(enemy.body.x, enemy.body.y, "explosionAnim");
            game.physics.arcade.enable(gunP2Stuff.explosion);
            gunP2Stuff.explosion.scale.x = .25;
            gunP2Stuff.explosion.scale.y = .25;
            gunP2Stuff.explosion.anchor.setTo(0.5);
            gunP2Stuff.explosion.animations.add('explodeAnim', [0, 1, 2, 3, 4, 5, 6], 10, false);
            explosionAnim = gunP2Stuff.explosion.animations.play('explodeAnim');
            explosionAnim.killOnComplete = true;
            
            gunP2Stuff.explosionArrayP2.push(gunP2Stuff.explosion);
            
            this.explosionSound.play();
            //zombiedead += 1;

        }
        else if(bullet == helper.bullets && currentGunp1 == 3){
            console.log("bomb");
            once1=1;
        }
        else if (bullet == helper.bulletsP2 && currentGun == 3){
            console.log("bomb");
            once2=1;
        }
        else if(bullet == helper.bulletsP2 && currentGun == 4){
            enemy.hp -= 2;
            //console.log(enemy.hp);
            if(enemy.hp<=0){
                var bloodSpat = game.add.sprite(enemy.body.x,enemy.body.y, "blood");
                bloodSpat.scale.x = .2;
                bloodSpat.scale.y = .2;
                helper.splatArray.push(bloodSpat);
                zombiedead += 1;
                enemy.kill();
                    scoreP2 += 5;
                    scoreTXTP2.text = "SCORE: " + scoreP2;
                    p2Stuff.totalKilledP2 ++;
            }
            bullet.kill();
            console.log(enemy.hp);
        }

        else if(bullet == helper.bulletsP2 && currentGun == 5){
            enemy.hp -= 4;
            console.log(enemy.hp);
            if(enemy.hp<=0){
                var bloodSpat = game.add.sprite(enemy.body.x,enemy.body.y, "blood");
                bloodSpat.scale.x = .2;
                bloodSpat.scale.y = .2;
                helper.splatArray.push(bloodSpat);
                zombiedead += 1;
                enemy.kill();

                    scoreP2 += 5;
                    scoreTXTP2.text = "SCORE: " + scoreP2;
                    p2Stuff.totalKilledP2 ++;
                
            }
            bullet.kill();
        }

    
        
        this.reDrawEveryThing();

    },
    bullethitlayer: function(bullet, layer){
        //if(currentGun==3) return;
        //if(currentGunp1==3) return;
        bullet.kill();
        
       // this.reDrawEveryThing();
    },

    explosionHasHitEnemy: function(explosion, enemy){

            //scoreP2 += 5;
            //scoreTXTP2.text = "SCORE: " + scoreP2;
            p2Stuff.totalKilledP2 ++;
        enemy.isToDel = true;

        if(currentGun == 2 || currentGunp1 == 2){
            if(once2){
                enemy.hp -= 3;                
            }
            
            once2=0;
            console.log(enemy.hp);
            if(enemy.hp<=0){
                var bloodSpat = game.add.sprite(enemy.body.x,enemy.body.y, "blood");
                bloodSpat.scale.x = .2;
                bloodSpat.scale.y = .2;
                helper.splatArray.push(bloodSpat);
                zombiedead += 1;
                enemy.kill(); 
                    scoreP2 += 5;
                    scoreTXTP2.text = "SCORE: " + scoreP2;
                    p2Stuff.totalKilledP2 ++;
                
            }
        }
        else if(currentGun == 3 || currentGunp1 == 3){

            if(explosion == gunP2Stuff.explosion && once2){
                enemy.hp -= 3;

            }            

            once1=0;
            once2=0;
            console.log(enemy.hp);
            if(enemy.hp<=0){
                var bloodSpat = game.add.sprite(enemy.body.x,enemy.body.y, "blood");
                bloodSpat.scale.x = .2;
                bloodSpat.scale.y = .2;
                helper.splatArray.push(bloodSpat);
                zombiedead += 1;
                enemy.kill();

                    scoreP2 += 5;
                    scoreTXTP2.text = "SCORE: " + scoreP2;
                    p2Stuff.totalKilledP2 ++;
            }
        }
    },
    
    guyHitLayer: function(guy, layer){
        guy.body.x -= guy.body.velocity.x/10;
        guy.body.y -= guy.body.velocity.y/10;
    },

    player1HitEnemy: function(player, enemy){
      // enemy.play("enemyTest2P1AtkAnim");
      this.anim = enemy.animations.add("leftupatk", [8, 21, 8, 11], 10, true);
      this.anim2 = enemy.animations.add("leftdownatk", [22, 11, 22, 20], 10, true);
      this.anim3 = enemy.animations.add("rightupatk", [9, 10, 9, 21], 10, true);
      this.anim4 = enemy.animations.add("rightdownatk", [23, 20, 23, 10], 10, true);

      this.anim5 = enemy.animations.add("leftatk", [11, 8, 22, 11], 10, true);
      this.anim6 = enemy.animations.add("rightatk", [10, 9, 10, 23], 10, true);
      this.anim7 = enemy.animations.add("upatk", [21, 8, 21, 9], 10, true);
      this.anim8 = enemy.animations.add("downatk", [20, 23, 20, 23], 10, true);
      if (!enemy.isRunning) {
          if (player == hi){
            //healthP2 -= 5;
              if (!this.zombieSounds.zombieSoundP1Num1.isPlaying ){
                  this.zombieSounds.zombieSoundP1Num1.play();
              } else if (!this.zombieSounds.zombieSoundP1Num2.isPlaying ){
                  this.zombieSounds.zombieSoundP1Num2.play();
              } else if (this.zombieSounds.zombieSoundP1Num3.isPlaying){
                  this.zombieSounds.zombieSoundP1Num3.play();
              }
        if(enemy.body.velocity.x < 0 && Math.abs(enemy.body.y-hi.body.y)<40)
        enemy.animations.play("leftatk");
        else if(enemy.body.velocity.x > 0 && Math.abs(enemy.body.y-hi.body.y)<40)
        enemy.animations.play("rightatk");
        else if(enemy.body.velocity.y > 0 && Math.abs(enemy.body.x-hi.body.x)<40)
        enemy.animations.play("downatk");
        else if(enemy.body.velocity.y < 0 && Math.abs(enemy.body.x-hi.body.x)<40)
        enemy.animations.play("upatk");
        else if(enemy.body.velocity.x < 0 && enemy.body.velocity.y>0)
            enemy.animations.play("leftdownatk"/*, 20, true*/);
        else if(enemy.body.velocity.x > 0 && enemy.body.velocity.y>0)
            enemy.animations.play("rightdownatk"/*, 20, true*/);
        else if(enemy.body.velocity.y < 0 && enemy.body.velocity.x < 0)
            enemy.animations.play("leftupatk"/*, 20, true*/);
        else if(enemy.body.velocity.y < 0 && enemy.body.velocity.x > 0)
            enemy.animations.play("rightupatk"/*, 20, true*/);
        //enemy.animations.play("leftupatk", 10, false);
        healthP1 -= 1;
        p1Stuff.totalDMGTakenP1 += 1;
        // healthTXTP1.text = "Health: " + healthP1;
        //p1Stuff.healthBarGreen.scale.x = healthP1/p1Stuff.maxHealth;
        p1healthBarGreen.scale.x = (healthP1/p1Stuff.maxHealth) * 0.2;
        enemy.animations.stop();
          } else {
            if (!this.zombieSounds.zombieSoundP2Num1.isPlaying ){
                  this.zombieSounds.zombieSoundP2Num1.play();
                } else if (!this.zombieSounds.zombieSoundP2Num2.isPlaying ){
                  this.zombieSounds.zombieSoundP2Num2.play();
                } else if (this.zombieSounds.zombieSoundP2Num3.isPlaying){
                  this.zombieSounds.zombieSoundP2Num3.play();
                }
        if(enemy.body.velocity.x < 0 && Math.abs(enemy.body.y-p2.body.y)<40)
        enemy.animations.play("leftatk");
        else if(enemy.body.velocity.x > 0 && Math.abs(enemy.body.y-p2.body.y)<40)
        enemy.animations.play("rightatk");
        else if(enemy.body.velocity.y > 0 && Math.abs(enemy.body.x-p2.body.x)<40)
        enemy.animations.play("downatk");
        else if(enemy.body.velocity.y < 0 && Math.abs(enemy.body.x-p2.body.x)<40)
        enemy.animations.play("upatk");
        else if(enemy.body.velocity.x < 0 && enemy.body.velocity.y>0)
            enemy.animations.play("leftdownatk"/*, 20, true*/);
        else if(enemy.body.velocity.x > 0 && enemy.body.velocity.y>0)
            enemy.animations.play("rightdownatk"/*, 20, true*/);
        else if(enemy.body.velocity.y < 0 && enemy.body.velocity.x < 0)
            enemy.animations.play("leftupatk"/*, 20, true*/);
        else if(enemy.body.velocity.y < 0 && enemy.body.velocity.x > 0)
            enemy.animations.play("rightupatk"/*, 20, true*/);
        //enemy.animations.play("leftupatk", 10, false);
        healthP2 -= 1;
              p2Stuff.totalDMGTakenP2 += 1;
              // healthTXTP2.text = "Health: " + healthP2;
              scoreTXTP2.text = "SCORE: " + scoreP2;
              //p2Stuff.healthBarGreen.scale.x = healthP2/p2Stuff.maxHealth;
              p2healthBarGreen.scale.x = (healthP2/p2Stuff.maxHealth) * 0.2;
              enemy.animations.stop();
          }
          
      /*	var fl = new Flagger(enemy);
      	fl.set();	//isRunning=true;
      	setTimeout( new OOCallback(fl,"clear").fcn, 2000 );	//isRunning=false;
          
        //enemyTest2P1.loadTexture("zombieAtkAnim", 0, false);
        //enemy.loadTexture("zombieAtkAnim", 0, false);
       // enemy = game.add.sprite(game.world.randomX + game.width, game.world.randomY + game.height, "zombieAnim");
        anim = enemy.animations.add("leftupatk", [8, 21, 8, 11], 10, true);
        anim2 = enemy.animations.add("leftdownatk", [22, 11, 22, 20], 10, true);
        anim3 = enemy.animations.add("rightupatk", [9, 10, 9, 21], 10, true);
        anim4 = enemy.animations.add("rightdownatk", [23, 20, 23, 10], 10, true);
        if(enemy.body.velocity.x <= 0 && enemy.body.velocity.y>=0)
            enemy.animations.play("leftdownatk", 20, true);
        else if(enemy.body.velocity.x >= 0 && enemy.body.velocity.y>=0)
            enemy.animations.play("rightdownatk", 20, true);
        else if(enemy.body.velocity.y <= 0 && enemy.body.velocity.x <= 0)
            enemy.animations.play("leftupatk", 20, true);
        else if(enemy.body.velocity.y <= 0 && enemy.body.velocity.x >= 0)
            enemy.animations.play("rightupatk", 20, true);
        //enemy.animations.play("leftupatk", 10, false);

        
        enemy.events.onAnimationComplete.add( new OOCallback(fl,"clear").fcn, this );
        enemy.events.onAnimationComplete.add(function(){
  		// 	  console.log("complete");  
  			  if (player == hi){
              healthP1 -= 5;
              p1Stuff.totalDMGTakenP1 += 5;
              // healthTXTP1.text = "Health: " + healthP1;
              scoreTXTP1.text = "Score: " + scoreP1;
              p1Stuff.healthBarGreen.scale.x = healthP1/p1Stuff.maxHealth;
          } else {
              healthP2 -= 5;
              p2Stuff.totalDMGTakenP2 += 5;
              // healthTXTP2.text = "Health: " + healthP2;
              scoreTXTP2.text = "Score: " + scoreP2;
              p2Stuff.healthBarGreen.scale.x = healthP2/p2Stuff.maxHealth;
          }
          //enemy.loadTexture("zombieAnim", 0);
          //enemy.animations.add('walkZombieP2');
          enemy.animations.play("leftdown", 20, true);

  		  }, this);*/
      }//if
      else{
        enemy.animations.play("leftdown", 20, true);
      }
      
		  
    },
    
   
    
    reDrawEveryThing: function(){
        // healthTXTP1.bringToTop();
       
        // healthTXTP2.bringToTop();
        scoreTXTP2.bringToTop();
        
        //hi.bringToTop();
        p2.bringToTop();
        
        //this.p1GunStuffText.bringToTop();
        this.p2GunStuffText.bringToTop();
        
        p2healthBarRed.bringToTop();
        p2healthBarGreen.bringToTop();

        this.nextdoor.bringToTop();
        this.leftdoor.bringToTop();
        this.updoor.bringToTop();
        this.downdoor.bringToTop();
        
    },
    changeTexture: function() {
        this.weaponSwitchSoundP2.play();
        console.log(currentGunp1);
        if (p2.key === 'p2Anim1'){
            p2.loadTexture('p2Anim2', 0, false);
            currentGun=2;
        }
        else if (p2.key === 'p2Anim2'){
            p2.loadTexture('p2Anim3', 0, false);
            currentGun=3;
        }
        else if (p2.key === 'p2Anim3'){
            p2.loadTexture('p2Anim4', 0, false);
            currentGun=4;
        }
        else if (p2.key === 'p2Anim4'){
            p2.loadTexture('p2Anim5', 0, false);
            currentGun=5;
        }
        else if (p2.key === 'p2Anim5'){
            p2.loadTexture('p2Anim1', 0, false);
            currentGun=1;
        }
        // sprite.smoothed = false;
    },
    changeTexture2: function() {
        this.weaponSwitchSoundP2.play();
        console.log(currentGunp1);
        if (p2.key === 'p2Anim1'){
            p2.loadTexture('p2Anim5', 0, false);
            currentGun=5;
        }
        else if (p2.key === 'p2Anim5'){
            p2.loadTexture('p2Anim4', 0, false);
            currentGun=4;
        }
        else if (p2.key === 'p2Anim4'){
            p2.loadTexture('p2Anim3', 0, false);
            currentGun=3;
        }
        else if (p2.key === 'p2Anim3'){
            p2.loadTexture('p2Anim2', 0, false);
            currentGun=2;
        }
        else if (p2.key === 'p2Anim2'){
            p2.loadTexture('p2Anim1', 0, false);
            currentGun=1;
        }
        // sprite.smoothed = false;
    },
    addMobileInputs: function() {
        // Add the jump button
        this.moveLeft = false;
        this.moveRight = false;

        this.moveup = false;
        this.movedown = false;

        this.chleft = false;
        this.chright = false;

        this.shot = false;

        var lef = game.add.sprite(685, 515, 'chleft');
        lef.inputEnabled = true;
        lef.alpha = 0.5;
        lef.scale.x = 0.4;
        lef.scale.y = 0.4;

        var rig = game.add.sprite(900, 515, 'chright');
        rig.inputEnabled = true;
        rig.alpha = 0.5;
        rig.scale.x = 0.4;
        rig.scale.y = 0.4;

        lef.events.onInputDown.add(this.changeleft, this);
        rig.events.onInputDown.add(this.changeright, this);
        lef.events.onInputUp.add(this.changeleftf, this);
        rig.events.onInputUp.add(this.changerightf, this);

        var shoot = game.add.sprite(750, 500, 'shoot');
        shoot.inputEnabled = true;
        shoot.alpha = 0.5;
        shoot.scale.x = 0.4;
        shoot.scale.y = 0.4;
        shoot.events.onInputDown.add(this.shoott, this);
        shoot.events.onInputUp.add(this.shoottf, this);

        var jumpButton = game.add.sprite(200, 400, 'keyup');
        jumpButton.inputEnabled = true;
        jumpButton.alpha = 0.5;
        jumpButton.scale.x = 0.4;
        jumpButton.scale.y = 0.4;

        jumpButton.events.onInputOver.add(this.setupTrue, this);
        jumpButton.events.onInputOut.add(this.setupFalse, this);
        jumpButton.events.onInputDown.add(this.setupTrue, this);
        jumpButton.events.onInputUp.add(this.setupFalse, this);

        var downButton = game.add.sprite(200, 600, 'keydown');
        downButton.inputEnabled = true;
        downButton.alpha = 0.5;

        downButton.scale.x = 0.4;
        downButton.scale.y = 0.4;

        downButton.events.onInputOver.add(this.setdownTrue, this);
        downButton.events.onInputOut.add(this.setdownFalse, this);
        downButton.events.onInputDown.add(this.setdownTrue, this);
        downButton.events.onInputUp.add(this.setdownFalse, this);
        // Add the move left button
        var leftButton = game.add.sprite(100, 500, 'keyleft');
        leftButton.inputEnabled = true;
        leftButton.alpha = 0.5;

        leftButton.scale.x = 0.4;
        leftButton.scale.y = 0.4;

        leftButton.events.onInputOver.add(this.setLeftTrue, this);
leftButton.events.onInputOut.add(this.setLeftFalse, this);
leftButton.events.onInputDown.add(this.setLeftTrue, this);
leftButton.events.onInputUp.add(this.setLeftFalse, this);
        // Add the move right button
        var rightButton = game.add.sprite(300, 500, 'keyright');
        rightButton.inputEnabled = true;
        rightButton.alpha = 0.5;
        rightButton.scale.x = 0.4;
        rightButton.scale.y = 0.4;
        rightButton.events.onInputOver.add(this.setRightTrue, this);
rightButton.events.onInputOut.add(this.setRightFalse, this);
rightButton.events.onInputDown.add(this.setRightTrue, this);
rightButton.events.onInputUp.add(this.setRightFalse, this);
      },

        setLeftTrue: function() { this.moveLeft = true; },
        setLeftFalse: function() { this.moveLeft = false; },
        setRightTrue: function() { this.moveRight = true; },
        setRightFalse: function() { this.moveRight = false; },
        setupTrue: function() { this.moveup = true; },
        setupFalse: function() { this.moveup = false; },
        setdownTrue: function() { this.movedown = true; },
        setdownFalse: function() { this.movedown = false; },
        changeleft: function() {
             this.chleft = true; 
        },
        changeright: function() {
            this.chright = true; 
       },
       changeleftf: function() {
        this.chleft = false; 
   },
   changerightf: function() {
       this.chright = false; 
  },
  shoott: function() {
    this.shot = true; 
},
shoottf: function() {
    this.shot = false; 
},

    update: function() {

        if (this.gameState == 0){
//            this.drawGame();
//            if (keyE.isDown){
//                this.gameState = 1;
//                this.drawGame();
//            }
        }
        
        if (this.gameState == 1){
//            if (keyP.isDown){
//                paused = !paused;
//            }

            if (!paused){
//                this.drawGame();
                //game.physics.arcade.enable(enemyTest);

               // hi.body.velocity.x = 0;
               // hi.body.velocity.y = 0;

                p2.body.velocity.x = 0;
                p2.body.velocity.y = 0;

                /*p1healthBarRed.body.velocity.x = 0;
                p1healthBarRed.body.velocity.y = 0;
                p1healthBarGreen.body.velocity.x = 0;
                p1healthBarGreen.body.velocity.y = 0;

                p2healthBarRed.body.velocity.x = 0;
                p2healthBarRed.body.velocity.y = 0;
                p2healthBarGreen.body.velocity.x = 0;
                p2healthBarGreen.body.velocity.y = 0;*/



                p2healthBarRed.body.x = p2.body.x - 10;
                p2healthBarRed.body.y = p2.body.y - 30;
                p2healthBarGreen.body.x = p2.body.x - 10;
                p2healthBarGreen.body.y = p2.body.y - 30;
                
                
                if (this.mainMenuScreen != null){
                    this.mainMenuScreen.kill();
                }
                
                /*if (this.deadScreen != null){
                    this.deadScreen.kill();
                }*/

                //controls

     
                if (keyW.isDown|| this.moveup){
                    p2.body.velocity.y = - 200;
                    //p2healthBarRed.body.velocity.y = -200;
                    //p2healthBarGreen.body.velocity.y = -300;
 
                    p2FacingDirection = 0;
                    console.log("player 2 moved up");
                    p2.animations.play('up');
                    //p2.angle = 0;
//                    this.walkingSound.play();
                } else if (keyS.isDown || this.movedown){
                    p2.body.velocity.y = 200;
                    //p2healthBarRed.body.velocity.y = 300;
                    //p2healthBarGreen.body.velocity.y = 300;

                    p2FacingDirection = 1;
                    p2.animations.play('down');
                    //p2.angle = 180;
//                    this.walkingSound.play();
                } else if (keyD.isDown || this.moveRight){
                    p2.body.velocity.x = 200;
                    //p2healthBarRed.body.velocity.x = 300;
                    //p2healthBarGreen.body.velocity.x = 300;

                    p2FacingDirection = 2;
                    p2.animations.play('right');
                    //p2.angle = 90;
//                    this.walkingSound.play();
                } else if (keyA.isDown || this.moveLeft){
                    p2.body.velocity.x = - 200;
                    //p2healthBarRed.body.velocity.x = -300;
                    //p2healthBarGreen.body.velocity.x = -300;

                    p2FacingDirection = 3;
                    p2.animations.play('left');
                    //p2.angle = 270;
//                    this.walkingSound.play();
                } else {
                    p2.body.velocity.x = 0;
                    p2.body.velocity.y = 0;
                    //p2healthBarRed.body.velocity.x = 0;
                    //p2healthBarGreen.body.velocity.x = 0;
                    //p2healthBarRed.body.velocity.y = 0;
                    //p2healthBarGreen.body.velocity.y = 0;
                    p2.animations.stop();
                    if(p2FacingDirection==0)
                        p2.frame = 12;
                    else if(p2FacingDirection==1)
                        p2.frame = 0;
                    else if(p2FacingDirection==2)
                        p2.frame = 8
                    else if(p2FacingDirection==3)
                        p2.frame = 4;
                }
                
               
                if (keyV.isDown || this.shot){
                    once2=1;
                    if(currentGun==1){
                        currentRate=fireratep2[0];
                        bulletSpawn=1;
                    }   
                    else if(currentGun==2){
                        currentRate=fireratep2[1];
                        bulletSpawn=1;
                    }
                    else if(currentGun==3){
                        currentRate=fireratep2[2];
                        bulletSpawn=1;
                    }                     
                    else if(currentGun==4){
                        currentRate=fireratep2[3];
                        bulletSpawn=1;
                    }                       
                    else if(currentGun==5){
                        currentRate=fireratep2[4];
                        bulletSpawn=5;
                        weaponAccuracy=1000;
                    }
                        


                        


                  if (currentGun == 5 && Math.floor(gunP2Stuff.shotgunBullets) <= 0){
                    //play empty gun sound
                    this.dryFireGunSound.play();
                    console.log(gunP2Stuff.currentGunNumP1 + " is out of bullets!");
                  } else if (currentGun == 4 && gunP2Stuff.machineGunBullets <= 0){
                      this.dryFireGunSound.play();
                    //play empty gun sound
                    console.log(gunP2Stuff.currentGunNumP2 + " is out of bullets!");
                  } else if (currentGun == 2 && gunP2Stuff.rocketBullets <= 0){
                     //play empty gun sound
                     this.dryFireGunSound.play();
                    console.log(gunP2Stuff.currentGunNumP1 + " is out of bullets!");
                  } else if(currentGun == 3 && gunP2Stuff.bombBullets <= 0){
                    this.dryFireGunSound.play();
                  } else {
                    //helper.bulletsP2.visible=true;
                    if (game.time.time > nextfirep2){
                        for (var w = 0; w < bulletSpawn; w++){
                            
                            if(currentGun==3){
                                bulletSpawnX = p2.body.x;
                                bulletSpawnY = p2.body.y;
                            } else {
                                if (p2FacingDirection == 0){
                                    bulletSpawnX = p2.body.x + p2.body.width - 10;
                                    bulletSpawnY = p2.body.y;
                                } else if (p2FacingDirection == 1 ){
                                    bulletSpawnX = p2.body.x + 10;
                                    bulletSpawnY = p2.body.y + p2.body.width;
                                } else if (p2FacingDirection == 2 ){
                                    if(currentGun==2)
                                        bulletSpawnX = p2.body.x + p2.body.width + 50;
                                    else
                                        bulletSpawnX = p2.body.x + p2.body.width + 10;
                                    bulletSpawnY = p2.body.y + p2.body.width - 22;
                                } else if (p2FacingDirection == 3 ){
                                    bulletSpawnX = p2.body.x - 10;
                                    bulletSpawnY = p2.body.y + 19;
                                }
                            }

                            
                            if(currentGun==2)
                               helper.bulletsP2 = game.add.sprite(bulletSpawnX , bulletSpawnY , "shotgunIMG");
                            else if(currentGun==3)
                                helper.bulletsP2 = game.add.sprite(bulletSpawnX , bulletSpawnY , "bomb");
                            else
                                helper.bulletsP2 = game.add.sprite(bulletSpawnX , bulletSpawnY , "bulletIMG");

                            game.physics.arcade.enable(helper.bulletsP2);
                            
                            
                           if (currentGun == 2){
                              console.log("current gun is rocket");
                              helper.bulletsP2.scale.x = 0.1;
                              helper.bulletsP2.scale.y = 0.2;
                            } else if(currentGun == 3){
                                helper.bulletsP2.scale.x = 0.15;
                                helper.bulletsP2.scale.y = 0.15;
                            } else {
                              helper.bulletsP2.scale.x = .02;
                              helper.bulletsP2.scale.y = .04;
                            }
                            

                            helper.bulletsP2.outOfBoundsKill = true;
                            helper.bulletArrayP1.push(helper.bulletsP2);
// 0 up 1 down 2 right 3 left

                            if(currentGun==3){
                                helper.bulletsP2.body.velocity.x=0;
                                helper.bulletsP2.body.velocity.y=0;
                            } else {
                                if (p2FacingDirection == 0){
                                    helper.bulletsP2.body.velocity.y = -2000;
                                    helper.bulletsP2.body.velocity.x = weaponAccuracy*(Math.random() - 0.5);
                                    helper.bulletsP2.angle = 0;
                                } else if (p2FacingDirection == 1 ){
                                    helper.bulletsP2.body.velocity.y = 2000;
                                    helper.bulletsP2.body.velocity.x = weaponAccuracy*(Math.random() - 0.5);
                                    helper.bulletsP2.angle = 180;
                                } else if (p2FacingDirection == 2 ){
                                    helper.bulletsP2.body.velocity.x = 2000;
                                    helper.bulletsP2.body.velocity.y = weaponAccuracy*(Math.random() - 0.5);
                                    helper.bulletsP2.angle = 90;
                                } else if (p2FacingDirection == 3 ){
                                    helper.bulletsP2.body.velocity.x = -2000;
                                    helper.bulletsP2.body.velocity.y = weaponAccuracy*(Math.random() - 0.5);
                                    helper.bulletsP2.angle = 270;
                                }
                            }

                            
                            if (currentGun == 1 ){
                              this.p2GunStuffText.text = "∞";
                              this.pistolSound.play();
                            } else if (currentGun == 2){
                                this.rocketLaunchSound.play();
                              
                              //gunP2Stuff.rocketBullets --;
                              this.p2GunStuffText.text = "∞";
                            } else if (currentGun == 3){
                              //this.machineGunSound.play();
                              this.buttonSound.play();

                                bombExplosionp2(helper.bulletsP2, this.explosionSound);
                              //gunP2Stuff.bombBullets --;
                              this.p2GunStuffText.text = "∞";
                            } else if (currentGun == 4){
                              this.machineGunSound.play();
                              //gunP2Stuff.machineGunBullets --;
                              this.p2GunStuffText.text = "∞";
                            } else if (currentGun == 5){
                              this.shotgunSound.play();
                              //gunP2Stuff.shotgunBullets -= 0.2;
                              this.p2GunStuffText.text = "∞";
                            }
                            
                            if (i <= 0) {
                              if ( (hiFacingDirection == 0)||(hiFacingDirection == 1) ){
                                helper.bulletsP2.body.velocity.x = weaponAccuracy*(Math.random() - 0.5);
                              } else {
                                helper.bulletsP2.body.velocity.y = weaponAccuracy*(Math.random() - 0.5);
                              }
                            }
                            

                            
                            // if ((w > 0) && ((p2FacingDirection == 0)||(p2FacingDirection == 1))) {
                            //     helper.bulletsP2.body.velocity.x = weaponAccuracy*(Math.random()- 0.5);

                            // } 
                            // else if ((w > 0) && ((p2FacingDirection == 3)||(p2FacingDirection == 2))) {
                            //     helper.bulletsP2.body.velocity.x = weaponAccuracy*(Math.random()- 0.5);
                            // }
                        }

                        if (w <= 0) {
                            if ( (p2FacingDirection == 0)||(p2FacingDirection == 1) ){
                                console.log("dfsafa");
                              helper.bulletsP2.body.velocity.x = weaponAccuracy*(Math.random() - 0.5);
                            }
                            else if ((p2FacingDirection == 3)||(p2FacingDirection == 2)) {
                              helper.bulletsP2.body.velocity.y = weaponAccuracy*(Math.random() - 0.5);
                            }
                        }
                        
                        nextfirep2 = game.time.time + currentRate;
                    }
                    
                  }
                 
                }

                if (keyB.isDown || this.chright){     
                    if(currentGun==1){
                        p2gun.loadTexture('pistolpng'); 
                        this.p2GunStuffText.text = "∞";
                    } else if(currentGun==2){
                        p2gun.loadTexture('rocketpng');
                        this.p2GunStuffText.text = "∞";
                    } else if(currentGun==3) {
                        p2gun.loadTexture('bombpng'); 
                        this.p2GunStuffText.text = "∞";
                    } else if(currentGun==4) {
                        p2gun.loadTexture('machinegunpng');  
                        this.p2GunStuffText.text = "∞";
                    } else if(currentGun==5) {
                        p2gun.loadTexture('shotgunpng');  
                        this.p2GunStuffText.text = "∞";
                    }                                  
                    if (game.time.time > nextfirep2){  
                        //this.weaponSwitchSoundP2.play();
                        this.changeTexture();
                        //changeBullet();
                        nextfirep2 = game.time.time + fireratep2[0];
                    }
                }
                
                if (keyC.isDown || this.chleft){
                    if(currentGun==1){
                        p2gun.loadTexture('pistolpng'); 
                        this.p2GunStuffText.text = "∞";
                    } else if(currentGun==2){
                        p2gun.loadTexture('rocketpng');
                        this.p2GunStuffText.text = "∞";
                    } else if(currentGun==3) {
                        p2gun.loadTexture('bombpng'); 
                        this.p2GunStuffText.text = "∞";
                    } else if(currentGun==4) {
                        p2gun.loadTexture('machinegunpng');  
                        this.p2GunStuffText.text = "∞";
                    } else if(currentGun==5) {
                        p2gun.loadTexture('shotgunpng');  
                        this.p2GunStuffText.text = "∞";
                    }      
                    if (game.time.time > nextfirep2){  
                        //this.weaponSwitchSoundP2.play();
                        this.changeTexture2();
                        //changeBullet();
                        nextfirep2 = game.time.time + fireratep2[0];
                    }
                  
                }

                //collide players
                //game.physics.arcade.collide(hi, p2, null, null, this);
                //game.physics.arcade.collide(hi, p2, null, null, this);

               // game.physics.arcade.collide(hi, this.layer);
                game.physics.arcade.collide(p2, this.layer);



                game.physics.arcade.collide(enemyTest2ArrayP1, this.layer, null, null, this);
                game.physics.arcade.collide(enemyTest2ArrayP2, this.layer, null, null, this);

                //game.physics.arcade.collide(helper.bulletsP2, this.layer, this.bullethitlayer ,null, this);
                //game.physics.arcade.collide(helper.bullets, this.layer,  this.bullethitlayer, null, this);
                //game.physics.arcade.collide(p2, enemyTest2ArrayP2, this.player1HitEnemy, null, this);
                //game.physics.arcade.overlap(helper.bulletsP2, this.layer, this.bullethitlayer ,null, this);
                //game.physics.arcade.overlap(helper.bullets, this.layer,  this.bullethitlayer, null, this);
     
                //collide p1 with enemy
                //game.physics.arcade.collide(hi, enemyTest, this.player1HitEnemy, null, this);
                //collide p2 with enemy
                //game.physics.arcade.collide(p2, enemyTest, this.player1HitEnemy, null, this);

                //move enemy to p1
               // enemyTest.game.physics.arcade.moveToObject(enemyTest, hi, 50);

                //this.boss.game.physics.arcade.moveToObject(this.boss, hi, 50);


                for (var i=0; (i < 20) && (helper.splatArray.length > 100); i++) {
                    helper.splatArray.shift().kill();
                }
                
                for (var i=0; (i < 20) && (helper.bulletArrayP1.length > 50); i++) {
                    helper.bulletArrayP1.shift().kill();
                }
                
                for (var i=0; (i < 20) && (helper.bulletArrayP2.length > 50); i++) {
                    helper.bulletArrayP2.shift().kill();
                }

                if (gunP1Stuff.explosionArray.length > 3){
                    var toKill = gunP1Stuff.explosionArray.shift();
                    toKill.kill();
                }

                enemyCollider1.check(enemyTest2ArrayP1, function(a, b){
                    game.physics.arcade.collide(a, b, null, null, this);
                } )

                enemyCollider1.check(enemyTest2ArrayP2, function(a, b){
                    game.physics.arcade.collide(a, b, null, null, this);
                } )


                
                
                for (var i = enemyTest2ArrayP1.length - 1; i >= 0 ; i--){
                    if (!enemyTest2ArrayP1[i].isDead){
                        // console.log("Checker is " + checker);
                        // console.log("I is " + i);
                        enemyTest2ArrayP1[i].bringToTop();
                        
                        //var angleToRotate = (game.physics.arcade.angleBetween(enemyTest2ArrayP1[i], hi) + 90);
                        //enemyTest2ArrayP1[i].rotation = angleToRotate;
                        // game.physics.arcade.velocityFromAngle(angleToRotate, 50, hi);
                        enemyTest2ArrayP1[i].game.physics.arcade.moveToObject(enemyTest2ArrayP1[i], p2, 100);
                        game.physics.arcade.collide(enemyTest2ArrayP1[i], this.layer);
                        

                        if(enemyTest2ArrayP1[i].body.velocity.x < 0 && Math.abs(enemyTest2ArrayP1[i].body.y-p2.body.y)<40)
                            enemyTest2ArrayP1[i].animations.play("left");
                        else if(enemyTest2ArrayP1[i].body.velocity.x > 0 && Math.abs(enemyTest2ArrayP1[i].body.y-p2.body.y)<40)
                            enemyTest2ArrayP1[i].animations.play("right");
                        else if(enemyTest2ArrayP1[i].body.velocity.y > 0 && Math.abs(enemyTest2ArrayP1[i].body.x-p2.body.x)<40)
                            enemyTest2ArrayP1[i].animations.play("down");
                        else if(enemyTest2ArrayP1[i].body.velocity.y < 0 && Math.abs(enemyTest2ArrayP1[i].body.x-p2.body.x)<40)
                            enemyTest2ArrayP1[i].animations.play("up");
                        else if(enemyTest2ArrayP1[i].body.velocity.x < 0 && enemyTest2ArrayP1[i].body.velocity.y>0)
                            enemyTest2ArrayP1[i].animations.play("leftdown");
                        else if(enemyTest2ArrayP1[i].body.velocity.x > 0 && enemyTest2ArrayP1[i].body.velocity.y>0)
                            enemyTest2ArrayP1[i].animations.play("rightdown");
                        else if(enemyTest2ArrayP1[i].body.velocity.y < 0 && enemyTest2ArrayP1[i].body.velocity.x < 0)
                            enemyTest2ArrayP1[i].animations.play("leftup");
                        else if(enemyTest2ArrayP1[i].body.velocity.y < 0 && enemyTest2ArrayP1[i].body.velocity.x > 0)
                            enemyTest2ArrayP1[i].animations.play("rightup");
                        
                        game.physics.arcade.collide(hi, enemyTest2ArrayP1[i], this.player1HitEnemy, null, this);
                        game.physics.arcade.collide(p2, enemyTest2ArrayP1[i], this.player1HitEnemy, null, this);

                        game.physics.arcade.collide(helper.bulletsP2, enemyTest2ArrayP1[i], this.bulletHasHitEnemyP1, null, this);
                        game.physics.arcade.collide(helper.bullets, enemyTest2ArrayP1[i], this.bulletHasHitEnemyP1, null, this);

                        
                        //game.physics.arcade.overlap(helper.bulletsP2, enemyTest2ArrayP1[i], this.bulletHasHitEnemyP1, null, this);
                        //game.physics.arcade.overlap(helper.bullets, enemyTest2ArrayP1[i], this.bulletHasHitEnemyP1, null, this);

                        //gunP1Stuff.explosionArraygame.physics.arcade.overlap(gunP1Stuff.explosion, enemyTest2ArrayP1[i], this.explosionHasHitEnemy, null, this);
                        //game.physics.arcade.overlap(gunP2Stuff.explosion, enemyTest2ArrayP1[i], this.explosionHasHitEnemy, null, this);
                        for(var index = gunP1Stuff.explosionArray.length-1;index>=0;index--){
                            game.physics.arcade.overlap(gunP1Stuff.explosionArray[index], enemyTest2ArrayP1[i], this.explosionHasHitEnemy, null, this);
                        }

                        for(var index = gunP2Stuff.explosionArray.length-1;index>=0;index--){
                            game.physics.arcade.overlap(gunP2Stuff.explosionArray[index], enemyTest2ArrayP1[i], this.explosionHasHitEnemy, null, this);
                        }

                        for(var index = helper.bulletArrayP1.length-1;index>=0;index--){
                            game.physics.arcade.collide(helper.bulletArrayP1[index], enemyTest2ArrayP1[i], this.bulletHasHitEnemyP1, null, this);
                            game.physics.arcade.collide(helper.bulletArrayP1[index], this.layer,  this.bullethitlayer, null, this);
                        }
                        for(var index = helper.bulletArrayP2.length-1;index>=0;index--){
                            game.physics.arcade.collide(helper.bulletArrayP2[index], enemyTest2ArrayP1[i], this.bulletHasHitEnemyP1, null, this);
                            game.physics.arcade.collide(helper.bulletArrayP2[index], this.layer, this.bullethitlayer ,null, this);
                        }

                        for(var index = helper.bulletArrayP1.length-1;index>=0;index--){
                            game.physics.arcade.collide(helper.bulletArrayP1[index], enemyTest2ArrayP2[i], this.bulletHasHitEnemyP1, null, this);
                        }
                        for(var index = helper.bulletArrayP2.length-1;index>=0;index--){
                            game.physics.arcade.collide(helper.bulletArrayP2[index], enemyTest2ArrayP2[i], this.bulletHasHitEnemyP1, null, this);
                        }

                        /*for (var t = 0; t < wallStuff.wallArray.length; t++){
                            game.physics.arcade.collide(enemyTest2ArrayP1[i], wallStuff.wallArray[t], null, null, this);   
                            game.physics.arcade.overlap(enemyTest2ArrayP1[i], wallStuff.wallArray[t], null, null, this);   
                        }*/
                        

/*                    if (bullets != null && enemyTest2ArrayP1[i] != null){
                            this.checkOverlap(bullets, enemyTest2ArrayP1[i] );
                            if(bullets.getBounds().intersects(enemyTest2ArrayP1[i].getBounds())){
                            console.log("michael");
                            }
                        } */
                    } //if
                } //for


                

          
                
                //enemyTest2ArrayP1 = helper.deleteMarkedElements( enemyTest2ArrayP1, "isToDel" );
                
                for (var i = enemyTest2ArrayP2.length - 1; i >= 0; i--){
                    if (!enemyTest2ArrayP2[i].isDead){
                        enemyTest2ArrayP2[i].bringToTop();
                        
                        //var angleToRotate = (game.physics.arcade.angleBetween(enemyTest2ArrayP2[i], p2) + 90);
                        //enemyTest2ArrayP2[i].rotation = angleToRotate;
                        enemyTest2ArrayP2[i].game.physics.arcade.moveToObject(enemyTest2ArrayP2[i], p2, 100);
                        game.physics.arcade.collide(enemyTest2ArrayP2[i], this.layer);

                        if(enemyTest2ArrayP2[i].body.velocity.x < 0 && Math.abs(enemyTest2ArrayP2[i].body.y-p2.body.y)<40)
                            enemyTest2ArrayP2[i].animations.play("left");
                        else if(enemyTest2ArrayP2[i].body.velocity.x > 0 && Math.abs(enemyTest2ArrayP2[i].body.y-p2.body.y)<40)
                            enemyTest2ArrayP2[i].animations.play("right");
                        else if(enemyTest2ArrayP2[i].body.velocity.y > 0 && Math.abs(enemyTest2ArrayP2[i].body.x-p2.body.x)<40)
                            enemyTest2ArrayP2[i].animations.play("down");
                        else if(enemyTest2ArrayP2[i].body.velocity.y < 0 && Math.abs(enemyTest2ArrayP2[i].body.x-p2.body.x)<40)
                            enemyTest2ArrayP2[i].animations.play("up");
                        else if(enemyTest2ArrayP2[i].body.velocity.x < 0 && enemyTest2ArrayP2[i].body.velocity.y>0)
                            enemyTest2ArrayP2[i].animations.play("leftdown");
                        else if(enemyTest2ArrayP2[i].body.velocity.x > 0 && enemyTest2ArrayP2[i].body.velocity.y>0)
                            enemyTest2ArrayP2[i].animations.play("rightdown");
                        else if(enemyTest2ArrayP2[i].body.velocity.y < 0 && enemyTest2ArrayP2[i].body.velocity.x < 0)
                            enemyTest2ArrayP2[i].animations.play("leftup");
                        else if(enemyTest2ArrayP2[i].body.velocity.y < 0 && enemyTest2ArrayP2[i].body.velocity.x > 0)
                            enemyTest2ArrayP2[i].animations.play("rightup");
                        
                      //  game.physics.arcade.collide(hi, enemyTest2ArrayP2[i], this.player1HitEnemy, null, this);
                        game.physics.arcade.collide(p2, enemyTest2ArrayP2[i], this.player1HitEnemy, null, this);

                        game.physics.arcade.collide(helper.bulletsP2, enemyTest2ArrayP2[i], this.bulletHasHitEnemyP1, null, this);
                        game.physics.arcade.collide(helper.bullets, enemyTest2ArrayP2[i], this.bulletHasHitEnemyP1, null, this);

                        //game.physics.arcade.overlap(helper.bulletsP2, enemyTest2ArrayP2[i], this.bulletHasHitEnemyP1, null, this);
                        //game.physics.arcade.overlap(helper.bullets, enemyTest2ArrayP2[i], this.bulletHasHitEnemyP1, null, this);

                        //game.physics.arcade.overlap(gunP1Stuff.explosion, enemyTest2ArrayP2[i], this.explosionHasHitEnemy, null, this);
                        //game.physics.arcade.overlap(gunP2Stuff.explosion, enemyTest2ArrayP2[i], this.explosionHasHitEnemy, null, this);

                        for(var index = gunP1Stuff.explosionArray.length-1;index>=0;index--){
                            game.physics.arcade.overlap(gunP1Stuff.explosionArray[index], enemyTest2ArrayP2[i], this.explosionHasHitEnemy, null, this);
                        }

                        for(var index = gunP2Stuff.explosionArray.length-1;index>=0;index--){
                            game.physics.arcade.overlap(gunP2Stuff.explosionArray[index], enemyTest2ArrayP2[i], this.explosionHasHitEnemy, null, this);
                        }

                        for(var index = helper.bulletArrayP1.length-1;index>=0;index--){
                            game.physics.arcade.collide(helper.bulletArrayP1[index], enemyTest2ArrayP2[i], this.bulletHasHitEnemyP1, null, this);
                        }
                        for(var index = helper.bulletArrayP2.length-1;index>=0;index--){
                            game.physics.arcade.collide(helper.bulletArrayP2[index], enemyTest2ArrayP2[i], this.bulletHasHitEnemyP1, null, this);
                        }

                        /*for (var t = 0; t < wallStuff.wallArray.length; t++){
                            game.physics.arcade.collide(enemyTest2ArrayP2[i], wallStuff.wallArray[t], null, null, this);   
                            game.physics.arcade.overlap(enemyTest2ArrayP2[i], wallStuff.wallArray[t], null, null, this);   
                        }*/
                    }
                } //for 
                
                //enemyTest2ArrayP2 = helper.deleteMarkedElements( enemyTest2ArrayP2, "isToDel" );

                
                if (healthP1 <= 0){
                    console.log("player 1 is dead");
                    this.gameState = 2;
                    this.drawGame();
                }
                
                if (healthP2 <= 0){
                    console.log("player 2 is dead");
                    this.gameState = 2;
                    this.drawGame();
                }
                /*for (var i = enemyTest2ArrayP2.length - 1; i >= 0; i--){
                    if (!enemyTest2ArrayP2[i].isDead){
                        zombiedead = true;
                    }
                }*/


                if(checkdoor == true){
                    if( p2.body.x >= 1030){
                        game.camera.fade('#000000', 1000);
                        game.time.events.add(1000,function() {
                            //hi.kill();
                            p2.kill();



                            p2healthBarRed.kill();
                            p2healthBarGreen.kill();
                            localStorage.setItem('level'+this.level, 'true');
                            game.state.start('game3');
                        }, this);
                    }
                    else if(p2.body.x <= 30){

                        game.camera.fade('#000000', 1000);
                        game.time.events.add(1000,function() {
                           // hi.kill();
                            p2.kill();


                            p2healthBarRed.kill();
                            p2healthBarGreen.kill();
                            localStorage.setItem('level'+this.level, 'true');
                            game.state.start('game');
                        }, this);
                    }
                    else if(p2.body.y >= 710){

                        game.camera.fade('#000000', 1000);
                        game.time.events.add(1000,function() {
                            //hi.kill();
                            p2.kill();


                            p2healthBarRed.kill();
                            p2healthBarGreen.kill();
                            localStorage.setItem('level'+this.level, 'true');
                            game.state.start('menu');
                        }, this);
                    }
                    else if(p2.body.y <= 30){

                        game.camera.fade('#000000', 1000);
                        game.time.events.add(1000,function() {
                           // hi.kill();
                            p2.kill();


                            p2healthBarRed.kill();
                            p2healthBarGreen.kill();
                            localStorage.setItem('level'+this.level, 'true');
                            game.state.start('level');
                        }, this);
                    }
                }

            } else {
    //            pauseTXT = game.add.text(350, 150, 'PAUSED', { font: '28px Arial', fill: '#ffffff' });
    //            pauseTXT.fill = "black";

               // hi.body.velocity.x = 0;
               // hi.body.velocity.y = 0;

                p2.body.velocity.x = 0;
                p2.body.velocity.y = 0;

                /*p2healthBarRed.body.velocity.x = 0;
                p2healthBarGreen.body.velocity.x = 0;
                p2healthBarRed.body.velocity.y = 0;
                p2healthBarGreen.body.velocity.y = 0;

                p1healthBarRed.body.velocity.x = 0;
                p1healthBarGreen.body.velocity.x = 0;
                p1healthBarRed.body.velocity.y = 0;
                p1healthBarGreen.body.velocity.y = 0;*/

                for (var i = 0; i < enemyTest2ArrayP1.length; i++){
                    if (!enemyTest2ArrayP1[i].isDead){
                        enemyTest2ArrayP1[i].body.velocity.x = 0;
                        enemyTest2ArrayP1[i].body.velocity.y = 0;
                        enemyTest2ArrayP1[i].animations.stop();
                    }
                }

                for (var i = 0; i < enemyTest2ArrayP2.length; i++){
                    if (!enemyTest2ArrayP2[i].isDead){
                        enemyTest2ArrayP2[i].body.velocity.x = 0;
                        enemyTest2ArrayP2[i].body.velocity.y = 0;
                        enemyTest2ArrayP2[i].animations.stop();
                    }
                }

                if(enemyTest != null){
                    enemyTest.body.velocity.x = 0;
                    enemyTest.body.velocity.y = 0;
                }

            }
        }
        
        if (this.gameState == 2){
//            this.drawGame();
                
        
         //   hi.kill();
            // healthTXTP1.kill();
            
            p2.kill();

            p2healthBarRed.kill();
            p2healthBarGreen.kill();

            // healthTXTP2.kill();
            scoreTXTP2.kill();
           // this.emitter.x = hi.x;
           // this.emitter.y = hi.y;
            this.emitter.start(true, 800, null, 15);
            this.emitter2.x = p2.x;
            this.emitter2.y = p2.y;
            this.emitter2.start(true, 800, null, 15);
            game.camera.shake(0.02, 800);
            game.camera.fade('#000000', 800);
            //this.camera.shake(0.02, 300);
            this.playerDead();
            

        }
        
    },
    playerDead: function(){
        //game.camera.shake(0.02, 300);
        game.time.events.add(800,function() {
            
            killAndRemoveAllFromArray(enemyTest2ArrayP1);
            killAndRemoveAllFromArray(enemyTest2ArrayP2);
            killAndRemoveAllFromArray(helper.splatArray);
            killAndRemoveAllFromArray(helper.bulletArrayP1);
            killAndRemoveAllFromArray(helper.bulletArrayP1);
            game.state.start('end2');
        }, this);
    },
}
    
function startGame(){
    gameVar.gameState = 1;
    gameVar.drawGame();
    
}

function killAndRemoveAllFromArray (arrayToKill){
   while(arrayToKill.length > 0){
      arrayToKill.pop().kill();
   }
}

/*function killBullet (bullet, array){
    bullet.kill();
}*/

function changeTexture() {
    console.log(currentGunp1);
    if (p2.key === 'p2Anim1'){
        p2.loadTexture('p2Anim2', 0, false);
        currentGun=2;
    }
    else if (p2.key === 'p2Anim2'){
        p2.loadTexture('p2Anim3', 0, false);
        currentGun=3;
    }
    else if (p2.key === 'p2Anim3'){
        p2.loadTexture('p2Anim4', 0, false);
        currentGun=4;
    }
    else if (p2.key === 'p2Anim4'){
        p2.loadTexture('p2Anim5', 0, false);
        currentGun=5;
    }
    else if (p2.key === 'p2Anim5'){
        p2.loadTexture('p2Anim1', 0, false);
        currentGun=1;
    }
    // sprite.smoothed = false;
}

function bombExplosionp2(bomb, sound){
 
        game.time.events.add(2000,function() {
 
        
        bomb.kill();
        gunP2Stuff.explosion = game.add.sprite(bomb.body.x, bomb.body.y, "explosionAnim");
        game.physics.arcade.enable(gunP2Stuff.explosion);
        gunP2Stuff.explosion.scale.x = .25;
        gunP2Stuff.explosion.scale.y = .25;
        gunP2Stuff.explosion.anchor.setTo(0.5);
        gunP2Stuff.explosion.animations.add('explodeAnim', [0, 1, 2, 3, 4, 5, 6], 10, false);
        explosionAnim = gunP2Stuff.explosion.animations.play('explodeAnim');
        explosionAnim.killOnComplete = true;
        
        gunP2Stuff.explosionArray.push(gunP2Stuff.explosion);
        
        sound.play();

    }, this);

}

function bombExplosionp1(bomb, sound){
 
    game.time.events.add(2000,function() {
        
    gunP1Stuff.explosion = game.add.sprite(bomb.body.x, bomb.body.y, "explosionAnim");
    game.physics.arcade.enable(gunP1Stuff.explosion);
    gunP1Stuff.explosion.scale.x = .25;
    gunP1Stuff.explosion.scale.y = .25;
    gunP1Stuff.explosion.anchor.setTo(0.5);
    gunP1Stuff.explosion.animations.add('explodeAnim', [0, 1, 2, 3, 4, 5, 6], 10, false);
    explosionAnim = gunP1Stuff.explosion.animations.play('explodeAnim');
    explosionAnim.killOnComplete = true;
    
    gunP1Stuff.explosionArray.push(gunP1Stuff.explosion);
    
    sound.play();
    bomb.kill();
}, this);

}