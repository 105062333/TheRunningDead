var selectState = {
    
    preload:function () {
       
       
   },
   
   create:function () {
    game.add.image(0, 0, 'backsel');
    this.button  = game.add.audio('button');
    this.button2  = game.add.audio('button2');
    this.button4  = game.add.audio('button4');
    this.sele  = game.add.audio('sele');

    this.sele.play();

    zombiedead = 0;
       this.keyboard = game.input.keyboard.addKeys({
           'enter': Phaser.Keyboard.ENTER,
           'up': Phaser.Keyboard.UP,
           'down': Phaser.Keyboard.DOWN,
           'left': Phaser.Keyboard.LEFT,
           'right': Phaser.Keyboard.RIGHT,
           'n': Phaser.Keyboard.N,
           'w': Phaser.Keyboard.W,
           'a': Phaser.Keyboard.A,
           's': Phaser.Keyboard.S,
           'd': Phaser.Keyboard.D
       });

       mapnow = 1;
       var nameLabel = game.add.text(game.width/2, -50, 'SELECT THE MAP',
        { font: '60px Nosifer', fill: '#CD0000' }); 
        nameLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(nameLabel).to({y: 120}, 1000).easing(Phaser.Easing.Exponential.Out).start();

        this.map = game.add.image(550, 350, 'map1');
        this.map.scale.x = 0.3;
        this.map.scale.y = 0.3;
        this.map.anchor.setTo(0.5, 0.5);
        this.map.visible = true;

        this.map2 = game.add.image(550, 350, 'map2');
        this.map2.scale.x = 0.3;
        this.map2.scale.y = 0.3;
        this.map2.anchor.setTo(0.5, 0.5);
        this.map2.visible = false;

        this.map3 = game.add.image(550, 350, 'map3');
        this.map3.scale.x = 0.3;
        this.map3.scale.y = 0.3;
        this.map3.anchor.setTo(0.5, 0.5);
        this.map3.visible = false;

        this.map4 = game.add.image(550, 350, 'map4');
        this.map4.scale.x = 0.3;
        this.map4.scale.y = 0.3;
        this.map4.anchor.setTo(0.5, 0.5);
        this.map4.visible = false;

        this.map5 = game.add.image(550, 350, 'map5');
        this.map5.scale.x = 0.3;
        this.map5.scale.y = 0.3;
        this.map5.anchor.setTo(0.5, 0.5);
        this.map5.visible = false;

        this.map6 = game.add.image(550, 350, 'map6');
        this.map6.scale.x = 0.3;
        this.map6.scale.y = 0.3;
        this.map6.anchor.setTo(0.5, 0.5);
        this.map6.visible = false;

        this.map7 = game.add.image(550, 350, 'map7');
        this.map7.scale.x = 0.3;
        this.map7.scale.y = 0.3;
        this.map7.anchor.setTo(0.5, 0.5);
        this.map7.visible = false;

        this.map8 = game.add.image(550, 350, 'map8');
        this.map8.scale.x = 0.3;
        this.map8.scale.y = 0.3;
        this.map8.anchor.setTo(0.5, 0.5);
        this.map8.visible = false;

        this.map9 = game.add.image(550, 350, 'map9');
        this.map9.scale.x = 0.3;
        this.map9.scale.y = 0.3;
        this.map9.anchor.setTo(0.5, 0.5);
        this.map9.visible = false;

        this.map10 = game.add.image(550, 350, 'map10');
        this.map10.scale.x = 0.3;
        this.map10.scale.y = 0.3;
        this.map10.anchor.setTo(0.5, 0.5);
        this.map10.visible = false;

        this.map11 = game.add.image(550, 350, 'map11');
        this.map11.scale.x = 0.3;
        this.map11.scale.y = 0.3;
        this.map11.anchor.setTo(0.5, 0.5);
        this.map11.visible = false;

        this.map12 = game.add.image(550, 350, 'map12');
        this.map12.scale.x = 0.3;
        this.map12.scale.y = 0.3;
        this.map12.anchor.setTo(0.5, 0.5);
        this.map12.visible = false;

        this.map13 = game.add.image(550, 350, 'map13');
        this.map13.scale.x = 0.3;
        this.map13.scale.y = 0.3;
        this.map13.anchor.setTo(0.5, 0.5);
        this.map13.visible = false;

        this.map14 = game.add.image(550, 350, 'map14');
        this.map14.scale.x = 0.3;
        this.map14.scale.y = 0.3;
        this.map14.anchor.setTo(0.5, 0.5);
        this.map14.visible = false;

        this.map15 = game.add.image(550, 350, 'map15');
        this.map15.scale.x = 0.3;
        this.map15.scale.y = 0.3;
        this.map15.anchor.setTo(0.5, 0.5);
        this.map15.visible = false;

        this.map16 = game.add.image(550, 350, 'map16');
        this.map16.scale.x = 0.3;
        this.map16.scale.y = 0.3;
        this.map16.anchor.setTo(0.5, 0.5);
        this.map16.visible = false;

        this.map17 = game.add.image(550, 350, 'map17');
        this.map17.scale.x = 0.3;
        this.map17.scale.y = 0.3;
        this.map17.anchor.setTo(0.5, 0.5);
        this.map17.visible = false;

        this.num = game.add.text(550, 225, mapnow + '', { font: '25px Luckiest Guy', fill: '#ffffff' });
        this.num.anchor.setTo(0.5, 0.5);

        this.next = game.add.text(750, 350, '▷', { font: '50px Luckiest Guy', fill: '#ffffff' });
        this.next.anchor.setTo(0.5, 0.5);
        this.next.inputEnabled = true;
        this.next.input.useHandCursor = true;
        this.next.events.onInputDown.add(down1, this);
        this.next.events.onInputOver.add(over1, this);
        this.next.events.onInputOut.add(out1, this);

        this.prev = game.add.text(350, 350, '◁', { font: '50px Luckiest Guy', fill: '#ffffff' });
        this.prev.anchor.setTo(0.5, 0.5);
        this.prev.inputEnabled = true;
        this.prev.input.useHandCursor = true;
        this.prev.events.onInputDown.add(down1, this);
        this.prev.events.onInputOver.add(over1, this);
        this.prev.events.onInputOut.add(out1, this);

        this.levelLabel = game.add.text(550, 520, 'START GAME', { font: '35px Luckiest Guy', fill: '#ffffff' });
        this.levelLabel.anchor.setTo(0.5, 0.5);
        this.levelLabel.inputEnabled = true;
        this.levelLabel.input.useHandCursor = true;
        this.levelLabel.events.onInputDown.add(down, this);
        this.levelLabel.events.onInputOver.add(over, this);
        this.levelLabel.events.onInputOut.add(out, this);


        this.backLabel = game.add.text(550, 600, 'BACK TO MENU', { font: '35px Luckiest Guy', fill: '#ffffff' });
        this.backLabel.anchor.setTo(0.5, 0.5);
        this.backLabel.inputEnabled = true;
        this.backLabel.input.useHandCursor = true;
        this.backLabel.events.onInputDown.add(down, this);
        this.backLabel.events.onInputOver.add(over, this);
        this.backLabel.events.onInputOut.add(out, this);
        var bKey = game.input.keyboard.addKey(Phaser.Keyboard.B);
        bKey.onDown.add(down, this);

        function out1(item){
            item.fill="#ffffff";        
        }
        function over1(item)
        {
            this.button.play();
            item.fill = "#CC0000";
        }
        function down1 (item) {
                this.button4.play();
                if(item.text=='▷'){
                    mapnow++;
                    if(mapnow >= 18){
                        mapnow = 1;
                    }
                }
                else if(item.text=='◁'){
                    mapnow--;
                    if(mapnow <= 0){
                        mapnow = 17;
                    }
                }
        } 

        function out(item){
            item.fill="#ffffff";        
        }
        function over(item)
        {
            this.button.play();
            item.fill = "#CC0000";
        }
        function down (item) {
            this.sele.stop();
                if(item.text=='START GAME'){
                    this.button2.play();
                    game.camera.fade('#000000', 800);
                    game.time.events.add(800,function() {
                    if(select == 0)
                        game.state.start('single');
                    else if(select == 3)
                        game.state.start('death');
                    }, this);
                }

                else if(item.text=='BACK TO MENU'){
                    this.button4.play();
                    game.state.start('menu');
                }
        } 

   },
   
    update:function () {
        this.num.text = mapnow + '/17';
        if(mapnow==1){
            this.map.visible = true;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 2){
            this.map.visible = false;
            this.map2.visible = true;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 3){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = true;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 4){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = true;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 5){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = true;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 6){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = true;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 7){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = true;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 8){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = true;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 9){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = true;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 10){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = true;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 11){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = true;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 12){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = true;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 13){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = true;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 14){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = true;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 15){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = true;
            this.map16.visible = false;
            this.map17.visible = false;
        }
        else if(mapnow == 16){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = true;
            this.map17.visible = false;
        }
        else if(mapnow == 17){
            this.map.visible = false;
            this.map2.visible = false;
            this.map3.visible = false;
            this.map4.visible = false;
            this.map5.visible = false;
            this.map6.visible = false;
            this.map7.visible = false;
            this.map8.visible = false;
            this.map9.visible = false;
            this.map10.visible = false;
            this.map11.visible = false;
            this.map12.visible = false;
            this.map13.visible = false;
            this.map14.visible = false;
            this.map15.visible = false;
            this.map16.visible = false;
            this.map17.visible = true;
        }
   }
};