let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('react.jsx', 'compiled')
	.scripts([
		'node_modules/jquery/dist/jquery.slim.js',
		'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
	], 'compiled/app.js')
   .sass('style.scss', 'compiled')
   .options({
      processCssUrls: false
   });