class ScreenUtilityController {
  /** @private @type {ScreenUtilityController} */
  static _instance;

  /** @private */
  _defaultWidth = 1080;

  /** @private */
  _defaultHeight = 1920;

  /** @private */
  constructor() {}

  static getInstance() {
    if (!ScreenUtilityController._instance) {
      ScreenUtilityController._instance = new ScreenUtilityController();
    }
    return ScreenUtilityController._instance;
  }

  /**
   * @param {Phaser.Scale.ScaleManager} scaleManager
   * @param {number} defaultWidth
   * @param {number} defaultHeight
   * @returns {Promise<void>}
   */
  init(scaleManager, defaultWidth = 1080, defaultHeight = 1920) {
    return new Promise(resolve => {
      this._scaleManager = scaleManager;
      this.setDefaultScreenSize(defaultWidth, defaultHeight);
      resolve();
    });
  }

  get width() {
    return this._scaleManager.width;
  }

  get height() {
    return this._scaleManager.height;
  }

  get ratio() {
    return this.width / this.height;
  }

  get centerX() {
    return this.width * 0.5;
  }

  get centerY() {
    return this.height * 0.5;
  }

  get screenPercentage() {
    return this.width / this._defaultWidth;
  }

  get defaultScreenSize() {
    return {
      width: this._defaultWidth,
      height: this._defaultHeight,
    };
  }

  setDefaultScreenSize(width, height) {
    this._defaultWidth = width;
    this._defaultHeight = height;
  }
}

export default ScreenUtilityController;
