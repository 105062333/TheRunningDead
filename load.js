var loadState = {
    preload: function () {
        var loading = game.add.sprite(130, 150, 'loadback');
        var loadingLabel = game.add.text(540, 340,
        'loading...', { font: '50px Creepster', fill: '#CD0000' });
        loadingLabel.anchor.setTo(0.5, 0.5);
        loadingLabel.alpha = 0;
        //game.add.tween(loadingLabel).to({visible: true}, 100).to({visible: false}, 200).to({visible: true}, 100).loop().start();
        var loading_tween = game.add.tween(loadingLabel).to({ alpha: 1 }, 1000, "Linear", true, 0, -1);
        loading_tween.yoyo(true, 1500);
        /*var progressBar = game.add.sprite(540, 350, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);*/


        game.load.image("oakk2", "Assets/oakk2.png");
        game.load.image("rock", "Assets/rock.png");
        game.load.image("grass2", "Assets/grass2.jpg");
        game.load.tilemap('map1', 'Assets/map1.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("123", "Assets/123.png");
        game.load.image("lightSand", "Assets/lightSand.png");
        game.load.tilemap('map2', 'Assets/map2.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("oakk", "Assets/oakk.png");
        game.load.image("grass", "Assets/grass.jpg");
        game.load.tilemap('map3', 'Assets/map3.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("igloo", "Assets/igloo.png");
        game.load.image("snow", "Assets/snow.jpg");
        game.load.tilemap('map4', 'Assets/map4.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("maya", "Assets/maya.png");
        game.load.image("wall", "Assets/wall.png");
        game.load.image("bridge2", "Assets/bridge2.png");
        game.load.image("lightSand2", "Assets/lightSand2.png");
        game.load.tilemap('map5', 'Assets/map5.json', null, Phaser.Tilemap.TILED_JSON);
 
        game.load.tilemap('map6', 'Assets/map6.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("lake", "Assets/lake.png");
        game.load.tilemap('map7', 'Assets/map7.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("1234", "Assets/1234.png");
        game.load.image("4321", "Assets/4321.png");
        game.load.tilemap('map8', 'Assets/map8.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("54321", "Assets/54321.png");
        game.load.image("lightSand3", "Assets/lightSand3.png");
        game.load.tilemap('map9', 'Assets/map9.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("bakery", "Assets/bakery.png");
        game.load.image("casino", "Assets/casino.png");
        game.load.image("candy", "Assets/candy.png");
        game.load.image("cinema", "Assets/cinema.png");
        game.load.image("museum", "Assets/museum.png");
        game.load.image("street2", "Assets/street2.png");
        game.load.tilemap('map10', 'Assets/map10.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.tilemap('map11', 'Assets/map11.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("building", "Assets/building.png");
        game.load.image("building3", "Assets/building3.png");
        game.load.image("parking", "Assets/parking.png");
        game.load.tilemap('map12', 'Assets/map12.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("santa2", "Assets/santa2.png");
        game.load.tilemap('map13', 'Assets/map13.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("tree", "Assets/tree.png");
        game.load.tilemap('map14', 'Assets/map14.json', null, Phaser.Tilemap.TILED_JSON);

        //game.load.image("tree", "Assets/tree.png");
        game.load.tilemap('map15', 'Assets/map15.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("candyhouse", "Assets/candyhouse.png");
        game.load.tilemap('map16', 'Assets/map16.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.image("123", "Assets/123.png");
        game.load.image("321", "Assets/321.png");
        game.load.tilemap('map17', 'Assets/map17.json', null, Phaser.Tilemap.TILED_JSON);

        game.load.atlasJSONHash('image', 'Assets/image.png', 'Assets/image.json');
        game.load.json('data', 'Assets/data.json');
        
        game.load.image("testIMG", 'Assets/ducksOnRollerCoasters.jpeg');
        game.load.image("zombieIMG", "Assets/mikeWazowskiWithTwoEyes.jpeg");
        game.load.image("bulletsIMG", "Assets/peanuts.jpeg");
        game.load.image("player2IMG","Assets/annieHasNoFriendsAcceptForNellyNell.jpeg");

        game.load.image("keyup", "Assets/keyup.png");
        game.load.image("keydown", "Assets/keydown.png");
        game.load.image("keyleft", "Assets/keyleft.png");
        game.load.image("keyright", "Assets/keyright.png");
        game.load.image("shoot", "Assets/shoot.png");
        game.load.image("chright", "Assets/changeright.png");
        game.load.image("chleft", "Assets/changeleft.png");
        
        game.load.image("blood1IMG", "Assets/blood1.png");
        game.load.image("blood2IMG", "Assets/blood2.png");
        game.load.image("blood3IMG", "Assets/blood3.png");
        
        game.load.image("bloodTest1","Assets/bloodSplatTest1.jpg");
        game.load.image("bloodTest2","Assets/bloodSplatTest2.jpg");
        game.load.image("bloodTest3","Assets/bloodSplatTest3.jpg");
        
        game.load.image("blood", "Assets/blood.png");
        game.load.image('treasure', "Assets/treasure.png");

        game.load.image("gunTest1", "Assets/gunTest1.jpg");
        game.load.image("gunTest2", "Assets/gunTest2.jpg");
        
        game.load.image("bulletIMG", "Assets/bullet.png");
        
        game.load.image("pistolIMG", "Assets/pistol.png");
        game.load.image("shotgunIMG", "Assets/shotgun.png");
        game.load.image("machineGunIMG", "Assets/machineGun.png");
        game.load.image("rocketLauncherIMG", "Assets/rocketLauncher.png");
        game.load.image("bomb", "Assets/bomb.png");

        game.load.image("boss_bullet", "Assets/redball.png");
        game.load.image("boss2_bullet", "Assets/blueball.png");
        game.load.image("boss3_bullet", "Assets/purpleball.png");
        game.load.image("boss4_bullet", "Assets/greenball.png");

        
        game.load.image("background", "Assets/back6.jpg");
        game.load.image("backrank", "Assets/back4.jpg");
        game.load.image("mainMenuIMG", "Assets/menu.gif");
        game.load.image("deathScreenIMG", "Assets/deadMenu.png");
        game.load.image("backins", "Assets/back5.jpg");
        game.load.image("backend", "Assets/back8.jpg");
        game.load.image("backpass", "Assets/back7.jpg");
        game.load.image("backwin", "Assets/back3.jpg");
        game.load.image("backsel", "Assets/backsele.jpg");
        game.load.image("fuck", "Assets/fuck.jpg");
        game.load.image("pubg", "Assets/pubg.jpg");
        game.load.image("winn", "Assets/winn.png");
        
        game.load.image("p1Win", "Assets/p1Win.png");
        game.load.image("p2Win", "Assets/p2Win.png");
        
        game.load.image("healthBarRedIMG", "Assets/healthBarRed.jpg");
        game.load.image("healthBarGreenIMG", "Assets/healthBarGreen.jpg");
        
        game.load.image("wallIMG", "Assets/greyBlock.jpg");
        game.load.image('pixel', 'assets/pixel.png');
        game.load.image('pixel2', 'assets/pixel2.png');

        game.load.image("pistolpng", "Assets/pistol1.png");
        game.load.image("rocketpng", "Assets/Rocket1.png");
        game.load.image("bombpng", "Assets/Bomb1.png");
        game.load.image("machinegunpng", "Assets/Machinegun1.png");
        game.load.image("shotgunpng", "Assets/Shotgun1.png");   

        //game.load.image("doorright", "Assets/door.png");
        game.load.image("doorup", "Assets/door1.png");       
        game.load.image("doorleft", "Assets/door2.png");       
        game.load.image("doordown", "Assets/door3.png");
        
        game.load.image("map1", "Assets/map1.png");   
        game.load.image("map2", "Assets/map2.png");   
        game.load.image("map3", "Assets/map3.png");   
        game.load.image("map4", "Assets/map4.png");   
        game.load.image("map5", "Assets/map5.png");   
        game.load.image("map6", "Assets/map6.png");   
        game.load.image("map7", "Assets/map7.png");   
        game.load.image("map8", "Assets/map8.png");   
        game.load.image("map9", "Assets/map9.png");   
        game.load.image("map10", "Assets/map10.png");   
        game.load.image("map11", "Assets/map11.png");   
        game.load.image("map12", "Assets/map12.png");   
        game.load.image("map13", "Assets/map13.png");   
        game.load.image("map14", "Assets/map14.png");   
        game.load.image("map15", "Assets/map15.png");   
        game.load.image("map16", "Assets/map16.png");   
        game.load.image("map17", "Assets/map17.png"); 

       // game.load.spritesheet("p1Anim", "Assets/player1SS.png", 128, 128);
        //game.load.spritesheet("p1Anim", "Assets/white0.png", 120, 180);
        game.load.spritesheet("p1Anim1", "Assets/black1.png", 155, 165.7);
        game.load.spritesheet("p1Anim2", "Assets/black2.png", 175, 176);
        game.load.spritesheet("p1Anim3", "Assets/black3.png", 99.25, 152);
        game.load.spritesheet("p1Anim4", "Assets/black4.png", 146, 158.5);
        game.load.spritesheet("p1Anim5", "Assets/black5.png", 146, 158.5);
        //game.load.spritesheet("p2Anim", "Assets/player2SS.png", 128, 128);
        game.load.spritesheet("p2Anim", "Assets/white0.png", 120, 180);
        game.load.spritesheet("p2Anim1", "Assets/white1.png", 155, 165.7);
        game.load.spritesheet("p2Anim2", "Assets/white2.png", 175, 176);
        game.load.spritesheet("p2Anim3", "Assets/white3.png", 99.25, 152);
        game.load.spritesheet("p2Anim4", "Assets/white4.png", 146, 158.5);
        game.load.spritesheet("p2Anim5", "Assets/white5.png", 146, 158.5);
                
        //game.load.spritesheet("zombieAtkAnim", "Assets/zombieAttack.png", 128, 128);
        game.load.spritesheet("zombieAtkAnim", "Assets/zombie33.png", 64, 64);    
        //game.load.spritesheet("zombieAnim", "Assets/zombieSS.png", 128, 128);
        game.load.spritesheet("zombieAnim", "Assets/zombie0.png", 64, 64);
        game.load.spritesheet("zombieAnim2", "Assets/zombie_type2.png", 64, 64);
        game.load.spritesheet("zombieAnim3", "Assets/zombie_type3.png", 64, 64);

        game.load.spritesheet("boss", "Assets/boss.png", 64, 64);
        game.load.spritesheet("boss2", "Assets/boss_type2.png", 64, 64);
        game.load.spritesheet("boss3", "Assets/boss_type3.png", 64, 64);
        game.load.spritesheet("boss4", "Assets/boss_type4.png", 64, 64);

        game.load.spritesheet("explosionAnim", "Assets/boomSS.png", 400, 400);
        
        game.load.spritesheet("exitButton", "Assets/exitButton.png", 464, 176 );
        game.load.spritesheet("startButton", "Assets/startButton.png", 416, 176 );
        game.load.spritesheet("retryButton", "Assets/retryButton.png", 432, 144);

        game.load.spritesheet("doorright", "Assets/doorright.png", 148, 107);
        game.load.spritesheet("doordown", "Assets/doordown.png", 107, 148);
        game.load.spritesheet("doorup", "Assets/doorup.png", 107, 148);
        game.load.spritesheet("doorleft", "Assets/doorleft.png", 148, 107);

        game.load.spritesheet("box", "Assets/box.png", 128, 135);
    
        game.load.audio('pistolSound', 'Assets/Audio/pistolSound.mp3');
        game.load.audio('explosionSound', 'Assets/Audio/explosionSound.mp3');
        game.load.audio('shotgunSound', 'Assets/Audio/shotGunSound2.mp3');
        game.load.audio('walkingSound', 'Assets/Audio/walkingSound.mp3');
        game.load.audio('zombieSound', 'Assets/Audio/zombieSound.mp3');
        game.load.audio('machineGunSound', 'Assets/Audio/machineGunSound.mp3');
        game.load.audio('rocketLaunchSound', 'Assets/Audio/rocketLaunchSound.mp3');
        game.load.audio("dryFireGunSound", "Assets/Audio/dryFireGun.mp3");
        game.load.audio("footStepsSound", "Assets/Audio/footStepsSound2.mp3");
        game.load.audio("gunClickSound", "Assets/Audio/gunClickSound.mp3");
        game.load.audio("button", "Assets/Audio/button.mp3");
        game.load.audio("button2", "Assets/Audio/button2.mp3");
        game.load.audio("button3", "Assets/Audio/button3.mp3");
        game.load.audio("button4", "Assets/Audio/button4.mp3");
        game.load.audio("boss_ball", "Assets/Audio/boss_ball.mp3");
        game.load.audio("ballhitplayer", "Assets/Audio/ballhitplayer.mp3");
        game.load.audio("receivebox", "Assets/Audio/receivebox.mp3");
        game.load.audio("win", "Assets/Audio/win.mp3");
        game.load.audio("gameover", "Assets/Audio/gameover.mp3");
        game.load.audio("start", "Assets/Audio/start.mp3");
        game.load.audio("instruction", "Assets/Audio/instruction.mp3");
        game.load.audio("98k", "Assets/Audio/98k.mp3");
        game.load.audio("legend", "Assets/Audio/legend.mp3");
        game.load.audio("menu", "Assets/Audio/pubg.mp3");
        game.load.audio("sele", "Assets/Audio/select.mp3");
        game.load.audio("lev", "Assets/Audio/level.mp3");
        game.load.audio("name", "Assets/Audio/name.mp3");
        game.load.audio("lastwin", "Assets/Audio/0.mp3");
        game.load.audio("lastwinb", "Assets/Audio/last.mp3");

    },
    create: function() {
        game.state.start('menu');
    }
}; 