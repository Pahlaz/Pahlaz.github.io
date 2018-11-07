// Requiring nodes.
const gulp = require('gulp'),
		browserSync = require('browser-sync'),			// For Live Reload.
		prefixer = require('gulp-autoprefixer');


// Default Task.
gulp.task('default', ['serve-and-watch']);


// Initializing the SERVER for live reloading.
// Watching for changes in HTML, CSS and JS.
gulp.task('serve-and-watch', function(){
	browserSync.init({
		server: {
			baseDir: '.'
		}
	});

	gulp.watch('*.html', browserSync.reload);
	gulp.watch('assets/css/*.css', browserSync.reload);
	gulp.watch('assets/js/*.js', browserSync.reload);
});
