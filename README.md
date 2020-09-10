# gulp-deploy
<p align="center">
  <p align="center">The Easy Deploy Tool</p>
</p>

## Installation

yarn add mxs-deploy --dev

touch gulp.config.js

## Sample `gulp.config.js`

This file will give you a config.

```js
module.exports = {
  host: '1.2.3.4',
  port: '22',
  username: 'root',
  password: 'xxx',
  commands: [ // shell command
    'cd /root/xx',
    'git pull origin master'
  ]
}
```
