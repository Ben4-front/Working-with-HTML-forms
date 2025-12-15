const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production', // Режим продакшн для деплоя
  entry: './src/js/App.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // ВАЖНО: пустая строка делает пути относительными (src="main.js")
    // Это чинит 404 ошибку на GitHub Pages
    publicPath: '', 
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};