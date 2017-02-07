'use strict';

let express = require('express'), path = require('path');

let app = express();

app.use(express.static(__dirname + '/client'));

app.set('APP_HOST', 'localhost');
app.set('APP_PORT', 1234);

app.listen(app.get('APP_PORT'), app.get('APP_HOST'), () => {
    console.log("JSC server starting on " + app.get('APP_HOST') + ' ' + app.get('APP_PORT'));
});