const calculaValor = require('../src/calcula-valor');

describe('calcularMontante', () => {
  test('Com uma prestação, o montante deve ser igual ao capital', () => {
    // Operação
    const montante = calculaValor.calcularMontante(100, 0.0175, 1);

    // Resultado ou Compotamento esperado
    expect(montante).toBe(100);
  });

  test('Com 4 prestações o montante é acrescido de juros', () => {
    // Operação
    const montante = calculaValor.calcularMontante(500, 0.025, 4);

    // Resultado ou Comportamento esperado
    expect(montante).toBe(538.45);
  });
});

describe('arredondar', () => {
  test('Arredondar em duas casas decimais', () => {
    const resultado = calculaValor.arredondar(538.4453124999998);
    expect(resultado).toBe(538.45);
  });
});
