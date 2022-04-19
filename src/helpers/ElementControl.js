export function showPreloadScreen() {
  document.getElementById("game-preload-screen").style.setProperty("display", "block");
}

export function hidePreloadScreen() {
  document.getElementById("game-preload-screen").style.setProperty("display", "none");
}

export function showLoadingSpinner() {
  document.getElementById("loading-spinner").style.setProperty("display", "inline-block");
}

export function hideLoadingSpinner() {
  document.getElementById("loading-spinner").style.setProperty("display", "none");
}
