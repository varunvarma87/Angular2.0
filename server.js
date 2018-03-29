/*eslint no-console:0 */
var express = require('express');
var app = express();
var path=require('path');
var bodyParser = require('body-parser');
var HolidayAPI = require('node-holidayapi');
var hapi = new HolidayAPI('89ab0ea8-b3c8-4485-9eed-f5c813cbc59a').v1;
var fs = require('fs');

var DIR = './';

app.use(express.static(path.join(__dirname, 'config/dist')));
app.use('/common',express.static(path.join(__dirname, '/common')));
app.set('view engine','html');
app.set('views',path.join(__dirname,'/dist'));
app.get('/',function(req,res){
  console.log("Hello");
  res.render('index');
});
app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
limit: '150mb',
extended: true
}));
var parameters = {
  // Required
  country: 'US',
  year:    2016,
  // Optional
  // month:    7,
  // day:      4,
  // previous: true,
  // upcoming: true,
  // public:   true,
  // pretty:   true,
};

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
 app.get('/holiday',function(req,res){

  hapi.holidays(parameters, function (err, data) {
  // Insert awesome code here...
    console.log(err);
    console.log(data);
    res.json(data);
  });
 });


app.listen(8090,function(){
  console.log('app running on 8080');
})
