
'use strict'

var app = require('./app');
var port = process.env.PORT || 8080;

app.listen(port,function(){
    console.log('API REST FAVORITOS http://localhost:' +port);
});


