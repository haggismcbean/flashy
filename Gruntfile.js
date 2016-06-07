module.exports = function (grunt) {
	// Load grunt tasks is a special module so we don't have to inject every grunt task into the gruntfile.
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                '**/*.css': '**/*.scss'
	            }
	        }
	    }

    });

    grunt.registerTask('watch', ['sass']);

};
