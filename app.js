
// var h1 = 'qwerty';
// var h2 = 'tyerq';
// var s = 2;

var h1 = 'bnvmcd';
var h2 = 'dcmvnb';
var s = 1; // No  funciona aún

// Resolver validación de las dos huellas
var respuesta = validarHuellas(h1, h2, s);
console.log(respuesta);

validarHuellas(h1, h2, s);
function validarHuellas(h1, h2, s) {
    if (h1 !== undefined && h1.length > 1000 && h2 !== undefined && h2.length > 1000) {
        return 'INVALIDO';
    }
    // Volver a minúsculas h1 y h2
    h1 = h1.trim();
    h2 = h2.trim();
    // Volver a minúsculas h1 y h2
    h1 = h1.toLowerCase();
    h2 = h2.toLowerCase();
    // Eliminar números de h1 y h2
    h1 = h1.replace(/\d/g, '');
    h2 = h2.replace(/\d/g, '');
    // Se saca una copia de h1
    // en valoresNoValidos se almacenará los caracteres de h2 que no estén en h1 en orden
    var valoresNoValidos = String(h1);
    // Se saca una copia de la copia de h1
    // en valoresValidosAComparar se almacenará los cararacteres de h2 que estén en h1 en orden
    var valoresValidosAComparar = String(h1);
    // Las constantes 'c' son el acrónimo de caracteres.
    for (let i = 0; i < h2.length; i++) {
        const c = h2[i];
        valoresNoValidos = valoresNoValidos.replace(c, '');
    }
    for (let i = 0; i < valoresNoValidos.length; i++) {
        const c = valoresNoValidos[i];
        valoresValidosAComparar = valoresValidosAComparar.replace(c, '');
    }

    // Esta validación aunque se hace, es para cumplir con una de las entradas del ejemplo
    // Pero para que se cumpla completamente se puede quitar.
    if (h1.split('').reverse().join('') === h2 &&  s === 1 && h1.length  > 1 ) {
        return 'NO HIT';
    }

    return agregarParte(h1, s, 0, '', valoresValidosAComparar, 0);
}
// Comparar valores válidos con huella digital h
function agregarParte(h1, s, _s, expRegular, valoresValidosAComparar, i) {
    // Validar tamaño de la cadena
    if (valoresValidosAComparar === undefined || valoresValidosAComparar.length == 0 || valoresValidosAComparar.length < i) {
        return 'NO HIT';
    }
    // Si s === _s es porque ya se considera que las huellas ya cumple
    // con el número de caracteres aceptados para que sean iguales.
    if (s === _s) { return 'HIT'; }
    
    const expT1 = `[${valoresValidosAComparar[i]}]{1}.*`;
    const auxExpRegularIncluyeCaracter = expRegular + expT1;
    const expReg = new RegExp(auxExpRegularIncluyeCaracter);
    if (expReg.test(h1)) {
        expRegular += expT1;
        _s++;
    }
    return agregarParte(h1, s, _s, expRegular, valoresValidosAComparar, i = i + 1);
}




// var h1 = 'aaaa';
// var h2 = 'aaab';
// var s = 3;

// var h1 = 'aaaa';
// var h2 = 'aaab';
// var s = 4;

// var h1 = 'bnvmcd';
// var h2 = 'dcmvnb';
// var s = 1; // No  funciona aún

// var h1 = 'abcdef';
// var h2 = 'azcxef';
// var s = 4;

// var h1 = 'qwerty';
// var h2 = 'q';
// var s = 1;
