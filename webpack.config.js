var webpack = require('webpack');

module.exports = {
    entry:__dirname+'/src/App.js',
    output:{
        path:__dirname+'/public',
        filename:'bundle.js'
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel',
            query: {
                presets: ['es2015','react']
            }
        }]
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
}