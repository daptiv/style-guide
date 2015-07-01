module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dist: {
                files: {
                    '_css/style-guide.css': 'less/style-guide.less'
                }
            },
            jekyll: {
                files: {
                    '_site/style-guide.css': 'less/style-guide.less'
                }
            }
        },

        cssmin: {
            css: {
                src: ['_css/style-guide.css'],
                dest: 'docs/style-guide.min.css'
            }
        },

        jekyll: {
            options: {
                src: 'docs',
                dest: '_site',
                config: '_config.yml'
            },
            dev: {}
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 8888,
                    base: './_site'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['less/**/*.less', 'docs/docs.less'],
                tasks: ['less']
            },
            jekyll: {
                files: ['docs/**/*.md', 'docs/**/*.html'],
                tasks: ['jekyll'],
                options: {
                    spawn: false
                }
            }
        },

        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'git@github.com:daptiv/style-guide.git',
                    branch: 'gh-pages'
                }
            }
        }
    });

    // Load dependencies
    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-jekyll');

    // Generate and format the CSS
    grunt.registerTask('default', ['less', 'cssmin:css', 'jekyll']);

    //running pattern library locally
    grunt.registerTask('serve',['default', 'connect', 'watch']);

    // Publish to GitHub
    grunt.registerTask('publish', ['jekyll', 'buildcontrol:pages']);
};
