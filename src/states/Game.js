/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Knight from '../sprites/Knight'
import { enemy } from '../utils'


let tileSprite, cursors, knight;
export default class extends Phaser.State {
  // init () {}
  // preload () {}

  create () {

    //  We're going to be using physics, so enable the Arcade Physics system
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.mushroom = new Mushroom({
      game: this,
      x: 800,
      y: 490,
      asset: 'mushroom'
    })

    // this.knight = new Knight({
    //   game: this,
    //   x:10,
    //   y:358,
    //   asset: 'knight'
    // })

    //important to stack sprites correctly(linearly)

    tileSprite = this.add.tileSprite(0, 0, 800, 600, 'background');
    const bannerText = 'Level 1'
    let banner = this.add.text(this.world.centerX, this.game.height - 500, bannerText)
    banner.font = 'Press Start 2P'
    banner.padding.set(10, 16)
    banner.fontSize = 30
    banner.fill = 'black'
    //banner.smoothed = false
    banner.anchor.setTo(0.5)
    let self = this;
    function addShroom(){
      return self.game.add.existing(self.mushroom)
    }
    addShroom()
    //this.game.add.existing(this.mushroom)
    this.physics.enable(this.mushroom, Phaser.Physics.ARCADE);
    this.mushroom.body.velocity.x = -225


    //s = this.game.add.existing(this.knight)
    this.game.world.setBounds(0, 0, 800, 537);

    knight = this.add.sprite(150, 357, 'knight');
    knight.scale.setTo(0.25,0.25);

    this.physics.enable(knight, Phaser.Physics.ARCADE);
    knight.body.bounce.y = 0.4;
    knight.body.gravity.y = 1000;
    knight.body.collideWorldBounds = true;

    knight.animations.add('walk', [1,2,3,4,5,6,7,8,9,10], true);
    knight.animations.add('jump', [12,13,14,15,16,17,18,19,20],true)
    knight.animations.add('idle', [0], false);

    //knight.animations.play('idle');

    cursors = this.input.keyboard.createCursorKeys();
    //game.debug.text('Press down arrow keys to move the tileSprite', 20, 20);

  }

  // update () {
  //   background.tilePosition.x += 2
  // }

  update () {
    knight.body.velocity.x = 0;
    if (cursors.right.isDown) {
      knight.body.velocity.x = 100
      knight.animations.play('walk', 15, true)
      tileSprite.tilePosition.x += -5
    }
    else if (cursors.left.isDown) {
      knight.body.velocity.x = -225
      knight.animations.play('walk', 15, true)
    }
    else if (cursors.up.isDown) {
      knight.body.velocity.y = -200
      knight.animations.play('jump',12,true)
    }
    else {
      knight.animations.play('idle')
    }
  }
  // render () {
  //   if (__DEV__) {
  //     this.game.debug.spriteInfo(knight, 32, 32)
  //   }
  // }
}
