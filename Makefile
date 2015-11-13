
bundle: bundle.js

bundle.js:
	browserify -t [ babelify --presets [ react ] ] ./static/js/main.js -o ./bundle/bundle.js
