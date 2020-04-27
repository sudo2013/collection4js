const path = require('path');

module.exports = {
    mode: "none",
    entry: './src/index.ts',
    devtool: 'source-map',
    output: {
        path: path.resolve(process.cwd(), './dist'),
        publicPath: '/dist/',
        filename: 'collection4js.common.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    externals: {
    },
    plugins: [
    ]
};
