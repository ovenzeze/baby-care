const gulp = require('gulp');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('stylus', function () {
    return gulp.src('src/pc/stylus/*.styl')
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/pc/css'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('stylus-mobile', function () {
    return gulp.src('src/mobile/stylus/*.styl')
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/mobile/css'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('html', function () {
    return gulp.src('src/pc/*.html')
        .pipe(gulp.dest('dist/pc'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('html-mobile',function () {
    return gulp.src('src/mobile/*.html')
        .pipe(gulp.dest('dist/mobile'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('js',function () {
    return gulp.src('src/pc/js/*.js')
        .pipe(gulp.dest('dist/pc/js'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('js-mobile',function () {
    return gulp.src('src/mobile/js/*.js')
        .pipe(gulp.dest('dist/mobile/js'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('browserSync',function () {
    browserSync({
        server: {
            baseDir: 'dist/pc'
            // baseDir: 'dist/mobile'
        }
    })
}
);
gulp.task('pc', [
    'browserSync', 'stylus', 'html', 'js'
], function () {
    gulp.watch('src/pc/stylus/*.styl', ['stylus']);
    gulp.watch('src/pc/js/*.js', ['js']);
    gulp.watch('src/pc/*.html', ['html']);
});
gulp.task('mobile', [
    'browserSync', 'stylus-mobile', 'html-mobile', 'js-mobile'
], function () {
    gulp.watch('src/mobile/stylus/*.styl', ['stylus-mobile']);
    gulp.watch('src/mobile/js/*.js', ['js-mobile']);
    gulp.watch('src/mobile/*.html', ['html-mobile']);
});