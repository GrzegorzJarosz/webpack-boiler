const fs = require('fs');

//src-js folder
fs.mkdirSync('./src/js', {
    recursive: true
}, (err) => {
    if (err) throw err;
});
//src-scss folder
fs.mkdirSync('./src/styles', {
    recursive: true
}, (err) => {
    if (err) throw err;
});
console.log('folders created')

//main styles file
fs.appendFileSync('./src/styles/styles.scss', '', (err) => {
    if (err) throw err;
    console.log('styles.scss file was created');
});

//text for index.html
const indexHtmlContent = '<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Document<\/title><body><p>helloworld<\/p><\/body><\/html>';

//index.html
fs.appendFileSync('./src/index.html', indexHtmlContent, (err) => {
    if (err) throw err;
    console.log('index.html file was created');
});

//index.js
fs.appendFileSync('./src/index.js', 'import \'.\/styles\/styles.scss\'', (err) => {
    if (err) throw err;
    console.log('index.js file was created');
});


//text-for-webpack-config-file
const webpackConfigContent = ' const path = require(\'path\'); const {CleanWebpackPlugin}=require(\'clean-webpack-plugin\'); const HtmlWebpackPlugin=require(\'html-webpack-plugin\'); const MiniCssExtractPlugin=require(\"mini-css-extract-plugin\"); module.exports={ entry:\'.\/src\/index.js\', output:{ filename:\'bundle.js\', path:path.resolve(__dirname,\'dist\')}, devServer:{ contentBase:\'.\/dist\'}, plugins:[ new CleanWebpackPlugin(), new HtmlWebpackPlugin({ title:\'Output\', template:\'.\/src\/index.html\'}), new MiniCssExtractPlugin({ filename:\"[name].css\", chunkFilename:\"[id].css\"})], module:{ rules:[{ test:\/\.scss$\/, use:[ MiniCssExtractPlugin.loader,\'css-loader\',\'sass-loader\']}]}};';

//webpack-config.js
fs.appendFileSync('./webpack.config.js', webpackConfigContent, (err) => {
    if (err) throw err;
    console.log('webpack config file was created');
});
console.log('...done');
console.log('run npm start');