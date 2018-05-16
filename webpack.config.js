const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      // Babel-loader: converts ES6 and JSX
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/, //CSS and SCSS files
        //use: allows us to use multiple loaders on the files
        //NB: For some reason style-loader comes before css-loader else build fails
        use: [
          /* Style-loader : Injects the css style tag into our page */
          "style-loader",
          /* CSS Loader : Creates a JS representation of the css rules */
          "css-loader",
          // Process SASS (.scss) files
          "sass-loader" //Requires node-sass to be installed locally
        ]
      }
    ]
  },
  //Source Maps
  devtool: "cheap-module-eval-source-map", //suitable for development, switch to a production option when in production
  //Use Webpack DevServer instead of liveserver
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
