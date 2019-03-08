/**
 * Copyright (C) 2019 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const gulp = require('gulp');
const using = require('gulp-using');
const del = require('del');

const RIVET_UITS_SCSS_DEST = '_sass/libs/rivet-uits';
const CSS_LIBS_DEST = 'assets/css/libs';
const JS_LIBS_DEST = 'assets/js/libs';

gulp.task('copyRivetBaseSCSS', function (done) {
    gulp.src('node_modules/rivet-uits/sass/**/*')
        .pipe(using())
        .pipe(gulp.dest(RIVET_UITS_SCSS_DEST));
    done();
});

// const RIVET_SHELL_SCSS_DEST = '_sass/libs/rivet-shell';
// Not needed and references node_modules, which probably won't work in Jekyll.
// gulp.task('copyRivetShellSCSS', function (done) {
//     gulp.src('node_modules/rivet-shell/src/sass/**/*')
//         .pipe(using())
//         .pipe(gulp.dest(RIVET_SHELL_SCSS_DEST));
//     done();
// });

gulp.task('copyRivetBaseCSS', function (done) {
    gulp.src('node_modules/rivet-uits/css/**/*')
        .pipe(using())
        .pipe(gulp.dest(CSS_LIBS_DEST));
    done();
});

gulp.task('copyRivetBaseJS', function (done) {
    gulp.src('node_modules/rivet-uits/js/**/*')
        .pipe(using())
        .pipe(gulp.dest(JS_LIBS_DEST));
    done();
});

gulp.task('copyRivetShellCSS', function (done) {
    gulp.src('node_modules/rivet-shell/dist/css/**/*')
        .pipe(using())
        .pipe(gulp.dest(CSS_LIBS_DEST));
    done();
});

gulp.task('clean:rivet', function () {
    return del([`assets/css/libs/**/*`, `assets/js/libs/**/*`, `_sass/libs/**/*`]);
});

gulp.task('rivet', gulp.series('clean:rivet', 'copyRivetBaseCSS', 'copyRivetBaseSCSS', 'copyRivetShellCSS', 'copyRivetShellSCSS'));

gulp.task('default', function (done) {
    console.log('gulpfile: run `yarn run rivet` to clean and copy rivet/rivet-shell libraries');
    done();
});