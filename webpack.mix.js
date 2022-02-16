// webpack.mix.js

let mix = require('laravel-mix');

mix.js('resources/src/app.js', 'dist').js('resources/src/file2.js', 'dist').sass('resources/src/styles.scss', 'dist');