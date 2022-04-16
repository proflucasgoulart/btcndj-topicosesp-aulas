function arredondar(valor) {
  const precisao = 100;
  const arredondado = Math.round((valor + Number.EPSILON) * precisao) / precisao;
  return arredondado;
}

function calcularMontante(capital, taxa, periodo) {
  // let montante = capital * Math.pow((1 + taxa), periodo - 1);
  // ATENÇÃO: O cálculo realizado na linha a seguir pode ser feito utilizando
  // a função Math.pow conforme comentário acima.
  let montante = capital * (1 + taxa) ** (periodo - 1);
  montante = arredondar(montante);
  return montante;
}

function calcularPrestacoes(montante, numeroParcelas) {
  const prestacaoBase = arredondar(montante / numeroParcelas);
  const resultado = Array(numeroParcelas).fill(prestacaoBase);

  return resultado;
}

module.exports = {
  calcularMontante,
  arredondar,
  calcularPrestacoes,
};
