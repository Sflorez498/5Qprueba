const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Permitir CORS si es necesario
app.use(cors());

// Servir archivos estáticos desde dist
app.use(express.static(path.join(__dirname, 'dist')));

// Para cualquier ruta, servir index.html (manejo de errores incluido)
app.get('*', (req, res, next) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      next(err);
    }
  });
});

// Definir el puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
