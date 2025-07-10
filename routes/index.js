
import FichaRoutes from './ficha.routes.js';
import ClientesRoutes from './clientes.routes.js'

function TodasLasRutas(app){
app.use('/ficha_salud', FichaRoutes);
app.use('/clientes', ClientesRoutes);
}

export default TodasLasRutas;


