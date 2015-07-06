var fs = require('fs'),
    path = require('path'),
    argparse = require('./argparse');

var repoRoot = path.resolve(__dirname, '..'),
    indentDepth = 2,
    encoding = 'utf-8';


function updatePackageVersion(version) {
    var file = path.resolve(repoRoot, 'package.json');
    var pkg = JSON.parse(fs.readFileSync(file, encoding));

    pkg.version = version;

    fs.writeFileSync(file, JSON.stringify(pkg, null, indentDepth));
}

function updateSiteVersion(version) {
    var file = path.resolve(repoRoot, '_config.yml');
    var config = fs.readFileSync(file, encoding);

    config = config.replace(/version: .*/, 'version: ' + version);

    fs.writeFileSync(file, config);
}

var version = null;

var args = [];
args.push({ name: 'version', datatype: 'string'});

var parsed = argparse.parse(args);


if (!parsed.version) {
    console.log('version missing, use "version=X.X.X" or "version X.X.X"');
}
else {
    console.log('version: ' + parsed.version);
    updatePackageVersion(parsed.version);
    updateSiteVersion(parsed.version);
}

