// The base directory that we want to use
const baseDirectory = "dist";

module.exports = {
  // The current mode, defaults to production
  mode: "development",

  // The entry points ("location to store": "location to find")
  entry: {
    "public/js/scripts": [`./${baseDirectory}/public/ts/scripts`],
  },

  // Used for using source maps (used for debugging)
  devtool: "eval-source-map",

  // The location where bundle are stored
  output: {
    filename: "[name].js",
  },
};
