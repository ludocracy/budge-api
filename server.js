const express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./models/'),
  app = express();

app.listen(3000, function() {
  console.log('listening on port 3000');
});
