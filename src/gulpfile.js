const gulp = require('gulp');
const sass = require('gulp-sass');
const ROOT = __dirname;

console.log('ROOT:', ROOT);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src([
            'src/scss/**/*.scss'
        ])
        .pipe(sass())
        .pipe(gulp.dest("./css"));
});

// Compile sass into CSS & auto-inject into browsers
// gulp.task('vendor_css', function() {
//     return gulp.src([
//         ])
//         .pipe(gulp.dest("./css"));
// });

// Compile sass into CSS & auto-inject into browsers
// gulp.task('vendor_img', function() {
//     return gulp.src([
//         ])
//         .pipe(gulp.dest("./img"));
// });

// Move the javascript files into our /js folder
gulp.task('vendor_js', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
        ])
        .pipe(gulp.dest("./js"));
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['src/js/**/*.js'])
        .pipe(gulp.dest("./js"));
});

// Static Server + watching scss/html files
gulp.task('watch', ['js', 'sass'], function() {
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch(
        [
            'node_modules/bootstrap/dist/js/bootstrap.min.js', 
            'node_modules/jquery/dist/jquery.min.js',
            'src/js/*.js'
        ],
        ['js']
    );
});

gulp.task('default', ['vendor_css', 'vendor_img', 'vendor_js', 'js', 'sass']);