'use strict';
const pkg = require('./package.json'),
      path = require('path');

const f = require('@frctl/fractal').create();

let getPath = (p) => {
    return path.join(__dirname, p);
};
f.set('project.title', pkg.name);
f.set('project.version', pkg.version);
f.set('project.author', pkg.author);

/* configure components */
f.components.set('path', getPath('src/components'));
f.components.set('default.preview', '@preview');

/* configure documentation */
f.docs.set('path', getPath('src/docs'));

/* configure webview */
f.web.set('static.path', getPath('public'));
f.web.set('builder.dest', getPath('build'));

module.exports = f;
