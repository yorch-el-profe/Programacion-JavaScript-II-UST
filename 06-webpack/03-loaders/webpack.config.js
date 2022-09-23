module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  // Loader permite cargar cosas que no sean JS y JSON
  module: {
    rules: [
      {
        // Qué extensiones voy a soportar (en este caso .css)
        test: /\.css$/i,
        // Qué va a usar para cargar los css
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}