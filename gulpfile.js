'use strict';

var gulp = require('gulp');
var slim = require('gulp-slim');
var shell = require('gulp-shell');
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

gulp.task('php', ['slim'], function () {
    return gulp.src('*.html', {read: false})
        .pipe(shell([
            "sed -e 's/\<!--//g' <%= file.path %> | sed -e 's/-->//g' > <%= f(file.path) %>",
            'ls -l <%= f(file.path) %>'
        ], {
            templateData: {
                f: function (s) {
                    return s.replace(/\.html$/, '.php')
                }
            }
        }))
});

gulp.task('slim', function(){
    return gulp.src(['slim/**/*.slim'])
        .pipe(plumber())
        .pipe(slim({pretty:true}))
        .pipe(gulp.dest('./'))
});

//watchのタスク
gulp.task('watch',function(){
    gulp.watch('slim/**/*.slim', ['slim']);
    gulp.watch('./**/*.html', ['php']);
    gulp.watch('sass/**/*.scss', ['compass']);
});

gulp.task('compile', function(){
    gulp.run('php');
    gulp.run('compass');
});
