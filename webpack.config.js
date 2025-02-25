const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development", // или "production"        
    entry: "./src/index.js",
    output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    },
    module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        },
        },
        {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
    ],
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    ],
    devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000,
    },
};
