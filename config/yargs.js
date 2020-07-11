
const descripcion = {
  demand: true,
  alias: "d",
  type: "string",
  desc: "Descripcion de la tarea por hacer",
};

const completado = {
  default: true,
  alias: "c",
  type: "boolean",
  desc: "Marca como completado (true) o pendiente (false) la tarea por hacer",
};

const completadoListar = {
  alias: "cl",
  type: "boolean",
  desc: "Marca como completado (true) o pendiente (false) la tarea por hacer",
};

const argv = require("yargs")
  .command("crear", "Agrego una tarea por hacer", {
    descripcion,
  })
  .command("listar", "Listar todas las tareas por hacer", {
    completadoListar,
  })
  .command("actualizar", "Actualizo las tareas por hacer", {
    descripcion,
    completado,
  })
  .command("borrar", "Borro las tareas por hacer", {
    descripcion,
  })
  .help().argv; //crea una lista de los comandos validos

module.exports = {
  argv,
};
