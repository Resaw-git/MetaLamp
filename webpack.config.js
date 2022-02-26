const path = require('path')
const PugPlugin = require('pug-plugin')

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/', // must be defined any path, `auto` is not supported yet
  },
  entry: {
    index: './src/pug/pages/index.pug', // the `pug-plugin` extract HTML from entry file
  },
  plugins: [
    new PugPlugin(), // add it to handle pug files in entry
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: PugPlugin.loader, // the pug-plugin already contain this pug-loader
      },
    ],
  },
};