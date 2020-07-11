const { argv } = require("./config/yargs.js");
const colors = require("colors");

const {
  crearTarea,
  obtenerListado,
  actualizarEstado,
  borrarTarea,
} = require("./por-hacer/por-hacer.js");
const porHacer = require("./por-hacer/por-hacer.js");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = crearTarea(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    let listado = obtenerListado(argv.completadoListar);
    for (let i = 0; i < listado.length; i++) {
      let { descripcion, completado } = listado[i];
      console.log(`============ Por Hacer =============`.green);
      console.log(`Tarea:      ${descripcion}`);
      completado
        ? console.log("Completado: Si")
        : console.log("Completado: No");
      console.log(`====================================`.green);
    }
    break;
  case "actualizar":
    let actualizado = actualizarEstado(argv.descripcion, argv.completado);
    if (actualizado) {
      console.log(`La tarea se actualizo`);
    } else {
      console.log("La tarea que quiere actualizar no existe");
    }
    break;
  case "borrar":
    let borrado = borrarTarea(argv.descripcion);
    if (borrado) {
      console.log(`La tarea se borro`);
    } else {
      console.log("La tarea que quiere borrar no existe");
    }
    break;
  default:
    console.log("comando no reconocido");
    break;
}
