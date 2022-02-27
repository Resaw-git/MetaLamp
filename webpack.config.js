const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const PugPlugin = require('pug-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '', // must be defined any path, `auto` is not supported yet for pug-plugin
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pug/index.pug'),
            filename: 'index.html',
        }),
        new HtmlWebpackPugPlugin(),
        new PugPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.pug$/,
            use: PugPlugin.loader
          },
        ],
      },
}