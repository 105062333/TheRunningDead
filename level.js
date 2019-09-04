//var fuck;
var levelState = {
    level_background: null,
    levels : null,
    preload: function(){
    },
    levelCallback : function(i){
        var e = this.levels[i];

        //theme_music.fadeOut(500);
        // fade out
        //this.camera.fade('#000', 500);
        //this.camera.onFadeComplete.addOnce(function() {
        //    this.game.state.start('game', true, false, e.map, i);
        //}, this);
        this.lev.stop();   
        if(i==0){
            currentlevel = 1;
            this.button2.play();
            this.game.state.start('game', true, false, e.map, i);
        }
            //fuck='game';    
        else if(i==1){
            ifnext=true;
            currentlevel = 2;
            this.button2.play();
            this.game.state.start('game2', true, false, e.map, i);     
        } 
        else if(i==2){
            ifnext=true;
            currentlevel = 3;
            this.button2.play();
            this.game.state.start('game3', true, false, e.map, i);     
        }   
        else if(i==3){
            ifnext=true;
            currentlevel = 4;
            this.button2.play();
            this.game.state.start('game4', true, false, e.map, i);     
        }   
        else if(i==4){
            ifnext=true;
            currentlevel = 5;
            this.button2.play();
            this.game.state.start('game5', true, false, e.map, i);     
        } 
        else if(i==5){
            ifnext=true;
            currentlevel = 6;
            this.button2.play();
            this.game.state.start('game6', true, false, e.map, i);     
        }
        else if(i==6){
            ifnext=true;
            currentlevel = 7;
            this.button2.play();
            this.game.state.start('game7', true, false, e.map, i);     
        } 
        else if(i==7){
            ifnext=true;
            currentlevel = 8;
            this.button2.play();
            this.game.state.start('game8', true, false, e.map, i);     
        } 
        else if(i==8){
            ifnext=true;
            currentlevel = 9;
            this.button2.play();
            this.game.state.start('game9', true, false, e.map, i);     
        } 
        else if(i==9){
            ifnext=true;
            currentlevel = 10;
            this.button2.play();
            this.game.state.start('game10', true, false, e.map, i);     
        } 
        else if(i==10){
            ifnext=true;
            currentlevel = 11;
            this.button2.play();
            this.game.state.start('game11', true, false, e.map, i);     
        } 
        else if(i==11){
            ifnext=true;
            currentlevel = 12;
            this.button2.play();
            this.game.state.start('game12', true, false, e.map, i);     
        } 
        else if(i==12){
            ifnext=true;
            currentlevel = 13;
            this.button2.play();
            this.game.state.start('game13', true, false, e.map, i);     
        } 
        else if(i==13){
            ifnext=true;
            currentlevel = 14;
            this.button2.play();
            this.game.state.start('game14', true, false, e.map, i);     
        }          
        else if(i==14){
            ifnext=true;
            currentlevel = 15;
            this.button2.play();
            this.game.state.start('game15', true, false, e.map, i);     
        } 
        else if(i==15){
            ifnext=true;
            currentlevel = 16;
            this.button2.play();
            this.game.state.start('game16', true, false, e.map, i);     
        } 
        else if(i==16){
            ifnext=true;
            currentlevel = 17;
            this.button2.play();
            this.game.state.start('game17', true, false, e.map, i);     
        } 
        else {
            ifnext=false;
            var fuck='game'+ game.rnd.integerInRange(1, 17);
            this.game.state.start(fuck, true, false, e.map, i);     
        }

    },
    returnCallback: function(){
        // fade out
        this.camera.fade('#000', 500);
        this.camera.onFadeComplete.addOnce(function() {
            this.game.state.start('menu');
        }, this);        
    },
    addButton:function(i, type){
            var e = this.levels[i];
            var b = null;
            if(type == 'passed')
                b = game.add.button(e.iconx, e.icony, 'image', () => this.levelCallback(i), this, 'system/system_06', 'system/system_05', 'system/system_07');
            else if(type == 'next')
                b = game.add.button(e.iconx, e.icony, 'image', () => this.levelCallback(i), this, 'system/system_02', 'system/system_01', 'system/system_03');
            else 
                b = game.add.sprite(e.iconx, e.icony, 'image', 'system/system_04');

            b.anchor.setTo(0.5, 0.5);

            var style = { font: "32px Luckiest Guy", fill: "#ffffff", stroke: '#555555',strokeThickness:4, wordWrap: true, wordWrapWidth: 64};
            var t = game.add.text(e.iconx, e.icony, e.name, style);
            t.anchor.setTo(0.5, 0.45);
            
    },
    create: function(){
        //this.camera.flash('#000000', 500);

        this.button  = game.add.audio('button');
        this.button2  = game.add.audio('button2');
        this.button4  = game.add.audio('button4');
        this.lev  = game.add.audio('lev');

        this.lev.play();
        this.lev.volume = 0.5;

        this.level_background = game.add.sprite(0, 0, 'image', 'level');
        var data = game.cache.getJSON('data');
        //data.levels=0;
        this.levels = data.levels;
        
        this.backLabel = game.add.text(800, 600, 'BACK TO MENU', { font: '35px Luckiest Guy', fill: '#ffffff' });
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
            this.lev.stop();
            this.button4.play();
            game.state.start('menu');
        } 

        var is_next = new Array(this.levels.length);
        var is_passed = new Array(this.levels.length);

        var passed_count = 0;
        for(let i in  this.levels){
            var e = this.levels[i];
            var storage = localStorage.getItem('level'+i);
            storage='true';
            if(storage == 'true'){
                this.addButton(i, 'passed');
                passed_count++;
                for(var j in e.next){
                    var n = e.next[j];
                    is_next[n] = true;
                }
                is_passed[i] = true;
                
            }
        }
        for(let i in  this.levels){
            if(is_passed[i])
                continue;
            if(is_next[i]){
                this.addButton(i, 'next');
                
            }else{
                this.addButton(i, 'unlocked');
            }
        }
        if(passed_count == 0)
            this.addButton(0, 'next');

        // add return button
        //this.return_button = new ButtonPrefab(game.world.width - 16, game.world.height - 16, 'return', levelState.returnCallback, this);
        //this.return_button.setAnchor(1,1);
    }
};

