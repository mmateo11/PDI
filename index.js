import chalk from 'chalk';
import { format, isBefore, startOfToday } from 'date-fns';


console.log(chalk.green("Hola, soy Mateo Perez Ruiz"))
console.log(chalk.green("Hola, soy Lucas Reynoso"))
console.log(chalk.green("Hola, soy Tobias Puchetti"))

const fechaEntrega = new Date('2025-06-13');

const fechaFormateada = format(fechaEntrega, 'dd/MM/yyyy');

if (isBefore(fechaEntrega, startOfToday())) {
    console.log(chalk.red(`Fecha de entrega: ${fechaFormateada} (ya venció)`));
} else {
    console.log(chalk.yellow(`Fecha de entrega: ${fechaFormateada}`));
}


