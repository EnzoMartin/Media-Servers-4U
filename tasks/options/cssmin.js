module.exports = {
    minify: {
        expand: true,
        cwd: 'public/css/',
        src: [
            'font-awesome.css',
            'bootstrap.css',
            'bootstrap-colorpicker.css',
            'contents.css',
            'jquery-gritter.css',
            'highlight.css',
            'style.css',
            'flag-icon.css',
            'pygments.css',
            'jquery-clockpicker.css'
        ],
        dest: 'public/css/',
        ext: '.min.css'
    }
};