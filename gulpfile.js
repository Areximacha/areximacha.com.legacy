// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var del = require('del');

// Path config
var srcDir = 'src';
var distDir = 'www/_includes';

// Lint Task
gulp.task('lint', function() {
    return gulp.src([srcDir + '/js/**/*.js', '!' + srcDir + '/js/vendor/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('compass', function() {
    return gulp.src(srcDir + '/sass/**/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'www/_includes/css',
            sass: 'src/sass'
        }))
        .pipe(gulp.dest(distDir + '/css'));
});

// Concatenate JS
gulp.task('concat', function() {
    return gulp.src([srcDir + '/js/**/*.js', '!' + srcDir + '/js/vendor/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(distDir + '/js'));
});

// Minify JS
gulp.task('uglify', function() {
    return gulp.src(distDir + '/main.js')
        .pipe(uglify())
        .pipe(gulp.dest(distDir + '/js'));
});

// Compress images
gulp.task('imagemin', function() {
    return gulp.src(srcDir + '/img/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin({
            // Setting interlaced to true
            interlaced: true,
            progressive: true,
            optimizationLevel: 7
        }))
        .pipe(gulp.dest(distDir + '/img'));
});

// Move vendor scripts
gulp.task('vendor', function() {
    return gulp.src(srcDir + '/js/vendor/*')
        .pipe(gulp.dest(distDir + '/js/vendor'));
});

// Move fonts
gulp.task('fonts', function() {
    return gulp.src(srcDir + '/fonts/**/*')
        .pipe(gulp.dest(distDir + '/fonts'));
});

// Move templates
gulp.task('templates', function() {
    return gulp.src(srcDir + '/js/templates/*.tpl')
        .pipe(gulp.dest(distDir + '/js/templates'));
});

// Clean dist
gulp.task('clean:dist', function() {
    return del.sync(distDir);
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(srcDir + '/js/*.js', ['lint', 'concat']);
    gulp.watch(srcDir + '/sass/**/*.scss', ['compass']);
});

// Default Task
gulp.task('default', ['lint', 'compass', 'concat', 'watch']);
// Develop Task
gulp.task('dev', ['clean:dist', 'lint', 'compass', 'concat', 'imagemin', 'vendor', 'fonts', 'templates']);
// Dist Task
gulp.task('dist', ['clean:dist', 'lint', 'compass', 'concat', 'uglify', 'imagemin', 'vendor', 'fonts', 'templates']);
