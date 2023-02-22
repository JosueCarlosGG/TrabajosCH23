//prueba efectiva

//nos trae el artefacto de prueba
//const indexText = require ("../calculadora");
import { indexTest } from "../calculadora";
test('test suma', () => {
    const r = indexTest.suma(3,2);
    //con esto es el resultado esperado
    expect (r).toBe(5);
});
test.todo('test resta')
test.todo('test multi')
test.todo('test div')
