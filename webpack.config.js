const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /locales/,
      loader: '@alienfast/i18next-loader',
      // options here
      //query: { overrides: [ '../node_modules/lib/locales' ] }
    }
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
      GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY),
    }}),
  ],
}
