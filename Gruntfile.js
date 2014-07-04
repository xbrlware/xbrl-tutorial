module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
   
    var path = require('path');
 
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'gh-pages': {
            docs: {
                src: '**/*',
                options: {
                    base: '_book'
                }
            }
        }, 
        gitbook: {
          development: {
            output: path.join(__dirname, '_book'),
            input: __dirname,
            title: 'XBRL Tutorial',
            github: '28msec/xbrl-tutorial'
          }
        },
        xqlint: {
            options: {
                src: 'queries'
            },
            dist: {}
        },
        branch_run: {
            options:{
                master: ['gh-pages']
            }
        },
        shell: {
            listFolders: {
                options: {
                    stderr: false
                },
                command: '/opt/local/bin/zorba -q build-book.xq -f'
            }
        }
    });
    grunt.registerTask('default', ['xqlint', 'gitbook', 'shell', 'gh-pages', 'branch_run']);
};
