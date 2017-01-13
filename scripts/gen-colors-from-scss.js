const path = require('path');
const fs = require('fs');
const scss = require('scss-tokenizer');

const createColorsContext = () => {
    const scssPath = path.resolve(__dirname, '..', 'scss', '_colors.scss');
    const configPath = path.resolve(__dirname, '..', 'src', 'docs', 'colors.config.json');
    const isImportantToken = (t) => {
        return t[0] !== 'scssComment' && t[0] !== 'space' && t[0] !== '$' && t[0] !== '*' && t[0] !== '/'
            && t[0] !== ';' && t[0] !== ':' && t[0] !== 'startComment' && t[0] !== 'endComment';
    }
    const isCommentToken = (t) => {
        return t[0] === 'scssComment';
    }
    let config = require(configPath);

    let contents = fs.readFileSync(scssPath, { encoding: 'utf8' });

    let tokens = scss.tokenize(contents);
    let currentGroup = 'default';
    config.context.colors = tokens
        .reduce((toks, t) => {
            //console.log(t);
            if(t[0] === 'newline') {
                toks[currentGroup].push([]);
                //console.log('toks', toks);
                //toks.push([])
            } else if (isCommentToken(t) && t[1].includes('Group'))  {
                let splitComment = t[1].split(' ');
                currentGroup = splitComment[splitComment.length - 1];
                toks[currentGroup] = [];
            } else if (isImportantToken(t)) {
                toks[currentGroup][toks[currentGroup].length - 1].push(t);
            }
            return toks;
        }, { "default": []});
    
    for (var prop in config.context.colors) {
        if (!config.context.colors.hasOwnProperty(prop)) {
            continue;
        }
       let mappedProp = config.context.colors[prop]
            .filter(t => t.length > 0)
            .map((toks) => {
                let t = {};

                t.name = toks[0][1];
                t.valueType = toks[1][0] === 'word' ? 'value' : 'reference';
                t.value = toks[1][1];

                return t;
            });
        config.context.colors[prop] = mappedProp;
    }

    console.log(config.context.colors);

        // .filter(t => t.length > 0)
        // .map((toks) => {
        //     let t = {};

        //     t.name = toks[0][1];
        //     t.valueType = toks[1][0] === 'word' ? 'value' : 'reference';
        //     t.value = toks[1][1];

        //     return t;
        // });
    //console.log(config.context.colors);
    fs.writeFileSync(configPath, JSON.stringify(config, null, 4));
}

module.exports = createColorsContext;
