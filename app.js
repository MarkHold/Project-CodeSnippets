/**
 * Created by markuslyconhold on 08/03/17.
 */
/**
 * Created by markuslyconhold on 29/11/16.
 */

var express = require('express');
var port = 4000;
app = express();



//app.get takes in 2 parameters, the url that you want to map and the function that wanna get

// req = requirment, res = response


app.get('/', function(req, res) {

    res.send(index.html);

});




app.listen(port);
console.log("listening on port "+port +"!");
