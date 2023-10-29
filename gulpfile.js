const {src, dest, parallel, series, watch}=require('gulp');
const browserSync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const sass         = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss     = require('gulp-clean-css');
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');
//const deleteSync   = require('delete-sync');
const del          = require('del');
//import { deleteAsync } from 'del';
//import { deleteSync } from 'del'

function browsersync(){
    browserSync.init({
        server: {baseDir: 'dest/'},
        notify:false,
        online: true
    })
}

function scripts(){
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'app/js/app.js',
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('dest/js/'))
    .pipe(browserSync.stream())
}

function styles(){
    return src('app/sass/*.scss')
    .pipe(sass())
    .pipe(concat('app.min.css'))
    .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleancss(({level:{1:{specialComments:0}}/*, format:'beautify'*/})))
    .pipe(dest('dest/css/'))
    .pipe(browserSync.stream())
}
//проблема з img&&&&&&?????????????
function images(){
    return src('app/img/src/**/*')
    //.pipe(newer('app/img/dest/')) 
    .pipe(imagemin())
    .pipe(dest('dest/img/'))
}
function icons(){
    return src('app/img/src/**/*.svg')
    .pipe(dest('dest/img/'))
}
// function fontello(){
//     return src('app/font/**/*')
//     .pipe(dest('dest/img/'))
// }

function cleanimg(){
return del('app/img/dest/**/*',{forse: true})
}

function html(){
    return src('app/*.html')
    .pipe(dest('dest'));
}
function startwatch(){
    watch('app//sass//*',styles);
    watch(['app/**/*.js','!app/**/*.min.js'],scripts);
    watch('app/**/*.html').on('change',browserSync.reload);
    watch('app/images/src/**/*', images);
}

exports.browsersync=browsersync;
exports.scripts=scripts;
exports.styles=styles;
exports.images=images;
exports.icons=icons;
exports.cleanimg=cleanimg;
exports.html = html;
exports.build=series(styles,scripts,images,icons,html);

exports.default=series(parallel(styles,scripts,images,icons,html),browsersync,startwatch);