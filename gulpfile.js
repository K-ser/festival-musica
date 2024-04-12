const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css( done ) {
      src('src/scss/**/*.scss') // identificar el archivo SASS
        .pipe(plumber())  // Nos ayuda a evitar que el workflow se detenga por errores
        .pipe(sass()) // Compilar
        .pipe(dest('build/css')); // Almacenarla en el disco duro
      
  done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev( done ) {
  watch('src/scss/**/*.scss', css);

  done();
}

exports.css = css;
exports.dev = dev;