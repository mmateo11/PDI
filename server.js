import express from 'express';
import TodasLasRutas from './routes/index.js'

const app = express(); 

app.use(express.json());

app.get('/', function (req, res) { 
  res.json('Bienvenido a la API de NUTRIFIX');
});

TodasLasRutas(app);

app.listen(3000, () => { 
  console.log('Servidor corriendo en http://localhost:3000');
});