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

    // TESTE 01 => expect(538.456).toBeCloseTo(538.46);
    // Apesar da diferença entre os valores do TESTE 01,
    // ele irá passar devido ao usoa da função toBeCloseTo.

    // TESTE 02 => expect(538.456).toBeCloseTo(538.46, 3);
    // Porém, no teste 02, o segundo parâmetro passado para a função
    // toBeCloseTo define uma precisão de 3 casas decimais. Nesse caso,
    // o teste comparando os mesmos valores irá falhar.
  });

  test('1.005 deve retornar 1.01', () => {
    const resultado = calculaValor.arredondar(1.005);
    expect(resultado).toBe(1.01);
  });
});
