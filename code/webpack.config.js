module.exports = {
  entry: [ './app.js' ],
  output: {
      filename: './public/bundle.js'
    },
  module: {
      loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/  },
          ]
    }
}
