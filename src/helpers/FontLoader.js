const loadFont = (key, url) => {
	return new Promise((resolve, reject) => {
		if (!url) return resolve();

		const path = url;
		const element = document.createElement("style");
		const styles = `
      @font-face {
        font-family: "${key}";
        src: url("${path}");
      }
    `;
		element.innerHTML = styles;
		document.head.appendChild(element);

		document.fonts.load(`10pt "${key}"`)
			.then(() => resolve())
			.catch(() => reject(Error("load font error:" + {key, path})));
	});
}

/**
 * @param {[*]} fonts
 */
function FontLoader(fonts) {
  return Promise.all(fonts.map(({ key, url }) => loadFont(key, url)));
}

export default FontLoader;
