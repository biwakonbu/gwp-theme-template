'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var compass = require('gulp-compass');
var $ = require('gulp-load-plugins');

//Compassのタスク
gulp.task('compass',function(){
    gulp.src(['sass/**/*.scss'])
        .pipe(plumber())
        .pipe(compass({ //コンパイルする処理
            config_file : 'config.rb',
            comments : false,
            css : './',
            sass: 'sass/'
        }));
});

//watchのタスク
gulp.task('watch',function(){
    gulp.watch('sass/**/*.scss',function(event){
        gulp.run('compass');
    });
});
