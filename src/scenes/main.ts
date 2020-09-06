import Phaser from 'phaser';

//  import { CHARS } from '../constants';
//  import { Player } from '../sprites/player';

export const KEY = 'MAIN';

/**
 * @param {Phaser.Scene} scene
 * 
 */
export createBackgroundLoop = (scene, count, texture, scrollFactore) => {

  const plan_1 = this.add.image(0, 0, 'plan_1')
    .setOrigin(0,0)
    .setScale(.8)
    .setScrollFactor(0.25)
}
export class Scene extends Phaser.Scene {
  // private context: { [key: string]: any } = {};

  constructor() {
    super({ key: KEY });
  }

  renderLevel (key: string): void {
    // this.context.map = this.make.tilemap({ key: `level:${key}`, tileWidth: 16, tileHeight: 16 });

    // const background = this.context.map.properties.find(({ name }) => name === 'background');
    // this.context.background = this.add.tileSprite(
    //   this.cameras.main.centerX,
    //   this.cameras.main.centerY,
    //   this.context.map.widthInPixels,
    //   this.context.map.heightInPixels,
    //   `background:${background.value}`,
    // );

    // this.context.tileset = this.context.map.addTilesetImage('tileset');
    // this.context.tiles = this.context.map.createStaticLayer('terrain', this.context.tileset, 0, 0);
    // this.context.tiles.setCollisionByProperty({ collides: true });
    // this.context.tiles.forEachTile((tile) => {
    //   if (tile.properties['jump-through'] === true) {
    //     tile.collideDown = false;
    //     tile.collideLeft = false;
    //     tile.collideRight = false;
    //   }
    // });

    // const { x, y } = this.context.map.findObject('objects', ({ name }) => name === 'player-spawn');
    // this.context.player = new Player({ scene: this, x, y, char: CHARS[Math.floor(Math.random() * CHARS.length)] });

    // this.physics.add.collider(this.context.player, this.context.tiles);

    // this.cameras.main.startFollow(this.context.player);
  }

  preload(): void {
    this.load.image('background', 'assets/background/background.png')
    this.load.image('cloud', 'assets/background/cloud.png')
    this.load.image('moon', 'assets/background/cloud_moon.png')

    this.load.image('plan_1', 'assets/background/plan_1.png');
    this.load.image('plan_2', 'assets/background/plan_2.png');

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  create(): void {
    const width = this.scale.width
    const height = this.scale.height

    // Fixed background composed of sky + cloud and moon
    const bg = this.add.image(0, 0, 'background')
      .setOrigin(0, 0)
      .setScrollFactor(0)

    this.add.image(0, 0, 'cloud')
      .setOrigin(0, 0)
      .setScale(.2)
      .setScrollFactor(0)
     
    this.add.image(width, 0, 'moon')
      .setOrigin(1, 0)
      .setScale(.2)
      .setScrollFactor(0)

    bg.displayWidth = this.game.config.width
    bg.scaleX = bg.scaleY

    const plan_1 = this.add.image(0, 0, 'plan_1')
    .setOrigin(0,0)
    .setScale(.8)
    .setScrollFactor(0.25)

    this.add.image(plan_1.displayWidth, 0, 'plan_1')
    .setOrigin(0,0)
    .setScale(.8)
    .setScrollFactor(0.25)

    this.add.image(plan_1.displayWidth*2, 0, 'plan_1')
    .setOrigin(0,0)
    .setScale(.8)
    .setScrollFactor(0.25)


     const plan_2 = this.add.image(0, 0, 'plan_2')
      .setOrigin(0, 0)
      .setScale(.8)
      .setScrollFactor(0.5)

    this.add.image(plan_2.displayWidth, 0, 'plan_2')
      .setOrigin(0,0)
      .setScale(.8)
      .setScrollFactor(0.5)

    this.add.image(plan_2.displayWidth*2, 0, 'plan_2')
      .setOrigin(0,0)
      .setScale(.8)
      .setScrollFactor(0.5)

    this.cameras.main.setBounds(0, 0, width * 3, height)
  }

  update(): void {
    const cam = this.cameras.main
    const speed = 3
    if (this.cursors.left.isDown) {
      // move left
      cam.scrollX -= speed
    } else if (this.cursors.right.isDown) {
      // move right
      cam.scrollX += speed
    }
  }
}
