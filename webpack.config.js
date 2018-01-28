module.exports = {
    entry:'./src/main.js',
    output:{

        filename:'bundle.js',

    },
    resolve:{
        alias:{
            vue:'vue/dist/vue.js'
        }
    },
    module: {
        loaders:[
            {
              test:/\.js$/,
              exclude:/node_modules/,
              loader:'babel-loader'
            },
            {
            test:/\.vue$/,
            exclude:/node_modules/,
            loader: 'vue-loader',
                options: {
                    loaders:{
                        scss:'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.(mp4|ogg|svg|eot|ttf|woff|woff2|jpg|png)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    devServer:{
        compress:true,
        port:3388
    },
    devtool: "source-map"
};