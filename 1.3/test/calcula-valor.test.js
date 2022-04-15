const calculaValor = require('../src/calcula-valor')

test('Com uma prestação o montante é igual ao capital', () => {

  // Operação
  const montante = calculaValor.calcularMontante(100, 0.0175, 1)

  // Resultado ou Compotamento esperado
  expect(montante).toBe(100)
})
