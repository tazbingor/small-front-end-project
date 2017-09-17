/**
 * Created by tazbingo on 2017/9/18.
 */
var gulp = require('gulp');
var rev = require('gulp-rev');//添加版本号
var revReplace = require('gulp-rev-replace');//更新index.html下的引用
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

gulp.task('default', function () {
    // console.log("fa ♂ U");
    var jsFilter = filter('**/*.js', {restore: true});
    var cssFilter = filter('**/*.css', {restore: true});
    var indexHtmlFilter = filter(['**/*', '!**/index.html'], {restore: true});

    return gulp.src('src/index.html')
        .pipe(useref()).pipe(jsFilter()).pipe(uglify()).pipe(jsFilter.restore)
        .pipe(cssFilter).pipe(csso()).pipe(cssFilter.restore)
        .pipe(indexHtmlFilter).pipe(rev()).pipe(indexHtmlFilter.restore)
        .pipe(revReplace()).pipe(gulp.dest('dist'));

});