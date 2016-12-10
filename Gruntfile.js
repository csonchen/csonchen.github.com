/**
 * Created by 胜 on 2016/12/7.
 */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // 将sass文件编译为css
    sass: {
      dist: {
        files: {
          'css/screen.css': 'sass/screen.sass'
        }
      }
    },

    // 压缩css文件
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: '*.css',
          dest: 'css',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass']);
};