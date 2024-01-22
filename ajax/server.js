const http = require("http");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

const pedidos = [
  {
    producto: "Martillo",
    cantidad: 2,
    cliente: "Juan Pérez",
    direccion: "Calle Principal 123",
    NIT: "123456789",
    total: 50.0,
  },
  {
    producto: "Destornillador",
    cantidad: 3,
    cliente: "María Gómez",
    direccion: "Avenida Central 456",
    NIT: "987654321",
    total: 25.0,
  },
  {
    producto: "Taladro",
    cantidad: 1,
    cliente: "Pedro Pérez",
    direccion: "Calle Principal 123",
    NIT: "123456789",
    total: 400.0,
  },
  {
    producto: "Cemento",
    cantidad: 10,
    cliente: "María Gómez",
    direccion: "Avenida Central 456",
    NIT: "987654321",
    total: 1000.0,
  },
  {
    producto: "Clavos",
    cantidad: 100,
    cliente: "Pedro Pérez",
    direccion: "Calle Principal 123",
    NIT: "123456789",
    total: 10.0,
  }
];

// Definir la ruta para obtener los pedidos
app.get("/pedidos", (req, res) => {
  res.json(pedidos);
});

// Manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
