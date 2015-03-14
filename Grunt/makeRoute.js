module.exports = function(grunt) {
  grunt.registerTask('makeRoute', 'REST boilerplate generator', function(route) {
    var routeUppercase = route.charAt(0).toUpperCase() + route.substring(1);
    
    grunt.task.run([
      'template:model:' + route + ':' + routeUppercase,
      'template:controller:' + route + ':' + routeUppercase,
      'template:route:' + route + ':' + routeUppercase,
      'string-replace:addRoutes:' + route
    ]);

  });
};