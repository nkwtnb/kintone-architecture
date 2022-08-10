const { resolve } = require('path');

module.exports = {
  entry: './src/presentation/index.tsx',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};