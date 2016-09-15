module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            lessall: {
                files: [{
                    expand:true,
                    cwd:'css',
                    src:'**/*.less',
                    dest: 'outputcss/',
                    ext: '.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['css/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);
};