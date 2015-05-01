module.exports = {
    options: {
        runBower: false,
        clean: false,
        srcPrefix: 'bower_components'
    },
    fontAwesome: {
        options: {
            destPrefix: 'public/fonts',
            nocase: true
        },
        files: {
            '': 'font-awesome/fonts/*.*'
        }
    },
    fontBootstrap: {
        options: {
            destPrefix: 'public/fonts'
        },
        files: {
            '': 'bootstrap-sass-official/assets/fonts/bootstrap/*.*'
        }
    },
    css: {
        options: {
            destPrefix: 'public/css'
        },
        files : {
            'bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
            'bootstrap.css.map': 'bootstrap/dist/css/bootstrap.css.map',
            'font-awesome.css': 'font-awesome/css/font-awesome.css'
        }
    },
    sass: {
        options: {
            destPrefix: 'scss/bootstrap'
        },
        files: {
            '' : 'bootstrap-sass-official/assets/stylesheets/bootstrap/*.scss',
            'mixins' : 'bootstrap-sass-official/assets/stylesheets/bootstrap/mixins/*.scss'
        }
    }
};
