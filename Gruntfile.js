module.exports = function( grunt ) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
          appName: grunt.file.readJSON('package.json').window.title,
          appVersion: grunt.file.readJSON('package.json').version,
          platforms: ['osx', 'win'],
          buildDir: 'build', // Where the build version of my node-webkit app is saved
      },
      src: [
          "./index.html",
          "./package.json",
          "./app/**/*",
          "./lib/aws-sdk/dist/*.min.js",
          "./lib/bootstrap/dist/css/*.min.css",
          "./lib/bootstrap/dist/fonts/*",
          "./lib/bootstrap/dist/js/*.min.js",
          "./lib/jquery/dist/jquery.min.js",
          "./lib/jsrender/jsrender.min.js",
          "./lib/font-awesome/css/*.min.js",
          "./lib/font-awesome/fonts/*",
          "!./**/*.map",
      ] // Your node-webkit app
    },
    qunit: {
      all: ['test.html']
    }
  })

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask( 'test', ['qunit'] );
  grunt.registerTask( 'build', ['qunit', 'nodewebkit'] );
};
