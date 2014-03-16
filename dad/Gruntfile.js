module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      release: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "index.html": "jade/index.jade",
          "laser.html": "jade/laser.jade",
          "aesthetic.html": "jade/aesthetic.jade",
          "products.html": "jade/products.jade",
          "massage.html": "jade/massage.jade",
          "contact.html": "jade/contact.jade"
        }
      }
    },
    stylus: {
      compile: {
        options: {
        },
        files: {
          'css/style.css': 'stylus/style.styl'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.styl',
        tasks: ['stylus'],
        options: {
          livereload: true
        }
      },
      html: {
        files: '**/*.jade',
        tasks: ['jade'],
        options: {
          livereload: true
        }
      },
      js: {
        files: 'js/*',
        tasks: [],
        options: {
          livereload: true
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['stylus', 'jade']);

};