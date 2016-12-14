const path = require('path');
const fs = require('fs');
const scss = require('scss-tokenizer');

const createColorsContext = () => {
    const scssPath = path.resolve(__dirname, '..', 'scss', '_colors.scss');
    const configPath = path.resolve(__dirname, '..', 'src', 'components', 'colors', 'colors.config.json');
    const isImportantToken = (t) => {
        return t[0] !== 'scssComment' && t[0] !== 'space' && t[0] !== '$' && t[0] !== '*' && t[0] !== '/'
            && t[0] !== ';' && t[0] !== ':' && t[0] !== 'startComment' && t[0] !== 'endComment';
    }
    let config = require(configPath);

    let contents = fs.readFileSync(scssPath, { encoding: 'utf8' });

    let tokens = scss.tokenize(contents);
    config.context.colors = tokens
        .reduce((toks, t) => {
            if(t[0] === 'newline') {
                toks.push([])
            } else if (isImportantToken(t)) {
                toks[toks.length - 1].push(t);
            }
            return toks;
        }, [[]])
        .filter(t => t.length > 0)
        .map((toks) => {
            let t = {};

            t.name = toks[0][1];
            t.valueType = toks[1][0] === 'word' ? 'value' : 'reference';
            t.value = toks[1][1];

            return t;
        });
    fs.writeFileSync(configPath, JSON.stringify(config, null, 4));
}

module.exports = createColorsContext;
