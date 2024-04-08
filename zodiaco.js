// Solicitar la fecha de nacimiento usando prompt
const fechaNacimientoString = prompt("Por favor ingresa tu fecha de nacimiento (formato: AAAA-MM-DD):");

// Convertir la cadena de fecha de nacimiento en un objeto de fecha
const fechaNacimiento = new Date(fechaNacimientoString);

// Obtener el mes de la fecha de nacimiento y sumar 1 (ya que los meses van de 0 a 11)
const mes = fechaNacimiento.getMonth() + 1;

let signo = '';
let descripcion = '';

// Determinar el signo zodiacal según el mes y el día de nacimiento
if ((mes == 1 && fechaNacimiento.getDate() >= 20) || (mes == 2 && fechaNacimiento.getDate() <= 18)) {
    signo = 'Acuario';
    descripcion = 'Innovador, independiente, humanitario, intelectual.';
} else if ((mes == 2 && fechaNacimiento.getDate() >= 19) || (mes == 3 && fechaNacimiento.getDate() <= 20)) {
    signo = 'Piscis';
    descripcion = 'Sensible, compasivo, intuitivo, soñador.';
} else if ((mes == 3 && fechaNacimiento.getDate() >= 21) || (mes == 4 && fechaNacimiento.getDate() <= 19)) {
    signo = 'Aries';
    descripcion = 'Valiente, apasionado, enérgico, líder.';
} else if ((mes == 4 && fechaNacimiento.getDate() >= 20) || (mes == 5 && fechaNacimiento.getDate() <= 20)) {
    signo = 'Tauro';
    descripcion = 'Práctico, determinado, paciente, sensual.';
} else if ((mes == 5 && fechaNacimiento.getDate() >= 21) || (mes == 6 && fechaNacimiento.getDate() <= 20)) {
    signo = 'Géminis';
    descripcion = 'Adaptable, inteligente, comunicativo, sociable.';
} else if ((mes == 6 && fechaNacimiento.getDate() >= 21) || (mes == 7 && fechaNacimiento.getDate() <= 22)) {
    signo = 'Cáncer';
    descripcion = 'Protector, emocional, compasivo, intuitivo.';
} else if ((mes == 7 && fechaNacimiento.getDate() >= 23) || (mes == 8 && fechaNacimiento.getDate() <= 22)) {
    signo = 'Leo';
    descripcion = 'Generoso, creativo, apasionado, leal.';
} else if ((mes == 8 && fechaNacimiento.getDate() >= 23) || (mes == 9 && fechaNacimiento.getDate() <= 22)) {
    signo = 'Virgo';
    descripcion = 'Práctico, trabajador, detallista, analítico.';
} else if ((mes == 9 && fechaNacimiento.getDate() >= 23) || (mes == 10 && fechaNacimiento.getDate() <= 22)) {
    signo = 'Libra';
    descripcion = 'Diplomático, amable, idealista, justo.';
} else if ((mes == 10 && fechaNacimiento.getDate() >= 23) || (mes == 11 && fechaNacimiento.getDate() <= 21)) {
    signo = 'Escorpio';
    descripcion = 'Apasionado, decidido, valiente, misterioso.';
} else if ((mes == 11 && fechaNacimiento.getDate() >= 22) || (mes == 12 && fechaNacimiento.getDate() <= 21)) {
    signo = 'Sagitario';
    descripcion = 'Aventurero, optimista, sincero, enérgico.';
} else if ((mes == 12 && fechaNacimiento.getDate() >= 22) || (mes == 12 && fechaNacimiento.getDate() <= 21)) {
    signo = 'Capricornio';
    descripcion = 'Práctico, prudente, ambicioso, disciplinado.';    
} else {
// Si la fecha no corresponde a ninguno de los rangos anteriores
    signo = 'No se encontró un signo válido para esta fecha.';
    descripcion = 'Intente con una fecha de nacimiento válida.';
}

// Mostrar el resultado en un alert
alert("Signo solar es 🌞: " + signo + "\nDescripción: " + descripcion);