module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        outputStyle: 'expanded',
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'sass/',
          src: '**/*.scss',
          dest: '',
          ext: '.css'
       }]
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'style.min.css': ['style.css']
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 3
        },
        files: [
          {
            expand: true,
            cwd: 'img_src/',
            src: ['**/*.png'],
            dest: 'images/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: 'img_src/',
            src: ['**/*.jpg'],
            dest: 'images/',
            ext: '.jpg'
          }
        ]
      }
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [
            { name: 'sm', suffix: '_1x', quality: 90, width: 400 },
            { name: 'sm', suffix: '_2x', quality: 90, width: 800 },
            { name: 'md', suffix: '_1x', quality: 90, width: 960 },
            { name: 'md', suffix: '_2x', quality: 90, width: 1400 }
          ]
        },
        files: [
          {
            expand: true,
            src: ['**/*.{jpg,png}'],
            cwd: 'img_src/',
            dest: 'images/'
          }
        ]
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      },
      cssmin: {
        files: ['style.css'],
        tasks: ['cssmin']
      },
      js: {
        files: ['js/main.js'],
        tasks: ['uglify']
      }

    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images')
  grunt.loadNpmTasks('grunt-contrib-watch');   

  grunt.registerTask('default', ['sass', 'cssmin', 'uglify' ,'imagemin', 'responsive_images','watch']);

};
