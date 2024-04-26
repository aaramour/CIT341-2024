const express = require('express');
const app = express();
const lesson1Controller = require('./Controllers/lesson1');
 
app.get('/', lesson1Controller.aaronRoute);
 
const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});