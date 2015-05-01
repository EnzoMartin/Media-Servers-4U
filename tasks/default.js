/**
 * Task to compile the CSS and template files on file change
 */
module.exports = function(grunt) {
    grunt.registerTask('default','Runs the SCSS compile',function(){
        var config = require('./options/watch');

        var tasks = [
            'sass:dev',
            'watch'
        ];

        grunt.option('force', true);
        grunt.config('watch',config);
        grunt.task.run(tasks);
    });
};