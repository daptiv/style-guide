module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                precision: 6,
                sourceComments: false,
            },
            dist: {
                files: {
                    '_css/style-guide.css': 'styles/style-guide.scss'
                }
            },
            jekyll: {
                files: {
                    '_css/docs.css': 'docs/docs.scss'
                }
            }
        },

        cssmin: {
            css: {
                src: ['_css/style-guide.css'],
                dest: 'docs/style-guide.min.css'
            },
            jekyll: {
                src: ['_css/docs.css'],
                dest: 'docs/docs.min.css'
            }
        },

        jekyll: {
            options: {
                src: 'docs',
                config: '_config.yml'
            },
            dev: {
                options: {
                    dest: '_site/style-guide'
                }
            },
            publish: {
                options: {
                    dest: '_site'
                }
            }
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
            sass: {
                files: ['styles/**/*.scss'],
                tasks: ['styles', 'jekyll:dev']
            },
            jekyll: {
                files: ['docs/**/*.md', 'docs/**/*.html'],
                tasks: ['jekyll:dev'],
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
        },

        // Runs CSS reporting
        parker: {
            options: {
                metrics: [
                    'TotalStylesheets',
                    'TotalStylesheetSize',
                    'TotalRules',
                    'TotalSelectors',
                    'TotalIdentifiers',
                    'TotalDeclarations',
                    'SelectorsPerRule',
                    'IdentifiersPerSelector',
                    'SpecificityPerSelector',
                    'TopSelectorSpecificity',
                    'TopSelectorSpecificitySelector',
                    'TotalIdSelectors',
                    'TotalUniqueColours',
                    'TotalImportantKeywords',
                    'TotalMediaQueries'
                ],
                file: "docs/.css-stats.md",
                title: "Css Stats",
                colophon: true
            },
            src: [
                '_css/style-guide.css'
            ]
        }
    });

    // Load dependencies
    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-parker');
    grunt.loadNpmTasks('grunt-jekyll');

    // Generate and format the CSS
    grunt.registerTask('styles', ['sass', 'cssmin']);

    //running pattern library locally
    grunt.registerTask('serve',['default', 'connect', 'watch']);

    grunt.registerTask('generate-config', 'generates jekyll configuration file', function() {
        var pkg = grunt.config.get('pkg');
        grunt.file.copy('./config.yml', './_config.yml', { process: function (file) {
            var options = {
                data: pkg
            };
            return grunt.template.process(file, options);
        }});
    });
    // Publish to GitHub
    grunt.registerTask('publish', ['styles', 'generate-config', 'jekyll:publish', 'buildcontrol:pages']);

    grunt.registerTask('default', ['styles', 'generate-config', 'jekyll:dev']);
};