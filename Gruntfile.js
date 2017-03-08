'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less: {
            main: {
                expand: true,
                src: ['style/**/*.less'],
                ext: '.css'
            }

        },
        jshint: {
            options: {
                globalstrict: true,
                expr: true,
                loopfunc: true,
                globals: {
                    $: false,
                    window: false,
                    require: false,
                    requirejs: false,
                    define: false,
                    module: false,
                    console: false,
                    alert: false,
                    confirm: false,
                    localStorage: false
                }
            },
            test: [
                'Gruntfile.js',
                'js/**/*.js',
                '!js/lib/**/*.*'
            ]
        },
        watch: {
            copy: {
                files: 'style/**/*.less',
                tasks: ['less:main']
            }
        },
        connect: {
          server: {
             options: {
                 open: true,
                 protocol: 'http',
                 port: 8000,
                 hostname: '*',
                 keepalive: true,
                 base: ['']
             }
          }
       }
    });

    grunt.registerTask('dev','develop',function(){
        grunt.task.run(['less','jshint','connect']);
    });
    grunt.registerTask('watchs','watch files',function(){
        grunt.task.run(['less','jshint','watch:copy']);
    });
    grunt.registerTask('default','build',function(){
        grunt.task.run(['less','jshint',]);
    });
};
