const path = require('path');

    module.exports = {
      entry: {
        app:"./src/app.ts",
        authcheck:"./src/authcheck.ts",
        authsignin:"./src/authsignin.ts",
        authsignup:"./src/authsignup.ts",
        authresetpassword:"./src/authresetpassword.ts",
        authprofile:"./src/authprofile.ts",
      }, // if it needs, change file name
      mode: 'development',     // development or production , add this line from (https://webpack.js.org/ > Documentation > Configuration > Mode > Usage)
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      output: {
        filename: '[name].js', // eg. app.js , authcheck.ts, ...
        path: path.resolve(__dirname, 'dist'), // change to public
      },
      devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        },
    };