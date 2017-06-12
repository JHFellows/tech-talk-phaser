/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Knight from '../sprites/Knight'

let tileSprite;
let cursors;
let knight;
let s;

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Phaser + ES6 + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)
    //  We're going to be using physics, so enable the Arcade Physics system
    //this.physics.startSystem(Phaser.Physics.ARCADE);

    this.mushroom = new Mushroom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    // this.knight = new Knight({
    //   game: this,
    //   x:10,
    //   y:358,
    //   asset: 'knight'
    // })

    //this.game.add.existing(this.mushroom)
    tileSprite = this.add.tileSprite(0, 0, 800, 600, 'background');
    s = this.add.sprite(this.world.centerX, this.world.centerY, 'knight');
    s.anchor.setTo(2, -0.3);
    s.scale.setTo(0.25,0.25);

    s.animations.add('walk', [2,3,4,5,6,7,8,9,10], true);
    s.animations.add('jump', [12,13,14,15,16,17,18,19,20],true)
    s.animations.add('idle', [0], false);

    s.animations.play('idle');

    cursors = this.input.keyboard.createCursorKeys();
    //game.debug.text('Press down arrow keys to move the tileSprite', 20, 20);
  }

  // update () {
  //   background.tilePosition.x += 2
  // }
  update () {
    if (cursors.right.isDown) {
      s.animations.play('walk',10,true)
    }
    else if (cursors.up.isDown) {
      s.animations.play('jump',10,true)
    }
    else{
       s.animations.play('idle')
    }
  }
  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(s, 32, 32)
    }
  }
}
