const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
	eleventyConfig.setTemplateFormats([
		// Templates:
		"html",
		"njk",
		"md",
		// Static Assets:
		"css",
		"jpeg",
		"jpg",
		"png",
		"svg",
		"txt",
		"webmanifest",
		"woff",
		"woff2"
	]);
	eleventyConfig.addPassthroughCopy([
		"css",
		"js",
		"txt",
		"webmanifest",
		"woff",
		"woff2"
	]);
	eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
	});

	return {
		dir: {
			input: "src",
			includes: "_includes",
			output: "dist"
		}
	};
};
