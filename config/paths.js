'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appDist: resolveApp('dist'),
  appHtml: resolveApp('index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  COMPONENTS: resolveApp('src/components'),
  appNodeModules: resolveApp('node_modules')
};
