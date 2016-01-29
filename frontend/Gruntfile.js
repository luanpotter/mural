module.exports = function (grunt) {

	var pkg = grunt.file.readJSON('package.json');

	var fileMaps = {
		browserify: {},
		uglify: {}
	};
	var file, files = grunt.file.expand({
		cwd: 'src/js'
	}, ['*.js']);
	for (var i = 0; i < files.length; i++) {
		file = files[i];
		fileMaps.browserify['build/dev/js/' + file] = 'src/js/' + file;
		fileMaps.uglify['build/prod/js/' + file] = 'build/dist/js/' + file;
	}

	grunt.initConfig({

		clean: ['build/dev', 'build/prod'],

		mkdir: {
			dev: {
				options: {
					create: ['build/dev', 'build/prod']
				}
			},
			prod: {
				options: {
					create: ['build/prod']
				}
			}
		},

		jshint: {
			options: grunt.file.readJSON('lint-options.json'), // see http://www.jshint.com/docs/options/
			all: {
				src: ['package.json', 'lint-options.json', 'Gruntfile.js', 'src/**/*.js',
					'src/**/*.json'
				]
			}
		},

		mochaTest: {
			options: {
				colors: true,
				reporter: 'spec'
			},
			files: ['src/**/*.spec.js']
		},

		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**', '!js/**', '!**/*.md'],
					dest: 'build/dev/'
				}]
			},
			prod: {
				files: [{
					expand: true,
					cwd: 'build/dev/',
					src: ['**', '!js/*.js'],
					dest: 'build/prod/'
				}]
			}
		},

		browserify: {
			build: {
				files: fileMaps.browserify,
				options: {
					browserifyOptions: {
						debug: true, // for source maps
						standalone: pkg['export-symbol']
					}
				}
			}
		},

		uglify: {
			min: {
				files: fileMaps.uglify
			}
		},

		watch: {
			js: {
				files: ['package.json', 'lint-options.json', 'Gruntfile.js', 'src/**/*'],
				tasks: ['test']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('test', ['jshint', 'mochaTest']);
	grunt.registerTask('test-cont', ['test', 'watch']);

	grunt.registerTask('default', ['clean', 'test', 'mkdir:dev', 'copy:main', 'mkdir:prod', 'browserify', 'copy:prod']);
	grunt.registerTask('dist', ['default', 'uglify']);

};
