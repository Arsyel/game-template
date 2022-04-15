import Transform from "../Transform";

class Sprite {
  /** @private */
  _gameObject;

  /** @private */
  _transform;

  /**
   * @param {Phaser.Scene} scene
   * @param {string} textureKey
   * @param {number} x
   * @param {number} y
   * @param {number} ratio
   */
  constructor(scene, textureKey, x, y = x, ratio = 1, frame = 0) {
    this._gameObject = scene.add.sprite(x, y, textureKey, frame);
    this._transform = new Transform(scene.scale, this._gameObject);
    this._transform.setToScaleDisplaySize(ratio);
  }

  get gameObject() {
    return this._gameObject;
  }

  get transform() {
    return this._transform;
  }
}

export default Sprite;
