import express from 'express';

const router = express.Router();

/* 2DA ENTIDAD: clientes */

router.get('/', function (req, res) {
  res.json({
    message: 'Listado de clientes'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ 
    message: `Este es el cliente con ID:  ${id}` });
});

router.post('/', function (req, res) {
  res.json({
    message: 'Cliente registrado'});
})

router.put('/:id', function (req, res) {
  const id = req.params.id;
    res.json({ 
        message: `Se actualizo con exito la informacion del cliente ID: ${id}` });
});


router.delete('/:id', function (req, res) {
 const id = req.params.id;
    res.json({ 
        message: `Se eliminó con exito la informacion del cliente con ID:  ${id}` });
});

export default router;