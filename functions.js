const suma = ( a, b ) => {

    const numero1 = parseInt(a);
    const numero2 = parseInt(b);

    if (isNaN(numero1)|| isNaN(numero2) ) {
        throw new Error('Uno de los números es inválido')
    }

    return numero1 + numero2;
}

const multiplicar = ( a, b ) => {
    const numero1 = parseInt(a);
    const numero2 = parseInt(b);

    if (isNaN(a) || isNaN(b) ) {
        throw new Error('Uno de los números es inválido')
    }

    return numero1 * numero2;
}

module.exports = {
    suma,
    multiplicar
}