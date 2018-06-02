var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/bloclchain', function( req, res ){
    
});

app.post('/transaction', function(req, res){
    console.log(req.body);
    res.send('The amount of the transaction is ${req.body.amount} bitcoin');
});

app.get('/mine', function(req, res){

});




app.listen(3000, function(){
    console.log('Listening on port 3000...');
});