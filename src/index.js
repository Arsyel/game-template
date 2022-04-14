import './css/index.css';

import { CONFIG } from './config';
import SceneInfo from './const/SceneInfo';
import ScreenProfile from './helpers/ScreenProfile';

const screenProfile = ScreenProfile();

/** @type {Phaser.Types.Core.GameConfig} */
const gameConfig = {
	type: /Firefox/i.test(navigator.userAgent) ? Phaser.WEBGL : Phaser.AUTO,
	parent: "game-content",
	scene: Object.values(SceneInfo).map(({ scene }) => scene),
	scale: {
    mode: Phaser.Scale.FIT,
    width: screenProfile.width,
    height: screenProfile.height,
    autoRound: true,
  },
	render: {
		antialias: true,
		pixelArt: false,
		roundPixels: false,
	},
	autoFocus: true,
};

(() => new Phaser.Game(gameConfig))();

console.log(CONFIG);