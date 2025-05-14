// index.js
// where your node app starts

// init project
var app = require('./myApp');


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
