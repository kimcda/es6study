const gulp = require('gulp');
const babel = require('gulp-babel');
// 걸프 의존성 여기
gulp.task('default', function() {
    // 노드소스
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));

    // 브라우저 소스
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));

});