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
                        dest: 'fonts/',
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
                dest: 'build/pygments-default-theme.css'
            },
            css_dist: {
                expand: true,
                flatten: true,
                src: 'build/*',
                dest: 'css/'
            }
        },

        cssmin: {
            css: {
                src: ['build/style-guide.css'],
                dest: 'docs/style-guide.min.css'
            },
            css_dist: {
                src: ['build/style-guide.css'],
                dest: 'css/style-guide.min.css'
            },
            themes_dist: {
                src: ['build/teammember-style-guide.css'],
                dest: 'css/teammember-style-guide.min.css'
            },
            dist: {
                expand: true,
                src: ['css/**/*.css'],
                rename: function(dest, src) {
                    return dest + src.replace(/\.css$/, ".min.css").replace(/docs-/, '');
                },
                dest: 'css/'
            },
            jekyll: {
                src: ['build/docs.css'],
                dest: 'docs/docs.min.css'
            },
            themes: {
                expand: true,
                flatten: true,
                src: ['build/themes/*.css'],
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
                src: 'css/**/*.css'
            },
            docs: {
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
                'build/style-guide.css'
            ]
        },

        sass: {
            options: {
                precision: 6,
                sourceComments: false,
                loadPath: ['./scss/', './bower_components/', './node_modules/']
            },
            dist: {
                files: {
                    'build/style-guide.css': 'scss/style-guide.scss'
                }
            },
            themes: {
                files: {
                    'build/teammember-style-guide.css': 'scss/themes/teammember.scss'
                }
            },
            docs: {
                files: [{
                    expand: true,
                    cwd: 'docs/themes',
                    src: ['*.scss'],
                    dest: 'build/themes',
                    ext: '.css'
                },
                {
                    'build/docs.css': 'docs/docs.scss',
                }]
            },
        },

        scsslint: {
            allFiles: ['scss/**/*.scss'],
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
                files: ['scss/**/*.scss'],
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
    grunt.registerTask('styles', ['scsslint', 'sass', 'copy:css', 'cssmin', 'copy:css_dist', 'postcss', 'copy:fonts']);
    grunt.registerTask('build', ['scsslint', 'sass:dist', 'sass:themes', 'copy:css', 'postcss:dist', 'cssmin:css_dist', 'cssmin:themes_dist', 'copy:css_dist', 'copy:fonts']);

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
