// node modules
var express = require('express'),
	bodyParser = require('body-parser'),
    expressJwt = require('express-jwt'),
	mongoose = require('mongoose'),

    // app modules
    config = require('./config/config.js'),

    // initialize
    app = express()
        .use(bodyParser.urlencoded({extended: false}))
        .use(bodyParser.json())
        .use(express.query())
        // Todo: make these dev environment only feauters
        .use(function (req, res, next) {
            console.log(req.body);
            next();
        })
        // Allow CORS for dev
        .use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        })
		.use('/api', expressJwt({secret: config.secret})),

    // routes
    authRoute = require('./routes/auth.js')(app),
    userRoutes = require('./routes/user.js')(app),
    userItemRoutes = require('./routes/userItem.js')(app),
	fishesRoutes = require('./routes/fishes.js')(app);
	// @@ new catnap routes


mongoose.connect(config.mongoURL);

app.listen(3000);
console.log('node-catnap running on port 3000')
