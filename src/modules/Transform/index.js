/**
 * @typedef {(Phaser.GameObjects.GameObject & Phaser.GameObjects.Components.ComputedSize & Phaser.GameObjects.Components.Origin & Phaser.GameObjects.Components.Transform) | Phaser.GameObjects.Rectangle} GameObject
 * 
 */

class Transform {
  /** @private */
  _gameObject;

  /** @private */
  _scaleManager;

  /**
   * @param {Phaser.Scene} scene
   * @param {GameObject} gameObject
   */
  constructor(scene, gameObject) {
    this._gameObject = gameObject;
    this._scaleManager = scene.scale;
  }

  get position() {
    return new Phaser.Math.Vector2(this._gameObject.x, this._gameObject.y);
  }

  get displayWidth() {
    return this._gameObject.displayWidth;
  }

  get displayHeight() {
    return this._gameObject.displayHeight;
  }

  get widthAspectRatio() {
    return this._gameObject.width / this._gameObject.height;
  }

  get heightAspectRatio() {
    return this._gameObject.height / this._gameObject.width;
  }

  get displayToOriginalWidthRatio() {
    return this._gameObject.displayWidth / this._gameObject.width;
  }

  get displayToOriginalHeightRatio() {
    return this._gameObject.displayHeight / this._gameObject.height;
  }

  setDisplayWidth(width, matchHeightToAspectRatio = false) {
    this._gameObject.displayWidth = width;
    if (matchHeightToAspectRatio) {
      this.setDisplayHeightToAspectRatio();
    }
  }

  setDisplayWidthAsScreenWidth(matchHeightToAspectRatio = false) {
    this.setDisplayWidth(this._scaleManager.width, matchHeightToAspectRatio);
  }

  setDisplayHeight(height, matchWidthToAspectRatio = false) {
    this._gameObject.displayHeight = height;
    if (matchWidthToAspectRatio) {
      this.setDisplayWidthToAspectRatio();
    }
  }

  setDisplayHeightAsScreenHeight(matchWidthToAspectRatio = false) {
    this.setDisplayHeight(this._scaleManager.height, matchWidthToAspectRatio);
  }

  setDisplayHeightToAspectRatio() {
    this._gameObject.displayHeight = this._gameObject.displayWidth * this.heightAspectRatio;
  }

  setDisplayWidthToAspectRatio() {
    this._gameObject.displayWidth = this._gameObject.displayHeight * this.widthAspectRatio;
  }

  setDisplaySize(width, height) {
    this._gameObject.displayWidth = width;
    this._gameObject.displayHeight = height;
  }

  setToOriginalDisplaySize() {
    this.setDisplaySize(this._gameObject.width, this._gameObject.height);
  }

  setToScaleDisplaySize(percent) {
    this.setDisplaySize(percent * this._gameObject.width, percent * this._gameObject.height);
  }

  /**
   * Set size as contain
   * @param {number} maxWidth
   * @param {number} maxHeight
   */
  setMaxPreferredDisplaySize(maxWidth, maxHeight) {
    if (maxWidth * this.heightAspectRatio > maxHeight) {
      this.setDisplayHeight(maxHeight, true);
    } else {
      this.setDisplayWidth(maxWidth, true);
    }
  }

  /**
   * Set size as cover
   * @param {number} minWidth
   * @param {number} minHeight
   */
  setMinPreferredDisplaySize(minWidth, minHeight) {
    if (minWidth * this.heightAspectRatio < minHeight) {
      this.setDisplayHeight(minHeight, true);
    } else {
      this.setDisplayWidth(minWidth, true);
    }
  }

  setToScreenPercentage(percentage = 0) {
    const DEFAULT_SCREEN_WIDTH = 1080;
    const value = percentage || this._scaleManager.width / DEFAULT_SCREEN_WIDTH;
    this.setDisplayWidth(value * this._gameObject.width, true);
  }

  getDisplayPositionFromCoordinate(x, y = x) {
    return new Phaser.Math.Vector2(
      this._gameObject.x + (x - this._gameObject.originX) * this._gameObject.displayWidth,
      this._gameObject.y + (y - this._gameObject.originY) * this._gameObject.displayHeight,
    );
  }
}

export default Transform;
