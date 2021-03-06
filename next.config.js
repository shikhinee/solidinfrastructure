const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    // Making it easier to import variables & mixins via _global.scss;
    includePaths: [path.join(__dirname, "sass")],
  },
};
