// set home url for app
const routes = require('express').Router();

routes.get('/', function(request, response) {
	response.sendFile(__dirname+ '/public/index.html');
});

module.exports = routes;