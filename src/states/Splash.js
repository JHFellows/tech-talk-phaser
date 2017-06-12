import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('background', 'assets/images/background.png')
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.atlasJSONHash('walk', 'assets/images/walk.png', 'assets/images/walk.json');
    //  37x45 is the size of each frame
//  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
//  blank frames at the end, so we tell the loader how many to load
    //this.load.spritesheet('walk', 'assets/images/walk.png', 587, 707, 7);
  }

  create () {
    this.state.start('Game')
  }
}
