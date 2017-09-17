/**
 * Created by tazbingo on 2017/9/18.
 */
var gulp = require('gulp');
var rev = require('gulp-rev');//添加版本号
var revReplace = require('gulp-rev-replace');//更新index.html下的引用
var useref = require('gulp-useref');//合并css或js文件
var filter = require('gulp-filter');//筛选和恢复
var uglify = require('gulp-uglify');//压缩JS文件
var csso = require('gulp-csso');//压缩CSS文件

gulp.task('default', function () {

    var jsFilter = filter('**/*.js', {restore: true});
    var cssFilter = filter('**/*.css', {restore: true});
    var indexHtmlFilter = filter(['**/*', '!**/index.html'], {restore: true});

    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));

});