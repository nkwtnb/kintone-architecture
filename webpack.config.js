const { resolve } = require('path');

module.exports = {
  entry: './src/presentation/index.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts$/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript"
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};