const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "./src/index.tsx"),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@utils": path.resolve(__dirname, 'src/utils/'),
            "@assets": path.resolve(__dirname, 'src/assets/'),
            "@components": path.resolve(__dirname, 'src/components/'),
            "@contexts": path.resolve(__dirname, 'src/contexts/'),
            "@pages": path.resolve(__dirname, 'src/pages/'),
            "@stylesheets": path.resolve(__dirname, 'src/stylesheets/'),
        },
    },
    devServer: {
        historyApiFallback: {
            index: "/index.html"
        },
        port: 3000,
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     use: ["babel-loader"],
            // },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            favicon: path.join(__dirname, "public", "favicon.ico"),
        }),
    ],
};