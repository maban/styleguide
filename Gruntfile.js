module.exports = function(grunt) {

    grunt.initConfig({
    
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {   
            dist: {
                src: [
                    'script/*.js',
                    'script/libs/*.js'
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
                    cwd: 'media/image/',
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
                    '_site/style/css/main.css': 'style/scss/main.scss'
                }
            } 
        },
        
        perfbudget: {
            foo: {
                options: {
                    url: 'http://google.com',
                    key: 'YOUR_API_KEY',
                    budget: {
                        SpeedIndex: '1000'
                    }
                }
            }
        },
        
        watch: {
            scripts: {
                files: ['script/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            },
            
            css: {
                files: ['style/scss/*.scss'],
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
    grunt.loadNpmTasks('grunt-contrib-perfbudget');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'perfbudget', 'watch']);
    
};