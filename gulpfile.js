//importação dos plugins
const gulp = require('gulp');//importação do gulp
const sass = require('gulp-sass')(require('sass'));//importação do SASS
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')//busca os arquivos .scss na pasta
        .pipe(sass({ outputStyle: 'compressed'}))//comprime os arquivos SASS
        .pipe(gulp.dest('./dist/css'));//envia os arquivos comprimidos para a pasta
}

function images() {
    return gulp.src('./src/images/**/*')//busca TODS os arquivos na pasta
        .pipe(imagemin())//comprime as imagens
        .pipe(gulp.dest('./dist/images'));//envia os arquivos comprimidos para a pasta
}

exports.default = gulp.parallel(styles, images);//execulta as funções

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))//observa os arquivos ' ', e as funções (()) de forma paralela
}
