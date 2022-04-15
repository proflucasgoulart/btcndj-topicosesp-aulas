function calcularMontante(capital, taxa, periodo) {
  let montante = capital * Math.pow((1 + taxa), periodo - 1);
  return montante;
}

module.exports = {
  calcularMontante
}