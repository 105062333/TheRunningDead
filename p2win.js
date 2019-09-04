var p2winState = {
    
    preload:function () {
       
       
   },
   
   create:function () {
    game.add.image(0, 0, 'winn');
    this.button  = game.add.audio('button');
    this.button2  = game.add.audio('button2');
    this.button4  = game.add.audio('button4');
   
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

       var nameLabel = game.add.text(game.width/2, -100, 'Player 2',
        { font: '60px Nosifer', fill: '#CD0000' }); 
        nameLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(nameLabel).to({y: 150}, 1000).easing(Phaser.Easing.Exponential.Out).start();

        
        var winLabel = game.add.text(game.width/2, -50, 'WIN',{ font: '70px Nosifer', fill: '#CD0000' }); 
        winLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(winLabel).to({y: 250}, 1000).easing(Phaser.Easing.Exponential.Out).start();



        this.retryLabel = game.add.text(550, 520, 'PLAY AGAIN', { font: '35px Luckiest Guy', fill: '#ffffff' });
        this.retryLabel.anchor.setTo(0.5, 0.5);
        this.retryLabel.inputEnabled = true;
        this.retryLabel.input.useHandCursor = true;
        this.retryLabel.events.onInputDown.add(down, this);
        this.retryLabel.events.onInputOver.add(over, this);
        this.retryLabel.events.onInputOut.add(out, this);

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
            if(item.text=='PLAY AGAIN'){
                this.button2.play();
                if(select == 0)game.state.start('single');
                else if(select == 1){
                    if(currentlevel == 1)
                        game.state.start('game');
                    else if(currentlevel == 2)
                        game.state.start('game2');
                    else if(currentlevel == 3)
                        game.state.start('game3');
                    else if(currentlevel == 4)
                        game.state.start('game4');
                    else if(currentlevel == 5)
                        game.state.start('game5');
                    else if(currentlevel == 6)
                        game.state.start('game6');
                }
                else if(select == 3){
                    game.state.start('death');
                }
            }
            else{
                this.button4.play();
                if(item.text=='SELECT NEW LEVEL')game.state.start('level');
                else if(item.text=='BACK TO MENU')game.state.start('menu');
            } 
        } 

   },
   
    update:function () {

   }
};