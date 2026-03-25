# CI/CD Reporte

## 🔄 Pipeline

```mermaid
graph TD
A[Push] --> B[Install]
B --> C[Test]
C --> D[Coverage]
D --> E[Build]