const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const fs = require('fs');
const ROOT = `${__dirname}`;
const outIndex = process.argv.findIndex(elm => {
    return elm === '-o';
});

if (outIndex < 0) {
    throw new Error('Missing the (-o) output directory as the first argument.');
}

const OUT_DIR = `${ROOT}/${process.argv[outIndex + 1]}`;

if (!fs.existsSync(OUT_DIR)) {
    throw new Error(`${OUT_DIR} does not exists.`);
}

const paths = {
    styles: {
        src: `${ROOT}/scss/**/*.scss`,
        dest: `${OUT_DIR}/css`
    },
    js: {
        src: `${ROOT}/js/**/*.js`,
        dest: `${OUT_DIR}/js`
    },
    vendorJs: {
        src: [
            `${ROOT}/node_modules/jquery/dist/jquery.min.js`
        ],
        dest: `${OUT_DIR}/js`
    }
};

// Compile SCSS into CSS and move them to a place where they can be served by the webserver.
let styles = () => {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.dest));
};

// Move the vendor JavaScript files to a place where they can be served by the webserver.
let vendorJs = () => {
    return gulp
        .src(paths.vendorJs.src)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(paths.vendorJs.dest));
}

// Move our JavaScript files to a place where they can be served by the webserver.
let js = () => {
    return gulp
        .src(paths.js.src, { sourcemaps: true })
        .pipe(uglify())
        .pipe(concat('author.min.js'))
        .pipe(gulp.dest(paths.js.dest));
};

// Watching for changes in *.scss & *.js files.
let watch = () => {
    gulp.watch([paths.styles.src], styles);
    gulp.watch([paths.js.src], js);
    gulp.watch([paths.vendorJs.src], vendorJs);
};

let build = gulp.series(vendorJs, gulp.parallel(js, styles));

module.exports = {
    default: build,
    watch
};
