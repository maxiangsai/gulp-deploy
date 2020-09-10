'use strict'
const path = require('path')
const plugins = require('gulp-load-plugins')()
const cwd = process.cwd();
let config = {};

try {
    const settings = require(path.join(cwd, 'gulp.config.js'))
    config = Object.assign({}, config, settings)
} catch (error) {
    console.error(error)
}

const gulpSSH = new plugins.ssh({
  ignoreErrors: false,
  sshConfig: {
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password
  }
})

const shell = () => {
  return gulpSSH
    .shell(config.commands)
}

module.exports = {
  default: shell
}
