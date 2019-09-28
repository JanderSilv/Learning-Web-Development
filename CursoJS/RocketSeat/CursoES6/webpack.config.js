// WebPack é um serviço que disponibiliza uma forma de trabalhar com vários arquivos JS na aplicação

module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], // indica qual o arquivo principal
    output: { // indica qual arquivo deve enviar o código convertido pra antes do ES6
        path: __dirname + '/public', // dirname eh uma váriavel global que se refere ao diretório do arquivo webpack
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public' // caminho que vai abrir o servidor
    },
    module: {
        rules: [
            {
                test: /\.js$/, //expressão regular que busca se o arquivo termina com JS
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};

/* rules: define como webpack deve se comportar quando o usuário tentar importar novos arquivos JS
* Dentro, define qual loader vai usar
*/