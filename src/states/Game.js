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

    // this.walk = new Knight({
    //   game: this,
    //   x:10,
    //   y:358,
    //   asset: 'walk'
    // })

    //this.game.add.existing(this.mushroom)
    tileSprite = this.add.tileSprite(0, 0, 800, 600, 'background');
    s = this.add.sprite(this.world.centerX, this.world.centerY, 'walk');
    s.anchor.setTo(2, -0.3);
    s.scale.setTo(0.25,0.25);

    s.animations.add('walk');
    s.animations.play('walk', 10, true);
    // this.game.add.existing(this.walk)
    // this.walk.animations.add('walk');
    // this.walk.animations.play('walk',10,true)


    cursors = this.input.keyboard.createCursorKeys();
    //game.debug.text('Press down arrow keys to move the tileSprite', 20, 20);
  }

  // update () {
  //   background.tilePosition.x += 2
  // }
  update () {
    // Move tilesprite position by pressing arrow keys
  //   if (cursors.left.isDown)
  //   {
  //       tileSprite.tilePosition.x += 8;
  //   }
  //   else if (cursors.right.isDown)
  //   {
  //       tileSprite.tilePosition.x -= 8;
  //   }
  // }
    // if (cursors.right.isDown) {
    //   knight.animations.play('walk')
    // }
  }
  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(s, 32, 32)
    }
  }
}
