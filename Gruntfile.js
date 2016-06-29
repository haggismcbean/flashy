module.exports = function (grunt) {
	// Load grunt tasks is a special module so we don't have to inject every grunt task into the gruntfile.
    require('load-grunt-tasks')(grunt);

    var bowerJsFiles = [
        'htdocs/bower_components/angular/angular.min.js',
        'htdocs/bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'htdocs/bower_components/lodash/dist/lodash.min.js',
        'htdocs/bower_components/immutable/dist/immutable.min.js',
        'htdocs/bower_components/immutable-angular/scripts/immutable.js'
    ];

    var bowerCssFiles = [
        'htdocs/bower_components/reset-css/reset.css'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
	        options: {
	            sourceMap: true
	        },
	        all: {
	            files: {
	                'htdocs/project/sass/style.css': 'htdocs/project/sass/main.scss'
	            }
	        }
	    },

	    injector: {
            options: {
            	ignorePath: 'htdocs',
                template: 'htdocs/index.html'
            },
            dev: {
                files: {
                    'htdocs/index.html': bowerJsFiles.concat(bowerCssFiles).concat(['htdocs/project/**/*.js', '!htdocs/project/**/*.spec.js', 'htdocs/project/**/*.css'])
                }
            }
        },

	    watch: {
	    	sass: {
	    		files: 'htdocs/**/*.scss',
	    		tasks: ['sass']
	    	}
	    },

	    karma: {
            unit: {
                options: {
                    basePath: '',
                    frameworks: ['jasmine'],
                    // Start these browsers, currently available:
                    // - Chrome
                    // - ChromeCanary
                    // - Firefox
                    // - Opera
                    // - Safari (only Mac)
                    // - PhantomJS
                    // - IE (only Windows)
                    browsers: [
                        // 'Chrome',
                        // 'Firefox'
                        'PhantomJS'
                    ],
                    colors: true,
                    reporters: ['progress','coverage'],
                    autoWatch: true,
                    // level of logging
                    // possible values: OFF || ERROR || WARN || INFO || DEBUG
                    logLevel: 'INFO',
                    // list of files / patterns to load in the browser
                    files: bowerJsFiles.concat([
                        'htdocs/bower_components/angular-mocks/angular-mocks.js', 
                        'htdocs/bower_components/karma-read-json/karma-read-json.js', 
                        'htdocs/project/**/*.html',
                        'htdocs/project/**/*.js'
                    ]),
                    plugins: [
                        'karma-chrome-launcher',
                        'karma-firefox-launcher',
                        'karma-jasmine',
                        'karma-phantomjs-launcher',
                        'karma-coverage',
                        'karma-ng-html2js-preprocessor'
                    ],
                    ngHtml2JsPreprocessor: {
                        // strip this from the file path
                        stripPrefix: 'htdocs/',
                        moduleName: 'templates'
                    },
                    preprocessors: {
                        'htdocs/project/**/*.html': ['ng-html2js'],
                        'htdocs/project/app.js': 'coverage',
                        'htdocs/project/!(test)/**/!(*.spec).js': 'coverage',
                    },
                }
            }
        }

    });

};
