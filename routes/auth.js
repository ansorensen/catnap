var AuthController = require('../controllers/auth.js');

module.exports = function (app) {
    app.post('/login', AuthController.login);
	app.post('/logout', AuthController.logout);
};