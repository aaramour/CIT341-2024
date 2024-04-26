const routes = require('express').Router();
const lesson1Controller = require('../Controllers/lesson1');
 
routes.get('/', lesson1Controller.aaronRoute);
routes.get('/max', lesson1Controller.maxRoute);

module.exports = routes;