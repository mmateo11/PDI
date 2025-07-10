import express from 'express';

const router = express.Router();

/* 1ERA ENTIDAD: ficha_salud */

router.get('/', function (req, res) {
  res.json({
    message: 'Listado de fichas de salud'
  });
})

router.post('/', function (req, res) {
  res.json({
    message: 'ficha de salud creada'
  });
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensaje: `Esta es la ruta GET de mi entidad ficha_salud con el ID ${id}` });
});

router.put('/:id', function (req, res) {
  const id = req.params.id;
    res.json({ mensaje: `Esta es la ruta PUT de mi entidad ficha_salud con el ID ${id}` });
});


router.delete('/:id', function (req, res) {
 const id = req.params.id;
    res.json({ mensaje: `Esta es la ruta DELETE de mi entidad ficha_salud con el ID ${id}` });
});

export default router;