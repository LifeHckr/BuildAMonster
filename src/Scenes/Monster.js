class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.RArm = this.add.sprite(this.bodyX+100, this.bodyY+70, "monsterParts", "arm_redB.png");
        my.sprite.LArm = this.add.sprite(this.bodyX-100, this.bodyY+70, "monsterParts", "arm_redB.png");
        my.sprite.LArm.flipX = true;
        my.sprite.LLeg = this.add.sprite(this.bodyX+50, this.bodyY+120, "monsterParts", "leg_darkC.png");
        my.sprite.RLeg = this.add.sprite(this.bodyX-50, this.bodyY+120, "monsterParts", "leg_darkC.png");
        my.sprite.RLeg.flipX = true;
        my.sprite.Eye = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "eye_human_red.png");
        my.sprite.Smile = this.add.sprite(this.bodyX, this.bodyY+10, "monsterParts", "mouth_closed_happy.png");
        my.sprite.Fangs = this.add.sprite(this.bodyX, this.bodyY+10, "monsterParts", "mouthF.png");
        my.sprite.Fangs.visible = false;
        my.sprite.horn1 = this.add.sprite(this.bodyX-50, this.bodyY-70, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.horn1.flipX = true;
        my.sprite.horn2 = this.add.sprite(this.bodyX+50, this.bodyY-70, "monsterParts", "detail_dark_horn_small.png");

        my.moveKeys = this.input.keyboard.addKeys('W,S,A,D');;
        my.sKey = this.input.keyboard.addKey('S');
        my.fKey = this.input.keyboard.addKey('F');

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(my.fKey.isDown) {
            my.sprite.Fangs.visible = true;
            my.sprite.Smile.visible = false;
        }
        if(my.sKey.isDown) {
            my.sprite.Fangs.visible = false;
            my.sprite.Smile.visible = true;
        }

        if(my.moveKeys.W.isDown) {
            for (let thing in my.sprite) {
                my.sprite[thing].y -= 5;
            }
        }
        if(my.moveKeys.S.isDown) {
            for (let thing in my.sprite) {
                my.sprite[thing].y += 5;
            }
        }
        if(my.moveKeys.A.isDown) {
            for (let thing in my.sprite) {
                my.sprite[thing].x -= 5;
            }
        }
        if(my.moveKeys.D.isDown) {
            for (let thing in my.sprite) {
                my.sprite[thing].x += 5;
            }
        }
        
    }

}