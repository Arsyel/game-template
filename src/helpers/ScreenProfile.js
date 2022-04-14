const SMALL_RESOLUTION = 480;
const ASPECT_RATIO = 9 / 16;

const isSmallResolution = () => {
  return window.innerWidth < SMALL_RESOLUTION;
};

// Avoid bleeding on edge screen
const toEven = val => {
  const result = Math.floor(val);
  return result + (result % 2);
};

const calculateScreen = () => {
  const dprModifier = isSmallResolution() ? window.devicePixelRatio : 1;
  return {
    width: window.innerWidth * dprModifier,
    height: window.innerHeight * dprModifier,
  };
};

const portraitConversion = config => {
  const height = config.height;
  const isLandscape = config.width > height;
  const width = !isLandscape ? config.width : height * ASPECT_RATIO;
  return {
    width: toEven(width),
    height: toEven(height),
  };
};

function ScreenProfile() {
  return portraitConversion(calculateScreen());
}

export default ScreenProfile;
