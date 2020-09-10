'use strict'

const plugins = require('gulp-load-plugins')()
const { host, port, password, username, commands } = require('./gulp.config')

const gulpSSH = new plugins.ssh({
  ignoreErrors: false,
  sshConfig: {
    host,
    port,
    username,
    password
  }
})

const shell = () => {
  return gulpSSH
    .shell(commands)
}

module.exports = {
  default: shell
}
