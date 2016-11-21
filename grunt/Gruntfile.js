module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: [
          {src: '../js/rslidy.js', dest: '../js/rslidy.min.js'}
        ]
      }
    },
    cssmin: {
      target: {
        files: [
          {src: ['../css/normalise.css', '../css/reset.css', '../css/rslidy.css', '../css/slides-default.css'],
          dest: '../css/rslidy-combined.min.css'}
        ]
      }
    },
    zip: {
      'using-cwd': {
        cwd: '../../',
        src: ['../../rslidy/demo.html',
          '../../rslidy/js/rslidy.js',
          '../../rslidy/js/rslidy.min.js',
          '../../rslidy/js/rslidy.ts',
          '../../rslidy/css/normalise.css',
          '../../rslidy/css/reset.css',
          '../../rslidy/css/rslidy.css',
          '../../rslidy/css/rslidy-combined.min.css',
          '../../rslidy/css/slides-default.css'],
        dest: 'rslidy.zip'
      }
    }
  });

  // Load "uglify" and "zip" tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-zip');

  // Default tasks(uglify and zip)
  grunt.registerTask('default', ['uglify', 'cssmin', 'zip']);

};
