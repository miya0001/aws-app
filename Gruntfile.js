module.exports = function( grunt ) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
          platforms: ['osx'],
          buildDir: 'build', // Where the build version of my node-webkit app is saved
      },
      src: [
          "./index.html",
          "./package.json",
          "./js/*",
          "./css/*",
          "./img/*",
          "./package.json",
          "./node_modules/aws-sdk/**/*.js",
          "./node_modules/aws-sdk/**/*.json",
          "./node_modules/angular/lib/angular.js",
          "./node_modules/angular/package.json",
      ] // Your node-webkit app
    },
  })

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask( 'default', ['nodewebkit'] );

};
