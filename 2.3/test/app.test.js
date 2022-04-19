const request = require('supertest');
const app = require('../src/app');

describe('Testes de Integração', () => {
  test('responder http 200 na raiz - Versão 01', () => request(app).get('/')
    .then((res) => expect(res.status).toBe(200)));

  test('responder http 200 na raiz - Versão 02', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });

  // O teste abaixo está errando, porém passando com sucesso, pois não suporta
  // o comportamento assíncrono da chamada HTTP realizada. O mesmo deveria
  // falhar, uma vez que a aplicação retorna HTTP 200,
  // ao passo que o teste está aguardando um HTTP 400.
  //
  // test('responder http 200 na raiz - Versão COM ERRO', () => {
  //   request(app).get('/')
  //     .then((res) => expect(res.status).toBe(400));
  // });
});
