const moduloTareas = require('./tareas/funcionesDeTareas');
const process = require('process')

const orden = process.argv[2];

switch (orden) {
    case 'agregar':
        let titulo = process.argv[3];
        if (!titulo) {
            console.log('Debes poner titulo')
            break
        }
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado)
        console.log('agregada con exito');
        break;

    case 'listar':
        moduloTareas.listarTareas()
        break;

    case 'filtrarPorEstado':
        let estado = process.argv[3];
        moduloTareas.filtrarPorEstado(estado)
        break;

    case'undefined':
        console.log('No entiendo que hacer');  
        break;

    default:
        console.log('Atencion! Debes pasar una accion');
        break;
}
