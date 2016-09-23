'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-minify'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    maps = require('gulp-sourcemaps');

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('sass', function() {
    return gulp.src('style.sass')
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('./'));
});

gulp.task('styles', ['sass'], function() {
    return gulp.src([
            'bower_components/bootstrap-css/css/bootstrap.min.css',
            'bower_components/font-awesome-css/css/font-awesome.css',
            'style.css'
        ])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('scripts', function() {
    return gulp.src([
            'bower_components/jquery/jquery.min.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-touch/angular-touch.js',
            'bower_components/bootstrap-css/js/bootstrap.min.js',
            'js/angular-app.js',
            'js/services/*.js',
            'js/rootscope/*.js',
            'views/**/*.js'
        ])
        .pipe(maps.init())
        .pipe(concat('jsPack.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('js/'));
});



gulp.task('watch', function() {
    gulp.watch([
        '*.sass',
        'sass-partials/*.+(sass|scss)'
    ], {
        cwd: './',
        interval: 500
    }, ['styles']);
    gulp.watch(['**/*.js', '!gulpfile.js'], {
        cwd: './',
        interval: 500
    }, ['scripts']);
});
