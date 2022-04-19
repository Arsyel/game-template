import SceneInfo from "../../const/SceneInfo";
import { hidePreloadScreen } from "../../helpers/ElementControl";

class LoadSceneController extends Phaser.Scene {
  constructor() {
    super({ key: SceneInfo.LOADING.key });

    this.onCompleteLoadBoot = this.onCompleteLoadBoot.bind(this);
    this.onCompleteLoad = this.onCompleteLoad.bind(this);
  }

  init() {
    console.log('Init Load');
  }

  loadBootResources() {
    // LOAD LOADING FILE HERE!
    this.load.image('logo', 'img/logo.png');
  }

  preload() {
    this.load.once('complete', this.onCompleteLoadBoot);
    this.loadBootResources();
    this.load.start(); // Execute: onCompleteLoadBoot
  }

  loadGameResources() {
    // LOAD ALL GAME FILE HERE!
  }

  onCompleteLoadBoot() {
    hidePreloadScreen();

    this.load.once('complete', this.onCompleteLoad);
    this.loadGameResources();
    this.load.start(); // Execute: onCompleteLoad
  }

  onCompleteLoad() {
    this.load.removeAllListeners();
    this.scene.start(SceneInfo.TITLE.key);
  }
}

export default LoadSceneController;
