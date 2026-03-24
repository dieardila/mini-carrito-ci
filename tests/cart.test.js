const request = require("supertest");
const app = require("../src/app");
const controller = require("../src/controllers/cartController");

beforeEach(() => {
  controller.resetCart();
});

describe("Cart API", () => {

test("GET /cart retorna 200", async () => {
const res = await request(app).get("/cart");
expect(res.statusCode).toBe(200);
});

test("GET devuelve array", async () => {
const res = await request(app).get("/cart");
expect(Array.isArray(res.body)).toBe(true);
});

test("POST agrega producto", async () => {
const res = await request(app)
.post("/cart")
.send({name:"Laptop", price:1000, quantity:1});

expect(res.statusCode).toBe(201);
});

test("POST valida datos", async () => {
const res = await request(app).post("/cart").send({});
expect(res.statusCode).toBe(400);
});

test("DELETE elimina producto", async () => {
await request(app).post("/cart").send({name:"A", price:10, quantity:1});
const res = await request(app).delete("/cart/1");
expect(res.statusCode).toBe(200);
});

test("TOTAL correcto", async () => {
await request(app).post("/cart").send({name:"A", price:10, quantity:2});
const res = await request(app).get("/cart/total");
expect(res.body.total).toBe(20);
});

test("TOTAL vacío = 0", async () => {
const res = await request(app).get("/cart/total");
expect(res.body.total).toBe(0);
});

test("Agregar varios productos", async () => {
await request(app).post("/cart").send({name:"A", price:10, quantity:1});
await request(app).post("/cart").send({name:"B", price:20, quantity:1});
const res = await request(app).get("/cart");
expect(res.body.length).toBe(2);
});

test("Eliminar reduce carrito", async () => {
await request(app).post("/cart").send({name:"A", price:10, quantity:1});
await request(app).delete("/cart/1");
const res = await request(app).get("/cart");
expect(res.body.length).toBe(0);
});

test("Respuesta JSON", async () => {
const res = await request(app).get("/cart");
expect(res.headers["content-type"]).toMatch(/json/);
});

});