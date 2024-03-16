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
		"woff",
		"woff2"
	]);
	eleventyConfig.addPassthroughCopy([
		"css",
		"js",
	]);

	return {
		dir: {
			input: "src",
			includes: "_includes",
			output: "dist"
		}
	};
};
