let webpack = require("webpack");
let webpackDevMiddleWare = require('webpack-dev-middleware');
let webpackHotMiddleWare = require('webpack-hot-middleware');
let config = require('./webpack.config');
let app = new (require('express'))();
let port = 9300;


let compiler = webpack(config);

app.use(webpackDevMiddleWare(compiler));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
});

app.listen(port,function(error){
    if(error){
        console.log(error);
    }else{
        console.log("==> &copy; 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
