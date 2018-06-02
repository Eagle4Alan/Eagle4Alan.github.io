

var gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    watch = require ('gulp-watch');


gulp.task('sass',function(){
     return gulp.src('app/scss/styles.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
});

gulp.task('watcher', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watcher']);