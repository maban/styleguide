module.exports = function(grunt) {

    grunt.initConfig({
    
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {   
            dist: {
                src: [
                    '_script/*.js',
                    '_script/libs/*.js'
                ],
                dest: '_site/script/main.js'
            }
        },
        
        uglify: {
            build: {
                src: '_site/script/main.js',
                dest: '_site/script/main.min.js'
            }
        },
        
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '_media/image/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '_site/media/image/'
                }]
            }
        },
        
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '_site/style/css/main.css': '_style/scss/main.scss'
                }
            } 
        },
        
        watch: {
            scripts: {
                files: ['_script/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            },
            
            css: {
                files: ['_style/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        
        }
            
        
        
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-css');
    
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch']);
    
};