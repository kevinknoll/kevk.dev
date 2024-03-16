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
		"txt",
	]);

	return {
		dir: {
			input: "src",
			includes: "_includes",
			output: "dist"
		}
	};
};
