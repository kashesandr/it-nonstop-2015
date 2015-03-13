module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        "copy": {
            main: {
                files: [{
                    expand: true, cwd: "src/",
                    src: [ 'index.html' ], dest: './build'
                }]
            }
        },
        'concat': {
            js: {
                src: [
                    "./src/js/base.js", "./src/js/helpers.js",
                    "./src/js/store.js", "./src/js/model.js",
                    "./src/js/template.js", "./src/js/view.js",
                    "./src/js/controller.js", "./src/js/app.js"
                ],
                dest: './build/js.js'
            },
            css: {
                src: [ "./src/css/*.css" ],
                dest: './build/css.css'
            }
        }
    });

    grunt.registerTask('default', [
        'copy',
        'concat:js',
        'concat:css'
    ]);
};