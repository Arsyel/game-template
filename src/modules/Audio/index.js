class AudioController {
  /** @private @type {AudioController} */
  static _instance;

  /** @private @type {Map<string, Phaser.Sound.BaseSound>} */
  _sfxCache;

  /** @private */
  constructor() {}

  static getInstance() {
    if (!AudioController._instance) {
      AudioController._instance = new AudioController();
    }
    return AudioController._instance;
  }

  /**
   * @param {Phaser.Scene} scene
   */
  init(scene) {
    return new Promise(resolve => {
      this._scene = scene;
      this._sfxCache = new Map();
      this._enableAudio = true;

      this._scene.sound.pauseOnBlur = true;
      this.registerVisibilityChangeEvent();
      resolve();
    });
  }

  registerVisibilityChangeEvent() {
    const gameEvent = this._scene.game.events;
    gameEvent.on('hidden', () => {
      this.pauseBGM();
    });
    gameEvent.on('visible', () => {
      if (this._enableAudio) this.unmute();
    });
  }

  playBGM(key, restart = true, config = null) {
    if (!restart && this._bgm?.isPlaying) return;
    this.stopBGM();

    if (!this._enableAudio) return;

    const bgmConfig = config ?? { loop: true };
    if (this._bgm?.key === key) {
      this._bgm.play(bgmConfig);
    } else {
      this._bgm = this._scene.sound.add(key, bgmConfig);
      this._bgm.play();
    }
  }

  stopBGM() {
    if (this._bgm?.isPlaying) this._bgm.stop();
  }

  pauseBGM() {
    if (this._bgm?.isPlaying) this._bgm.pause();
  }

  resumeBGM() {
    if (this._bgm?.isPaused) this._bgm.resume();
  }

  setBGMVolume(volume) {
    if (this._bgm instanceof Phaser.Sound.WebAudioSound) this._bgm.setVolume(volume);
  }

  playSFX(key, config = { force: true, sfxConfig: null }) {
    if (!this._enableAudio) return;
    if (!this._sfxCache.has(key)) {
      const sfx = this._scene.sound.add(key, config.sfxConfig);
      sfx.play();
      this._sfxCache.set(key, sfx);
    } else {
      if (!config.force && this._sfxCache.get(key)?.isPlaying) return;
      this._sfxCache.get(key)?.play(config.sfxConfig);
    }
  }

  unmute() {
    this._enableAudio = true;
    this.resumeBGM();
  }

  mute() {
    this._enableAudio = false;
    this.pauseBGM();
  }

  isMuted() {
    return this._enableAudio;
  }

  clearSFXCache() {
    for (const [, sfx] of this._sfxCache) {
      sfx.destroy();
    }
    this._sfxCache.clear();
  }
}

export default AudioController;
