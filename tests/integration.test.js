const controller = require('../src/controllers/cartController');

beforeEach(() => {
  controller.resetCart();
});
const request = require('supertest');
const app = require('../src/app');

describe('Integration tests - Cart API', () => {

  test('POST luego GET refleja el producto', async () => {
    await request(app).post('/cart').send({ name: 'Test', price: 100, quantity: 1 });
    const res = await request(app).get('/cart');
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('POST sin datos falla', async () => {
    const res = await request(app).post('/cart').send({});
    expect(res.statusCode).toBe(400);
  });

  test('DELETE elimina producto existente', async () => {
    await request(app).post('/cart').send({ name: 'Eliminar', price: 50, quantity: 1 });
    const res = await request(app).delete('/cart/0');
    expect(res.statusCode).toBe(200);
  });

  test('DELETE producto inexistente', async () => {
    const res = await request(app).delete('/cart/999');
    expect(res.statusCode).toBe(404);
  });

  test('GET siempre responde JSON', async () => {
    const res = await request(app).get('/cart');
    expect(res.headers['content-type']).toMatch(/json/);
  });

});