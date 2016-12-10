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
    },

    // 压缩图片
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: 'dists'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['sass']);
};