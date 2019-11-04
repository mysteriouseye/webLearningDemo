const webpack = require('webpack');
module.exports ={
    devtool : 'source-map',
    entry: './app.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] }
                    },
                ],
            },
        ]
    },
   /* plugins: [
        //new webpack.optimize.UglifyJsPlugin(), webpack 4已移除 使用optimization.minimize属性
    ]*/
    optimization: {
        minimize: true,
    }
}