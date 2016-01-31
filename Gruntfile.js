module.exports = function(grunt) {

	var mongoUrl = grunt.option('mongoUrl'),
		secret = grunt.option('secret');

	// load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		filePathOptions: {
			modelPath: 'src/models',
			requireModelPath: '../models',
			controllerPath: 'src/controllers',
			requireControllerPath: '../controllers',
			routePath: 'src/routes',
			requireRoutePath: './routes'
		},
		template: {
			model: {
				options: {
					data: {
						route: '<%= grunt.task.current.args[0] %>',
						routeUppercase: '<%= grunt.task.current.args[1] %>'
					}
				},
				files: {
					'<%= filePathOptions.modelPath %>/<%= grunt.task.current.args[0] %>.js': ['Grunt/templates/model.js.tpl']
				}
			},
			controller: {
				options: {
					data: {
						route: '<%= grunt.task.current.args[0] %>',
						routeUppercase: '<%= grunt.task.current.args[1] %>',
						requireModelPath: '<%= filePathOptions.requireModelPath %>'
					}
				},
				files: {
					'<%= filePathOptions.controllerPath %>/<%= grunt.task.current.args[0] %>.js': ['Grunt/templates/controller.js.tpl']
				}
			},
			route: {
				options: {
					data: {
						route: '<%= grunt.task.current.args[0] %>',
						routeUppercase: '<%= grunt.task.current.args[1] %>',
						requireControllerPath: '<%= filePathOptions.requireControllerPath %>'
					}
				},
				files: {
					'<%= filePathOptions.routePath %>/<%= grunt.task.current.args[0] %>.js': ['Grunt/templates/route.js.tpl']
				}
			}
		},
		copy: {
			dist: {
				files: [
					// includes files within path
					{
						expand: true,
						cwd: 'src',
						src: ['**/*'],
						dest: 'dist/'
					},
					{
						src: 'package.json',
						dest: 'dist/'
					}
				],
			},
		},
		'string-replace': {
			config: {
				files: {
					'dist/config/config.js': 'dist/config/config.js'
				},
				options: {
					replacements: [
						{
							pattern: '@@mongoUrl',
							replacement: '<%= grunt.task.current.args[0] %>'
						},
						{
							pattern: '@@monoPass',
							replacement: '<%= grunt.task.current.args[1] %>'
						}
					]
				}

			},
			addRoutes: {
				files: {
					'src/server.js': 'src/server.js'
				},
				options: {
					replacements: [{
						pattern: /;\s*\n\s*\/\/\s@@\snew\scatnap\sroutes/,
						replacement: ',\n\t<%= grunt.task.current.args[0] %>Routes = require(\'./routes/<%= grunt.task.current.args[0] %>.js\')(app);\n\t// @@ new catnap routes'
					}]
				}
			}
		}
	});

	// load tasks from the Grunt folder
	grunt.loadTasks('Grunt');
	grunt.registerTask('serverConfig', ['copy:dist', 'string-replace:config:' + mongoUrl + ':' + secret]);
};
