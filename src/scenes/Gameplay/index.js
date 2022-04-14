import SceneInfo from "../../const/SceneInfo";

class GameplaySceneController extends Phaser.Scene {
  constructor() {
    super({ key: SceneInfo.GAMEPLAY.key });
  }

  init() {
    console.log('Init Gameplay');
  }

  create() {
    // this.view.create();
    console.log('GAWE EUY!');
  }
}

export default GameplaySceneController;
