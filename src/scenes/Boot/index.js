import SceneInfo from "../../const/SceneInfo";
import ScreenUtilityController from "../../modules/ScreenUtility";

class BootSceneController extends Phaser.Scene {
  constructor() {
    super({ key: SceneInfo.BOOT.key });
  }

  init() {
    console.log('Init Boot');
    Promise.allSettled([
      ScreenUtilityController.getInstance().init(this.scale),
      // AudioController.getInstance().init(this),
    ])
      .then(() => {
        this.scene.launch(SceneInfo.LOADING.key);
      })
      .catch(error => Error('BooScene::\n' + error));
  }
}

export default BootSceneController;
