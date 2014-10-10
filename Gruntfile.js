module.exports = function( grunt ) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodewebkit: {
      options: {
          appName: grunt.file.readJSON('package.json').window.title,
          appVersion: grunt.file.readJSON('package.json').version,
          platforms: ['osx', 'windows'],
          buildDir: 'build', // Where the build version of my node-webkit app is saved
      },
      src: [
          "./index.html",
          "./package.json",
          "./app/**/*",
          "./lib/aws-sdk/dist/*.js",
          "./lib/bootstrap/dist/**/*",
          "./lib/jquery/dist/jquery.min.js",
          "./lib/jsrender/jsrender.min.js",
      ] // Your node-webkit app
    },
    qunit: {
      all: ['test/**/*.html']
    }
  })

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask( 'test', ['qunit'] );
  grunt.registerTask( 'build', ['qunit', 'nodewebkit'] );
};
