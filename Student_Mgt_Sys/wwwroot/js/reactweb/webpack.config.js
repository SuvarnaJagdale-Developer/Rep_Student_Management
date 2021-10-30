
 
module.exports = {
    entry: {
        index: "./ReactScript/index.js"
    },
    output: {
        path: __dirname +"/dist",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
      },
    watch: true,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    
                }
              

                
               

            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            },
           
        ]
    }
}