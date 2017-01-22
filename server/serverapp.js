//------------ Requirements ------------//
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');




//------------ Middlware ------------//
app.use(express.static(path.join(__dirname, './public')));


//------------ Express Routes ------------//
app.use('/', index);


//------------ Set Port & Start Server ------------//
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('listening on port: ', app.get('port'));
});
