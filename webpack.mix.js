let mix = require('laravel-mix');
let webpack = require('webpack');

mix.setPublicPath('dist').
  js('src/js/app.js', 'dist/js').
  sass('src/scss/storybook/app.scss', 'dist/css').
  copy('src/index.html', 'dist/index.html')
  browserSync({
      port: '8003',
      proxy: false,

      server: {
        baseDir: 'dist',
        directory: true,
      },
    },
  );
mix.setPublicPath('dist');
mix.version();
mix.sourceMaps();

// // fonts
// config.module.rules.push({
//   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//   use: [
//     {
//       loader: 'file-loader',
//       query: {
//         name: '[name].[ext]'
//       }
//     }
//   ],
//   include: path.resolve(__dirname, '../')
// });
//
// // don't forget to return.
// return config
// };
