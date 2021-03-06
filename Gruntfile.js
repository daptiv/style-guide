module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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

        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 8888,
                    base: './_site'
                }
            }
        },

        copy: {
            fonts: {
                files: [{
                        expand: true,
                        src: 'node_modules/font-awesome/fonts/*',
                        dest: 'docs/fonts/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                            expand: true,
                            src: 'fonts/**/*',
                            dest: 'docs/',
                    }],
            },
            css: {
                src: 'docs/pygments-default-theme.css',
                dest: '_css/pygments-default-theme.css'
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
            },
            themes: {
                expand: true,
                flatten: true,
                src: ['_css/themes/*.css'],
                dest: 'docs/themes/',
                rename: function(dest, src) {
                    return dest + src.replace(/\.css$/, ".min.css");
                }
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                ]
            },
            dist: {
                src: 'docs/themes/**/*.css'
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
        },

        sass: {
            options: {
                precision: 6,
                sourceComments: false,
                loadPath: ['./styles/', './bower_components/', './node_modules/']
            },
            dist: {
                files: {
                    '_css/style-guide.css': 'styles/style-guide.scss'
                }
            },
            docs: {
                files: [{
                    expand: true,
                    cwd: 'docs/themes',
                    src: ['*.scss'],
                    dest: '_css/themes',
                    ext: '.css'
                },
                {
                    '_css/docs.css': 'docs/docs.scss',
                }]
            },
        },

        scsslint: {
            allFiles: ['styles/**/*.scss'],
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: true
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
                files: ['docs/**/*.md', 'docs/**/*.html', 'docs/**/*.scss', 'docs/**/*.rb'],
                tasks: ['styles', 'jekyll:dev'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load dependencies
    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-parker');
    grunt.loadNpmTasks('grunt-jekyll');

    // Generate and format the CSS
    grunt.registerTask('styles', ['scsslint', 'sass', 'copy:css', 'cssmin', 'postcss', 'copy:fonts']);

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
