//zadeklarowanie zmiennej, w której będziemy przechowywać funkcjonalności pakietu Expressa:
var express = require('express');

//stworzenie aplikacji Express:
var app = express();

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu');
    next();
});

//aplikacja odpowiada Hello world gdy odbierzemy wysłane zapytanie GET na adres strony domowej:
app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/store', function(req, res) {
    res.send('To jest sklep');
});

var server = app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
