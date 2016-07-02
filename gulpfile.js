var gulp = require('gulp');
var bsync = require('browser-sync').create();

// Listen to change events on HTML and reload
// bsync.watch("*.html").on("change", bsync.reload);

// Provide a callback to capture ALL events to CSS
// files - then filter for 'change' and reload all
// css files on the page.
// bsync.watch("css/*.css", function (event, file) {
//     if (event === "change") {
//         bsync.reload("*.css");
//         bsync.reload("index.html");
//     }
// });

// bsync.watch("js/*.js", function(event,file) {
// 	if(event==="change") {
// 		bsync.reload("*.js");
// 		bsync.reload("index.html");
// 	}
// });

gulp.watch('./app/**/*', function (obj) {
        if (obj.type === 'changed') {
           	bsync.reload();
        }
 });


//static server
gulp.task('serve',function(){
	bsync.init({
		server: {
			baseDir: "./app"
		}
	});
});


