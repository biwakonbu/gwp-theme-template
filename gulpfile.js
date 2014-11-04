'use strict';

var gulp = require('gulp');
var slim = require('gulp-slim');
var plumber = require('gulp-plumber');
var compass = require('gulp-compass');

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

gulp.task('slim', function(){
    gulp.src(['slim/**/*.slim'])
        .pipe(plumber())
        .pipe(slim({pretty:true}))
        .pipe(gulp.dest('./'))
});

//watchのタスク
gulp.task('watch',function(){
    gulp.watch('slim/**/*.slim', ['slim']);
    gulp.watch('sass/**/*.scss', ['compass']);
});
