var path = require('path');

module.exports = {
    mode: 'production',
    entry: './EmojiPicker.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'EmojiPicker.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}