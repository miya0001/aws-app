module.exports = function( grunt ) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          targetDir: './lib',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },
    nodewebkit: {
      options: {
          appName: grunt.file.readJSON('package.json').window.title,
          appVersion: grunt.file.readJSON('package.json').version,
          platforms: ['osx'],
          buildDir: 'build', // Where the build version of my node-webkit app is saved
      },
      src: [
          "./index.html",
          "./package.json",
          "./js/*",
          "./css/*",
          "./img/*",
          "./lib/**/*",
      ] // Your node-webkit app
    },
    qunit: {
      all: ['test/**/*.html']
    }
  })

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask( 'test', ['qunit'] );
  grunt.registerTask( 'build', ['bower::install', 'nodewebkit'] );

};
