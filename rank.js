var rankState = {
    
    preload:function () {
       
       
   },
   
   create:function () {
    game.add.image(0, 0, 'backrank');
    this.button  = game.add.audio('button');
    this.button4  = game.add.audio('button4');
    this.legend  = game.add.audio('legend');

    this.legend.play();
   
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

       var nameLabel = game.add.text(game.width/2, -50, 'LEADERBOARD',
        { font: '60px Nosifer', fill: '#CD0000' }); 
        nameLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(nameLabel).to({y: 130}, 1000).easing(Phaser.Easing.Exponential.Out).start();

        var query = firebase.database().ref('scoreBoard').orderByChild('Score').limitToLast(10);
		var count = 0;
		query.on('child_added', function(snap) {
        var record = snap.val();
		if(count == 9){
            var board = game.add.text( game.width/2-350, 500-count*30, record.Name + '  ➯  ' + record.Score, { font: '25px Viga', fill: '#ffff14' });
            board.anchor.setTo(0.5, 0.5);
            //var date = game.add.text( game.width/2-120, 500-count*30, record.Year + '/' + record.Month + '/' + record.Day + '    ' + record.Hours + ':' + record.Minutes + ':' + record.Seconds, { font: '15px Arial', fill: '#000000' });
            //date.anchor.setTo(0.5, 0.5);
            count++;
        }
        else if(count == 8 || count==7 || count==6 || count==5){
            var board = game.add.text( game.width/2-350, 500-count*30, record.Name + '  ➯  ' + record.Score, { font: '25px Viga', fill: '#000000' });
            board.anchor.setTo(0.5, 0.5);
            //var date = game.add.text( game.width/2-120, 500-count*30, record.Year + '/' + record.Month + '/' + record.Day + '    ' + record.Hours + ':' + record.Minutes + ':' + record.Seconds, { font: '15px Arial', fill: '#000000' });
            //date.anchor.setTo(0.5, 0.5);
            count++;
        }
		else if(count < 5){
            var board = game.add.text( game.width/2+190, 350-count*30, record.Name + '  ➯  ' + record.Score, { font: '25px Viga', fill: '#000000' });
            board.anchor.setTo(0.5, 0.5);
            var date = game.add.text( game.width/2+420, 350-count*30, record.Year + '/' + record.Month + '/' + record.Day + '    ' + record.Hours + ':' + record.Minutes + ':' + record.Seconds, { font: '20px Marck Script', fill: '#000000' });
            date.anchor.setTo(0.5, 0.5);
            count++;
        }
		}); 

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
            this.legend.stop();
            this.button4.play();
            game.state.start('menu');
        } 

   },
   
    update:function () {

   }
};