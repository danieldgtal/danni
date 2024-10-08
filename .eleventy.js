module.exports = function (eleventyConfig) {
	// Adding passthrough copy for CSS and img folders within the _includes/head directory
	eleventyConfig.addPassthroughCopy("css"); // For CSS files
	eleventyConfig.addPassthroughCopy("img"); // For image files
	eleventyConfig.addPassthroughCopy("js"); // JavaScript files

	return {
		dir: {
			input: ".", // Where your files are stored, adjust accordingly
			includes: "_includes", // Ensure this matches your folder structure
			output: "_site", //Output directory
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		templateFormats: ["njk", "html", "md"], // Specify Nunjucks format
	};
};
