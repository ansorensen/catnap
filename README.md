Catnap
======

A minimalist library designed for ready-to-go auth based on JSON Web Tokens, and and a Grunt task to generate boilerplate code for new routes.  The goal of this project is to generate quick RESTful APIs that can support the development of front-end applications.

Creating new routes
-------------------
In the catnap directory, run:

	$ grunt makeRoute:objectName

The result will be the creation of several files with Node/Express code:

- models/objectName.js
- controllers/objectName.js
- routes/objectName.js

The task will also add a line to the server.js, adding the new routes to the server.

Auth
----
Based on Express-JWT.  The login expects 'email' and 'password' fields; if these are accepted, the server returns a JSON web token.  This JSON token is required to access any route on the server that begins with /api.


A sign up route in the auth is in development.  For the time being, users must be manually entered.

Database
--------
MongoDB and Mongoose