'use strict';
const { suma, multiplicar } = require('../functions');

test('Suma 1 Positivos: ', () => { 
    const numero1 = 8;
    const numero2 = 12;
    expect( suma(numero1, numero2) ).toBe(20)
    expect( suma(numero1, numero2) ).toBeGreaterThanOrEqual(numero1);
    expect( suma(numero1, numero2) ).toBeGreaterThanOrEqual(numero2);
})

test('Suma 2 Negativos, R(-): ', () => {
    const numero1 = -100;
    const numero2 = -89;
    expect( suma(numero1, numero2) ).toEqual(-189)
    expect( suma(numero1, numero2) ).toBeLessThan(numero1);
    expect( suma(numero1, numero2) ).toBeLessThan(numero2);
})

test('Suma 1 Negativos y Positivo, R(+-): ', () => { 
    expect( suma(5, -8) ).toEqual(-3)
    expect( suma(-5, 8) ).toEqual(3)
})

test('Suma parámetros inválidos', () => {
    const numero1 = 'perro';
    const numero2 = 90;
    expect( ()=> suma(numero1, numero2) ).toThrow(Error)
})

test('Multiplicacion Exitosa: ', () => { 
    expect( multiplicar(5, 8) ).toBe(40)
})

test('Multiplicacion 2 Negativos, R(+): ', () => { 
    expect( multiplicar(-5, -8) ).toBe(40)
})

test('Multiplicacion 1 Negativos: R(-)', () => { 
    expect( multiplicar(5, -8) ).toBeLessThan(0)
    expect( multiplicar(3, -7) ).toEqual(-21)
})

test('Múltiplicación con parámetros inválidos', () => {
    const numero1 = 'perro';
    const numero2 = 90;
    expect( ()=> multiplicar(numero1, numero2) ).toThrow(Error)
})