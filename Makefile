
bundle: bundle.js

bundle.js:
	browserify -t [ babelify --presets [ react ] ] ./lib/*.js -o ./bundle/bundle.js
