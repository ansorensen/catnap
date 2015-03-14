Catnap
======

A minimalist Node.js/Express project template designed for ready-to-go auth and quick generation of new routes.

Creating new routes
-------------------
Use Grunt to quickly generate boilerplate code for new routes. In the catnap directory, run:

	$ grunt makeRoute:objectName

The result will be the creation of several files with Node/Express code:

- models/objectName.js
- controllers/objectName.js
- routes/objectName.js

The makeRoute task will also add a line to the server.js file, adding the new routes to the server.

Templates for the route generation can be found and edited in folder Grunt/templates.

Auth
----
Based on Express-JWT.  The login expects 'email' and 'password' fields; if these are accepted, the server returns a JSON web token.  This JSON token is required to access any route on the server that begins with /api.


A sign up route in the auth is in development.  For the time being, users must be manually entered.

Database
--------
MongoDB and Mongoose.