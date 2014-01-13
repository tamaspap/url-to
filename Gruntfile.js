module.exports = function(grunt) {

  grunt.initConfig({

	uglify: {
      dist: {
        files: {
          "url-to.min.js": ["url-to.js"]
        }
      }
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask("build", ["uglify"]);
};
