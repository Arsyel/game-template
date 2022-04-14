import GameplayView from "./view";
import SceneInfo from "../../const/SceneInfo";
import ScreenUtilityController from "../../modules/ScreenUtility";

class GameplaySceneController extends Phaser.Scene {
  constructor() {
    super({ key: SceneInfo.GAMEPLAY.key });
  }

  init() {
    console.log('Init Gameplay');
    this.view = new GameplayView(this, ScreenUtilityController.getInstance());
  }

  create() {
    this.view.create();
  }
}

export default GameplaySceneController;
