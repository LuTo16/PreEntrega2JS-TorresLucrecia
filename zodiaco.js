//ARRAY SIGNOS SOLARES
const signosSolares = [
    {
        signo: "Aries",
        fechas: "21/03-19/04",
        definicion: "Aries es el primer signo del zodíaco y representa el inicio, la energía y la acción.",
        elemento: "Fuego"
    },
    {
        signo: "Tauro",
        fechas: "20/04-20/05",
        definicion: "Tauro es un signo terrenal que representa la estabilidad, la sensualidad y la perseverancia.",
        elemento: "Tierra"
    },
    {
        signo: "Géminis",
        fechas: "21/05-20/06",
        definicion: "Géminis es un signo versátil que representa la comunicación, la curiosidad y la adaptabilidad.",
        elemento: "Aire"
    },
    {
        signo: "Cáncer",
        fechas: "21/06-22/07",
        definicion: "Cáncer es un signo sensible que representa la familia, la emotividad y la protección.",
        elemento: "Agua"
    },
    {
        signo: "Leo",
        fechas: "23/07-22/08",
        definicion: "Leo es un signo de fuego que representa la autoexpresión, la generosidad y el liderazgo.",
        elemento: "Fuego"
    },
    {
        signo: "Virgo",
        fechas: "23/08-22/09",
        definicion: "Virgo es un signo terrenal que representa el orden, la meticulosidad y la eficiencia.",
        elemento: "Tierra"
    },
    {
        signo: "Libra",
        fechas: "23/09-22/10",
        definicion: "Libra es un signo de aire que representa el equilibrio, la armonía y la justicia.",
        elemento: "Aire"
    },
    {
        signo: "Escorpio",
        fechas: "23/10-21/11",
        definicion: "Escorpio es un signo de agua que representa la intensidad, la pasión y la transformación.",
        elemento: "Agua"
    },
    {
        signo: "Sagitario",
        fechas: "22/11-21/12",
        definicion: "Sagitario es un signo de fuego que representa la aventura, la expansión y la libertad.",
        elemento: "Fuego"
    },
    {
        signo: "Capricornio",
        fechas: "22/12-19/01",
        definicion: "Capricornio es un signo terrenal que representa la ambición, la disciplina y la responsabilidad.",
        elemento: "Tierra"
    },
    {
        signo: "Acuario",
        fechas: "20/01-18/02",
        definicion: "Acuario es un signo de aire que representa la originalidad, la independencia y la humanidad.",
        elemento: "Aire"
    },
    {
        signo: "Piscis",
        fechas: "19/02-20/03",
        definicion: "Piscis es un signo de agua que representa la compasión, la sensibilidad y la espiritualidad.",
        elemento: "Agua"
    }
];

let eleccion;

do {
    eleccion = prompt("¿Sabes tu signo solar? \n 1. Sí \n 2. No");

    switch (eleccion) {
        case "1":
            let eleccionConocida;
            do {
                eleccionConocida = prompt("Elige una opción: \n 1. Buscar por nombre del signo \n 2. Filtrar por elemento \n 0. Salir");
                switch (eleccionConocida) {
                    case "1":
                        let nombreSigno = prompt("Ingresa el nombre del signo:");
                        buscarNombre(nombreSigno);
                        break;
                    case "2":
                        let opcionElemento = prompt("Elige un elemento para filtrar: \n 1. Agua \n 2. Fuego \n 3. Tierra \n 4. Aire");
                        filtrarPorElemento(opcionElemento);
                        break;
                    case "0":
                        alert("Volver al inicio...");
                        break;
                    default:
                        alert("Opción no válida");
                        break;
                }
            } while (eleccionConocida !== "0");
            break;
        case "2":
            let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (Formato: DD/MM/AAAA):");
            descubrirSigno(fechaNacimiento);
            break;
        default:
            alert("Opción no válida");
            break;
    }
} while (eleccion !== "0");

function buscarNombre(nombre) {
    const signoEncontrado = signosSolares.find(signo => signo.signo.toLowerCase() === nombre.toLowerCase());
    if (signoEncontrado) {
        alert(`Signo: ${signoEncontrado.signo}\nFechas: ${signoEncontrado.fechas}\nDefinición: ${signoEncontrado.definicion}`);
    } else {
        alert("Signo no encontrado");
    }
}

function filtrarPorElemento(opcion) {
    let elemento;
    switch (opcion) {
        case "1":
            elemento = "Agua";
            break;
        case "2":
            elemento = "Fuego";
            break;
        case "3":
            elemento = "Tierra";
            break;
        case "4":
            elemento = "Aire";
            break;
        default:
            alert("Opción no válida");
            return;
    }

    const signosFiltrados = signosSolares.filter(signo => signo.elemento === elemento);
    if (signosFiltrados.length > 0) {
        alert("Signos del elemento " + elemento + ": " + signosFiltrados.map(signo => signo.signo).join(", "));
    } else {
        alert("No se encontraron signos para ese elemento");
    }
}

function descubrirSigno(fecha) {
    const signos = ["Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario"];
    const fechasCorte = [20, 19, 20, 20, 21, 21, 22, 23, 23, 23, 22, 21];
    const partesFecha = fecha.split("/");
    const dia = parseInt(partesFecha[0]);
    const mes = parseInt(partesFecha[1]);

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        alert("Tu signo zodiacal es Aries");
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        alert("Tu signo zodiacal es Tauro");
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        alert("Tu signo zodiacal es Géminis");
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        alert("Tu signo zodiacal es Cáncer");
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        alert("Tu signo zodiacal es Leo");
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        alert("Tu signo zodiacal es Virgo");
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        alert("Tu signo zodiacal es Libra");
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        alert("Tu signo zodiacal es Escorpio");
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        alert("Tu signo zodiacal es Sagitario");
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        alert("Tu signo zodiacal es Capricornio");
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        alert("Tu signo zodiacal es Acuario");
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        alert("Tu signo zodiacal es Piscis");
    } else {
        alert("No se pudo determinar el signo zodiacal para esa fecha");
    }
}

