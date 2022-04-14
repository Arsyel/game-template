import SceneInfo from "../../const/SceneInfo";

class TitleSceneController extends Phaser.Scene {
  constructor() {
    super({ key: SceneInfo.TITLE.key });
  }

  init() {
    console.log('Init Title');
  }

  create() {
    this.scene.start(SceneInfo.GAMEPLAY.key);
  }
}

export default TitleSceneController;
