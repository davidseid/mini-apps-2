module.exports = {
  entry: [
    './client/app.jsx'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }, 
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}