module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		useminPrepare : {
				html : 'public/index.html',
				options : {
					dest : 'dist'
				}
		},
		usemin : {
				html : 'dist/index.html'
		},
	    // Make sure code styles are up to par and there are no obvious mistakes
	    jshint: {
	      options: {
	        jshintrc: '.jshintrc',
	        reporter: require('jshint-stylish')
	      },
	      all: {
	        src: [
	          '**/*.js'
	        ]
	      }
	    },
		copy : {
			main : {
				expand : true,
				cwd : 'public/',
				//src: ['**', '!js/**', '!lib/**', '!dist/**']
				dest : 'dist/'
			}
		},
		uglify : {
				options : {
					mangle : false,
					banner : '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */\n'
				},
				controllers : {
					files : {
					}
				}

		},
		clean : {
			dist : [ 'dist/*' ],
			karma: ['target/test*/**','PhantomJS*/**','test-results.xml','.tmp*/**']
		},
		concat : {
		},
		bower : {
			install : {
			//just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
			}
		},
		less : {
			options : {
				paths : [ 'public' ]
			},
			// target name
			files : {
				// no need for files, the config below should work
				expand : true,
				cwd : 'public',
				src : [ '**/*.less' ],
				dest : 'public',
				ext : '.css'
			}
		},
		karma : {
			unit : {
				configFile : 'karma.conf.js'
			}
		}
		
		
	});

	// Load the plugins 
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-karma');


	// Load task css 
	grunt.registerTask('css', [ 'less' ]);

	// Load task test 
	grunt.registerTask('test', [ 'karma:unit']);
	
	// Load task prod 
	grunt.registerTask('prod', [/*'jshint',*/ 'less', 'clean:dist','test', 'copy:main', 'useminPrepare', 'concat', 'uglify', 'usemin' ]);

};