
function propNameFromArgName(name) {
    if(name.indexOf('--') === 0) {
        name = name.substr(2);
    }

    name.replace(/^-+/, '');
    name.replace(/-/,'_');
    return name;
}

function getArgValue(arg, i) {
    if( arg.indexOf('=') >= 0) {
        return arg.substr(arg.indexOf('=')+1);
    }
    return process.argv[i+1];
}

function parseArgValue(searchArg, arg, i) {
    var name = searchArg.name;
    var value;
    if(arg.indexOf(name) === 0) {
        if(searchArg.datatype) {
            value = getArgValue(arg, i);
        } else {
            value = true;
        }
    }
    return value;
}

function parseArgs(searchArgs) {
    var parsed = {};
    process.argv.forEach(function(arg, i) {
        searchArgs.forEach(function(searchArg) {
            var propName = propNameFromArgName(searchArg.name);
            var value = parseArgValue(searchArg, arg, i);
            if(value) {
                parsed[propName] = value;
            }
        });
    });

    return parsed;
}

module.exports = {
    parse: parseArgs
};


