module.exports = function (grunt){
    grunt.initConfig({
        sass: {
            dist:{
                diles: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            files: ['css/*.scss'],
            tasks: ['css']
        },
        browserSync: {
            dev: {
                bsFiles:{ 
                    src: ['css/*.css',
                    '*.html',
                    'js/*.js']
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './' 
                    }
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('css', ['sass']);
    grunt.registerTaks('default', ['browserSync', 'watch'])
};