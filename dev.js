const { spawn, exec } = require('child_process');
const path = require('path')

/**
 *  build typescript
 */
spawn('rollup', [
  '-c',
  '-w'
], {
    shell: true,
    stdio: 'inherit'
  });

/**
 *  build stylus
 */

spawn('stylus.cmd', [
  // '/c',
  // 'stylus',
  '-w',
  '-c', 'style/app.styl',
  '-u', './node_modules/autoprefixer-stylus', '--with', "{ browsers: ['last 10 versions','ie 8', 'ie 9'] }",
  '-I', './style',
  '-o', 'dist/'
], {
    // stdio: 'inherit'
  })

/**
 * start server
 */
spawn('ss-server', [
  'run'
], {
    shell: true,
    // stdio: 'inherit'
  })