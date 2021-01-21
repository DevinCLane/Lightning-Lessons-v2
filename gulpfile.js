const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
exports.default = () => (
    gulp.src('./images/gallery/fulls/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images/gallery/fulls/*'))
);