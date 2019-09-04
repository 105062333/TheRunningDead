var instState = {
    
    preload:function () {
       
       
   },
   
   create:function () {
    game.add.image(0, 0, 'backins');
    this.button  = game.add.audio('button');
    this.button4  = game.add.audio('button4');
    this.ins = game.add.audio('instruction');

    this.ins.play();
   
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

       var nameLabel = game.add.text(game.width/2, -50, 'INSTRUCTION',
        { font: '60px Nosifer', fill: '#CD0000' }); 
        nameLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(nameLabel).to({y: 150}, 1000).easing(Phaser.Easing.Exponential.Out).start();

        var play1Label = game.add.text(250, 300, 'PLAYER 1',
        { font: '30px Knewave', fill: '#000000' }); 
        play1Label.anchor.setTo(0.5, 0.5);
        var play12Label = game.add.text(200, 350, 'Controls: ',
        { font: '25px Knewave', fill: '#000000' }); 
        var play121Label = game.add.text(330, 350, 'W A S D ',
        { font: '30px Monofett', fill: '#000000' }); 

        var play13Label = game.add.text(200, 400, 'V to Shoot ',
        { font: '25px Knewave', fill: '#000000' }); 

        var play14Label = game.add.text(200, 450, 'C&V to Change Weapons ',
        { font: '25px Knewave', fill: '#000000' }); 


        var play2Label = game.add.text(750, 300, 'PLAYER 2',
        { font: '30px Knewave', fill: '#000000' }); 
        play2Label.anchor.setTo(0.5, 0.5);
        var play22Label = game.add.text(700, 350, 'Controls: ',
        { font: '25px Knewave', fill: '#000000' }); 
        var play22Label = game.add.text(830, 350, '↑ ↓ ← → ',
        { font: '25px Monofett', fill: '#000000' }); 

        var play23Label = game.add.text(700, 400, 'K to Shoot ',
        { font: '25px Knewave', fill: '#000000' }); 

        var play24Label = game.add.text(700, 450, 'J&L to Change Weapons ',
        { font: '25px Knewave', fill: '#000000' }); 


       /* this.backLabel = game.add.text(130, game.height-70,
        '☜ BACK', { font: '30px Arial', fill: '#ffffff' }); 
        this.backLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(this.backLabel).to({angle: -2}, 200).to({angle: 2}, 400).to({angle: 0}, 200).loop().start();

        this.player = game.add.sprite(200, 140, 'player');
        game.physics.arcade.enable(this.player);
        this.player.animations.add('right', [9, 10, 11, 12], 8);

        var style = {fill: '#ffffff', font: '20px Arial'}
        this.text1 = game.add.text(250, 140, '', style);
        this.text1.setText('press ← to Left ╱ → to Right');

        this.player2 = game.add.sprite(200, 200, 'player2');
        game.physics.arcade.enable(this.player2);
        this.player2.animations.add('right', [9, 10, 11, 12], 8);

        this.text2 = game.add.text(250, 200, '', style);
        this.text2.setText('press A to Left ╱ D to Right');

        this.text3 = game.add.text(250, 260, '', style);
        this.text3.setText('press B to Back ╱ Enter to Next');
*/
        this.backLabel = game.add.text(550, 630, 'BACK TO MENU', { font: '35px Luckiest Guy', fill: '#ffffff' });
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
            this.ins.stop();
            this.button4.play();
            game.state.start('menu');
        } 

   },
   
    update:function () {

   }
};