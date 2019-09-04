var passState = {
    
    preload:function () {
       
       
   },
   
   create:function () {
    game.add.image(0, 0, 'backwin');
    this.button  = game.add.audio('button');
    this.button2  = game.add.audio('button2');
    this.button4  = game.add.audio('button4');
    this.lastwinb  = game.add.audio('lastwinb');
    this.lastwinb.play();
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

       var nameLabel = game.add.text(game.width/2 - 200, -100, '大吉大利 , 今晚吃雞 ！',
        { font: '50px Nosifer', fill: '#FFFF00' }); 
        nameLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(nameLabel).to({y: 150}, 1000).easing(Phaser.Easing.Exponential.Out).start();

        var a = game.add.text(game.width/2, -50, 'You have Win all Levels !!',
        { font: '60px Cookie', fill: '#ffffff' }); 
        a.anchor.setTo(0.5, 0.5);
        game.add.tween(a).to({y: 300}, 1000).easing(Phaser.Easing.Exponential.Out).start();

        var b = game.add.text(game.width/2, -20, 'Enjoy Yourself......',
        { font: '60px Cookie', fill: '#ffffff' }); 
        b.anchor.setTo(0.5, 0.5);
        game.add.tween(b).to({y: 375}, 1000).easing(Phaser.Easing.Exponential.Out).start();




        this.backLabel = game.add.text(550, 600, 'BACK TO MENU', { font: '35px Luckiest Guy', fill: '#ffffff' });
        this.backLabel.anchor.setTo(0.5, 0.5);
        this.backLabel.inputEnabled = true;
        this.backLabel.input.useHandCursor = true;
        this.backLabel.events.onInputDown.add(down, this);
        this.backLabel.events.onInputOver.add(over, this);
        this.backLabel.events.onInputOut.add(out, this);
        var bKey = game.input.keyboard.addKey(Phaser.Keyboard.B);
        bKey.onDown.add(down, this);

        function out(item){
            item.fill="#ffffff";        
        }
        function over(item)
        {
            this.button.play();
            item.fill = "#CC0000";
        }
        function down (item) {
                this.lastwinb.stop();
                this.button4.play();
                 if(item.text=='BACK TO MENU')game.state.start('menu');
        } 

   },
   
    update:function () {

   }
};