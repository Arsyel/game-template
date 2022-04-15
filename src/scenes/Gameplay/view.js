import Image from '../../modules/GameObjects/Image';

class GameplayView {
  /**
   * @param {Phaser.Scene} scene 
   * @param {import('../../modules/ScreenUtility').default} screenUtil 
   */
  constructor(scene, screenUtil) {
    this._scene = scene;
    this._screenUtil = screenUtil;
  }

  create() {
    const { centerX, centerY, width, height } = this._screenUtil;

    const logo = new Image(this._scene, 'logo', centerX, centerY);
    logo.transform.setMaxPreferredDisplaySize(width, height);
  }
}

export default GameplayView;
