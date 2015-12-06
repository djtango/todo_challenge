var gulp              = require('gulp');
var protractor        = require('gulp-protractor').protractor;
var ecstatic          = require('ecstatic');
var http              = require('http');
var enableDestroy     = require('server-destroy');
var karmaServer       = require('karma').Server;

(function karmaUnitTests() {
  gulp.task('karma', function (done) {
    new karmaServer({
      configFile: __dirname + '/test/karma.conf.js',
      singleRun: true
    }, done).start();
  });
})();
