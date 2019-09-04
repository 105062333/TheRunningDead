var end2State = {
    
    preload:function () {
       
       
   },
   
   create:function () {
    game.add.image(0, 0, 'pubg');
    this.button  = game.add.audio('button');
    this.button2  = game.add.audio('button2');
    this.button4  = game.add.audio('button4');
    this.kar = game.add.audio('98k');
    this.name = game.add.audio('name');

    this.name.play();

    var one = 0;
   
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

       var nameLabel = game.add.text(game.width/2, -50, 'Game Over',
        { font: '60px Nosifer', fill: '#CD0000' }); 
        nameLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(nameLabel).to({y: 150}, 1000).easing(Phaser.Easing.Exponential.Out).start();


        this.retryLabel = game.add.text(550, 550, 'PLAY AGAIN', { font: '35px Luckiest Guy', fill: '#ffffff' });
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

        game.add.plugin(PhaserInput.Plugin);
		input = game.add.inputField(450, 270,{
			font: '20px Viga',
			fill: '#444444',
			fontWeight: 'bold',
			width: 190,
			padding: 8,
			borderWidth: 2,
			borderColor: '#000',
			borderRadius: 6,
            placeHolder: 'Enter Your Name'
        });
        this.sendLabel = game.add.text(550, 350, 'Send Score', { font: '30px Luckiest Guy', fill: '#ffffff' });
        this.sendLabel.anchor.setTo(0.5, 0.5);
        this.sendLabel.inputEnabled = true;
        this.sendLabel.input.useHandCursor = true;
        this.sendLabel.events.onInputDown.add(down, this);
        this.sendLabel.events.onInputOver.add(over, this);
        this.sendLabel.events.onInputOut.add(out, this);

        function out(item){
                item.fill="#ffffff";       
             
        }
        function over(item)
        {
            this.button.play();
            if(item.text=='Send Score'){
                item.fill = "#000000";
            }
            else
                item.fill = "#CC0000";
        }
        function down (item) {
            this.name.stop();
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
                    else if(currentlevel == 7)
                        game.state.start('game7');
                    else if(currentlevel == 8)
                        game.state.start('game8');
                    else if(currentlevel == 9)
                        game.state.start('game9');
                    else if(currentlevel == 10)
                        game.state.start('game10');
                    else if(currentlevel == 11)
                        game.state.start('game11');
                    else if(currentlevel == 12)
                        game.state.start('game12');
                    else if(currentlevel == 13)
                        game.state.start('game13');
                    else if(currentlevel == 14)
                        game.state.start('game14');
                    else if(currentlevel == 15)
                        game.state.start('game15');
                    else if(currentlevel == 16)
                        game.state.start('game16');
                    else if(currentlevel == 17)
                        game.state.start('game17');
                }
            }
            else{
                 if(item.text=='BACK TO MENU'){
                    this.button4.play();
                 game.state.start('menu');
                 }
                else if(item.text=='Send Score' && one == 0){
                    this.kar.play();
                    if(input.value != ""){
                        one = 1;
                        var Renew = new Date();
                        var recordref = firebase.database().ref('scoreBoard').push();
                        recordref.set({
                            Name: input.value,
                            Score: scoreP2,
                            Year: Renew.getFullYear(),
                            Month: Renew.getMonth() + 1,
                            Day: Renew.getDate(),
                            Hours: Renew.getHours(),
                            Minutes: Renew.getMinutes(),
                            Seconds: Renew.getSeconds()
                        });
                    }
                    else{
                        alert("What's your name??");
                    }
                }
            } 
        } 

   },
   
    update:function () {

   }
};