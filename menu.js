
var menuState = {

    create: function() {

        this.backmenu = game.add.sprite(0, 0, "background");
        this.button  = game.add.audio('button');
        this.button4  = game.add.audio('button4');
        this.kar  = game.add.audio('98k');
        this.menu = game.add.audio('menu');

        this.menu.play();

        this.keyboard = game.input.keyboard.addKeys({
            'enter': Phaser.Keyboard.ENTER,
            'up': Phaser.Keyboard.UP,
            'down': Phaser.Keyboard.DOWN,
            'left': Phaser.Keyboard.LEFT,
            'right': Phaser.Keyboard.RIGHT,
            'w': Phaser.Keyboard.W,
            'a': Phaser.Keyboard.A,
            's': Phaser.Keyboard.S,
            'd': Phaser.Keyboard.D
        });
        
        var name2Label = game.add.text(550, -100, 'THE RUNNING', { font: '50px Creepster', fill: '#CD0000'});
        name2Label.anchor.setTo(0.5, 0.5);
        game.add.tween(name2Label).to({y: 100}, 1000).easing(Phaser.Easing.Bounce.Out).start();
        var nameLabel = game.add.text(550, -75, 'DEAD',{ font: '140px Creepster', fill: '#CD0000' });
        nameLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(nameLabel).to({y: 175}, 1000).easing(Phaser.Easing.Bounce.Out).start();

       // this.option = game.add.image(235, 156, 'play');

        this.oneLabel = game.add.text(550, 400, 'SINGLE PLAY', { font: '30px Bungee Inline', fill: '#ffffff' });
        this.oneLabel.anchor.setTo(0.5, 0.5);
        this.oneLabel.inputEnabled = true;
        this.oneLabel.input.useHandCursor = true;
        this.oneLabel.events.onInputDown.add(down, this);
        this.oneLabel.events.onInputOver.add(over, this);
        this.oneLabel.events.onInputOut.add(out, this);


        this.twoLabel = game.add.text(550, 450,'COOPERATIVE', { font: '30px Bungee Inline', fill: '#ffffff' });
        this.twoLabel.anchor.setTo(0.5, 0.5);
        this.twoLabel.inputEnabled = true;
        this.twoLabel.input.useHandCursor = true;
        this.twoLabel.events.onInputDown.add(down, this);
        this.twoLabel.events.onInputOver.add(over, this);
        this.twoLabel.events.onInputOut.add(out, this);

        this.hardLabel = game.add.text(550, 500,'DEATH MATCH', { font: '30px Bungee Inline', fill: '#ffffff' });
        this.hardLabel.anchor.setTo(0.5, 0.5);
        this.hardLabel.inputEnabled = true;
        this.hardLabel.input.useHandCursor = true;
        this.hardLabel.events.onInputDown.add(down, this);
        this.hardLabel.events.onInputOver.add(over, this);
        this.hardLabel.events.onInputOut.add(out, this);

        this.leaderLabel = game.add.text(550, 550,'INSTRUCTION', { font: '30px Bungee Inline', fill: '#ffffff' });
        this.leaderLabel.anchor.setTo(0.5, 0.5);
        this.leaderLabel.inputEnabled = true;
        this.leaderLabel.input.useHandCursor = true;
        this.leaderLabel.events.onInputDown.add(down, this);
        this.leaderLabel.events.onInputOver.add(over, this);
        this.leaderLabel.events.onInputOut.add(out, this);

        this.rankLabel = game.add.text(550, 600,'LEADERBOARD', { font: '30px Bungee Inline', fill: '#ffffff' });
        this.rankLabel.anchor.setTo(0.5, 0.5);
        this.rankLabel.inputEnabled = true;
        this.rankLabel.input.useHandCursor = true;
        this.rankLabel.events.onInputDown.add(down, this);
        this.rankLabel.events.onInputOver.add(over, this);
        this.rankLabel.events.onInputOut.add(out, this);
        
        /*var startLabel = game.add.text(358, 340,'Press the Enter key to Start the game !', { font: '25px Arial', fill: '#ffffff' });
        startLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(startLabel).to({angle: -5}, 100).to({angle: 5}, 200).to({angle: 0}, 100).loop().start();*/

        /*var infoLabel = game.add.text(1200, 50, 'Press A to \nSee Info ⍰', {font: '20px Arial', fill: '#ffffff'});
        infoLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(infoLabel).to({x: 900}, 1000).easing(Phaser.Easing.Exponential.Out).start();*/
        

        function out(item){
            item.fill="#ffffff";        
        }
        function over(item)
        {
            this.button.play();
            item.fill = "#CC0000";
        }
        function down (item) {
            this.menu.stop();
            this.button4.play();
            if(item.text=='SINGLE PLAY'){
                select = 0;
                game.state.start('select');//window.location = 'select.html';
            }
            else if(item.text=='COOPERATIVE')game.state.start('level');
            else if(item.text=='DEATH MATCH'){
                select = 3;
                game.state.start('select');
            }
            else if(item.text=='INSTRUCTION')game.state.start('inst');
            else if(item.text=='LEADERBOARD')game.state.start('rank');
        }

    },

    /*next: function () {
        this.buttonSound.play();
        if (this.select_one == 0) {
            this.select_one = 1;
            this.oneLabel = game.add.text(358, 180, '1 Player', { font: '25px Arial', fill: '#ffffff' });
            this.oneLabel.anchor.setTo(0.5, 0.5);
            this.twoLabel = game.add.text(358, 230,'2 Players', { font: '25px Arial', fill: '#ffffff' });
            this.twoLabel.anchor.setTo(0.5, 0.5);
            game.add.tween(this.twoLabel.scale).to({x: 1.5, y: 1.5}, 200).yoyo(true).start();
            game.add.tween(this.option).to({y: 206}, 100).start();
            this.hardLabel = game.add.text(358, 280,'Challenge', { font: '25px Arial', fill: '#ffffff' });
            this.hardLabel.anchor.setTo(0.5, 0.5);
            this.leaderLabel = game.add.text(358, 330,'Leaderboard', { font: '25px Arial', fill: '#ffffff' });
            this.leaderLabel.anchor.setTo(0.5, 0.5);
        } else if (this.select_one == 1) {
            this.select_one = 2;
            this.oneLabel = game.add.text(358, 180, '1 Player', { font: '25px Arial', fill: '#ffffff' });
            this.oneLabel.anchor.setTo(0.5, 0.5);
            this.twoLabel = game.add.text(358, 230,'2 Players', { font: '25px Arial', fill: '#ffffff' });
            this.twoLabel.anchor.setTo(0.5, 0.5);
            this.hardLabel = game.add.text(358, 280,'Challenge', { font: '25px Arial', fill: '#ffffff' });
            this.hardLabel.anchor.setTo(0.5, 0.5);
            game.add.tween(this.hardLabel.scale).to({x: 1.5, y: 1.5}, 200).yoyo(true).start();
            game.add.tween(this.option).to({y: 256}, 100).start();
            this.leaderLabel = game.add.text(358, 330,'Leaderboard', { font: '25px Arial', fill: '#ffffff' });
            this.leaderLabel.anchor.setTo(0.5, 0.5);
        } else if (this.select_one == 2) {
            this.select_one = 3;
            this.oneLabel = game.add.text(358, 180, '1 Player', { font: '25px Arial', fill: '#ffffff' });
            this.oneLabel.anchor.setTo(0.5, 0.5);
            this.twoLabel = game.add.text(358, 230,'2 Players', { font: '25px Arial', fill: '#ffffff' });
            this.twoLabel.anchor.setTo(0.5, 0.5);
            this.hardLabel = game.add.text(358, 280,'Challenge', { font: '25px Arial', fill: '#ffffff' });
            this.hardLabel.anchor.setTo(0.5, 0.5);
            this.leaderLabel = game.add.text(358, 330,'Leaderboard', { font: '25px Arial', fill: '#ffffff' });
            this.leaderLabel.anchor.setTo(0.5, 0.5);
            game.add.tween(this.leaderLabel.scale).to({x: 1.5, y: 1.5}, 200).yoyo(true).start();
            game.add.tween(this.option).to({y: 306}, 100).start();
        }
        else if (this.select_one == 3) {
            this.select_one = 0;
            this.oneLabel = game.add.text(358, 180, '1 Player', { font: '25px Arial', fill: '#ffffff' });
            this.oneLabel.anchor.setTo(0.5, 0.5);
            game.add.tween(this.oneLabel.scale).to({x: 1.5, y: 1.5}, 200).yoyo(true).start();
            game.add.tween(this.option).to({y: 156}, 100).start();
            this.twoLabel = game.add.text(358, 230,'2 Players', { font: '25px Arial', fill: '#ffffff' });
            this.twoLabel.anchor.setTo(0.5, 0.5);
            this.hardLabel = game.add.text(358, 280,'Challenge', { font: '25px Arial', fill: '#ffffff' });
            this.hardLabel.anchor.setTo(0.5, 0.5);
            this.leaderLabel = game.add.text(358, 330,'Leaderboard', { font: '25px Arial', fill: '#ffffff' });
            this.leaderLabel.anchor.setTo(0.5, 0.5);
        }
    },
    prev: function () {
        this.buttonSound.play();
        if (this.select_one == 0) {
            this.select_one = 3;
            this.oneLabel = game.add.text(358, 180, '1 Player', { font: '25px Arial', fill: '#ffffff' });
            this.oneLabel.anchor.setTo(0.5, 0.5);
            this.twoLabel = game.add.text(358, 230,'2 Players', { font: '25px Arial', fill: '#ffffff' });
            this.twoLabel.anchor.setTo(0.5, 0.5);
            this.hardLabel = game.add.text(358, 280,'Challenge', { font: '25px Arial', fill: '#ffffff' });
            this.hardLabel.anchor.setTo(0.5, 0.5);
            this.leaderLabel = game.add.text(358, 330,'Leaderboard', { font: '25px Arial', fill: '#ffffff' });
            this.leaderLabel.anchor.setTo(0.5, 0.5);
            game.add.tween(this.leaderLabel.scale).to({x: 1.5, y: 1.5}, 200).yoyo(true).start();
            game.add.tween(this.option).to({y: 306}, 100).start();
        } else if (this.select_one == 1) {
            this.select_one = 0;
            this.oneLabel = game.add.text(358, 180, '1 Player', { font: '25px Arial', fill: '#ffffff' });
            this.oneLabel.anchor.setTo(0.5, 0.5);
            game.add.tween(this.oneLabel.scale).to({x: 1.5, y: 1.5}, 200).yoyo(true).start();
            game.add.tween(this.option).to({y: 156}, 100).start();
            this.twoLabel = game.add.text(358, 230,'2 Players', { font: '25px Arial', fill: '#ffffff' });
            this.twoLabel.anchor.setTo(0.5, 0.5);
            this.hardLabel = game.add.text(358, 280,'Challenge', { font: '25px Arial', fill: '#ffffff' });
            this.hardLabel.anchor.setTo(0.5, 0.5);
            this.leaderLabel = game.add.text(358, 330,'Leaderboard', { font: '25px Arial', fill: '#ffffff' });
            this.leaderLabel.anchor.setTo(0.5, 0.5);
        } else if (this.select_one == 2) {
            this.select_one = 1;
            this.oneLabel = game.add.text(358, 180, '1 Player', { font: '25px Arial', fill: '#ffffff' });
            this.oneLabel.anchor.setTo(0.5, 0.5);
            this.twoLabel = game.add.text(358, 230,'2 Players', { font: '25px Arial', fill: '#ffffff' });
            this.twoLabel.anchor.setTo(0.5, 0.5);
            game.add.tween(this.twoLabel.scale).to({x: 1.5, y: 1.5}, 200).yoyo(true).start();
            game.add.tween(this.option).to({y: 206}, 100).start();
            this.hardLabel = game.add.text(358, 280,'Challenge', { font: '25px Arial', fill: '#ffffff' });
            this.hardLabel.anchor.setTo(0.5, 0.5);
            this.leaderLabel = game.add.text(358, 330,'Leaderboard', { font: '25px Arial', fill: '#ffffff' });
            this.leaderLabel.anchor.setTo(0.5, 0.5);
        } else if (this.select_one == 3) {
            this.select_one = 2;
            this.oneLabel = game.add.text(358, 180, '1 Player', { font: '25px Arial', fill: '#ffffff' });
            this.oneLabel.anchor.setTo(0.5, 0.5);
            this.twoLabel = game.add.text(358, 230,'2 Players', { font: '25px Arial', fill: '#ffffff' });
            this.twoLabel.anchor.setTo(0.5, 0.5);
            this.hardLabel = game.add.text(358, 280,'Challenge', { font: '25px Arial', fill: '#ffffff' });
            this.hardLabel.anchor.setTo(0.5, 0.5);
            game.add.tween(this.hardLabel.scale).to({x: 1.5, y: 1.5}, 200).yoyo(true).start();
            game.add.tween(this.option).to({y: 256}, 100).start();
            this.leaderLabel = game.add.text(358, 330,'Leaderboard', { font: '25px Arial', fill: '#ffffff' });
            this.leaderLabel.anchor.setTo(0.5, 0.5);
        }
    },
    start: function () {
        
        if (this.select_one == 0) {
            //this.karSound.play();
            this.menuSound.stop();
            game.state.start('name');
        } else if (this.select_one == 1) {
            //this.karSound.play();
            this.menuSound.stop();
            game.state.start('play2');
        } else if (this.select_one == 2) {
            //this.karSound.play();
            this.menuSound.stop();
            game.state.start('challenge');
        }
        else if (this.select_one == 3) {
            //this.karSound.play();
            this.menuSound.stop();
            game.state.start('leader');
        }

    },
    leader: function(){
        this.menuSound.stop();
        game.state.start('info');
        //alert("\nPress the B key to Back\n\nPress the Enter key to next");
    }
*/
}; 