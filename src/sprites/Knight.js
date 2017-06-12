import Phaser from 'phaser'


export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    //this.anchor.setTo(0.5)
    this.scale.setTo(0.25,0.25);
  }

  update () {
  }
}
