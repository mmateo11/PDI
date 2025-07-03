import express from 'express'; 

const app = express();  

app.get('/', function (req, res) { 
  res.json('Bienvenido a la API de NUTRIFIX');
});

app.get('/ficha_salud', function (req, res) {  
  res.json('Esta es la ruta GET de mi entidad FICHA_SALUD');
});

app.post('/ficha_salud', function (req, res) {  
res.json('Esta es la ruta POST de mi entidad FICHA_SALUD');
});

app.put('/ficha_salud', function (req, res) {  
  res.json('Esta es la ruta PUT de mi entidad FICHA_SALUD');
});

app.delete('/ficha_salud', function (req, res) {    
  res.json('Esta es la ruta DELETE de mi entidad FICHA_SALUD');
});

app.listen(3000, () => { 
  console.log('Servidor corriendo en http://localhost:3000');
});

