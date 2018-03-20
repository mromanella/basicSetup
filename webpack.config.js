module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index.ts',
    output: {
        filename: './bundle.js'
    },
    devServer: {
        contentBase: "./dist",
        compress: true,
        port: 9000
    },
    watch: true,
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
}