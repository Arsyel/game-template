import BootSceneController from "../scenes/Boot";
import GameplaySceneController from "../scenes/Gameplay";
import LoadSceneController from "../scenes/Load";
import TitleSceneController from "../scenes/Title";

const SceneInfo = {
  BOOT: {
    key: 'BootScene',
    scene: BootSceneController,
  },
  LOADING: {
    key: 'LoadingScene',
    scene: LoadSceneController,
  },
  TITLE: {
    key: 'TitleScene',
    scene: TitleSceneController,
  },
  GAMEPLAY: {
    key: 'GameplayScene',
    scene: GameplaySceneController,
  },
};

export default SceneInfo;
