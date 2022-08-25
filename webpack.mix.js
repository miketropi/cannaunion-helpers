const mix = require('laravel-mix');

/**
 * Backend
 */
mix
  .js('./src/backend.js', 'dist/ch-backend.bundle.js')
  .react()
  .sass('./src/scss/backend.scss', 'css/ch-backend.bundle.css')
  .setPublicPath('dist');

/**
 * Frontend 
 */
mix
  .js('./src/main.js', 'dist/ch.bundle.js')
  .react()
  .sass('./src/scss/main.scss', 'css/ch.bundle.css')
  .setPublicPath('dist');