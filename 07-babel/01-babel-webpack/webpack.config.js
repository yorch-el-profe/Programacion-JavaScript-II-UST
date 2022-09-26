module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // Soporte extensiones .mjs y .js
        test: /\.m?js$/,
        // No tome en cuenta la carpeta node_modules
        exclude: /node_modules/,
        // Configuración de Babel
        use: {
          loader: 'babel-loader',
          options: {
            // Incluya el plugin llamado @babel/preset-env
            // Permite utilizar las características de ES2015+
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  }
}