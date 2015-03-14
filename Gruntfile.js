module.exports = function (grunt) {
  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    filePathOptions: {
      modelPath: 'models',
      requireModelPath: '../models',
      controllerPath: 'controllers',
      requireControllerPath: '../controllers',
      routePath: 'routes',
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
    'string-replace': {
      addRoutes: {
        files: {
          'server.js' : 'server.js'
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
};