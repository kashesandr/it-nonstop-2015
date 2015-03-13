var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {

    gulp.src("src/index.html")
        .pipe(gulp.dest("build"));

    gulp.src([
        "./src/js/base.js",
        "./src/js/helpers.js",
        "./src/js/store.js",
        "./src/js/model.js",
        "./src/js/template.js",
        "./src/js/view.js",
        "./src/js/controller.js",
        "./src/js/app.js"
    ])
        .pipe(concat('js.js'))
        .pipe(gulp.dest('./build/'));

    gulp.src(["./src/css/*.css"])
        .pipe(concat('css.css'))
        .pipe(gulp.dest('./build/'))
});