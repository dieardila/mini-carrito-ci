# 🛒 Mini Carrito CI

Proyecto de una API REST de carrito de compras con pruebas automatizadas y pipeline de integración continua (CI/CD).

---

## 🚀 Tecnologías

- Node.js
- Express
- Jest (testing)
- Supertest (testing API)
- GitHub Actions (CI/CD)

---

## 📦 Funcionalidades

- Obtener carrito
- Agregar producto
- Eliminar producto
- Calcular total

---

## 🔌 Endpoints

| Método | Endpoint        | Descripción              |
|--------|---------------|--------------------------|
| GET    | /cart         | Obtener carrito          |
| POST   | /cart         | Agregar producto         |
| DELETE | /cart/:id     | Eliminar producto        |
| GET    | /cart/total   | Obtener total            |

---

## 🧪 Pruebas

El proyecto cuenta con:

- 10 pruebas unitarias
- 5 pruebas de integración
- Total: 15 tests

Ejecutar tests:

```bash
npm test