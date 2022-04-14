import Transform from '../../modules/Transform';

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
    const logo = this._scene.add.image(centerX, centerY, 'logo')
    const logoTf = new Transform(this._scene, logo);
    logoTf.setMaxPreferredDisplaySize(width, height);
  }
}

export default GameplayView;
