const colors = require("colors");
const fs = require("fs");
const { triggerAsyncId } = require("async_hooks");

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer); //paso mi objeto a un JSON

  fs.writeFile(`base-de-datos/data.json`, data, (err) => {
    if (err) throw new Error("no se pudo grabar", err);
  }); //el ultimo parametro va a manejar el error de nuestra accion de crear un archivo con la data
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../base-de-datos/data.json");
  } catch (error) {
    listadoPorHacer = []; //necesario si el archivo esta vacio o si es la primera vez
  }
};

const crearTarea = (descripcion) => {
  cargarDB();

  let porHacer = { descripcion, completado: false };
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

const obtenerListado = (filtro = null) => {
  cargarDB();
  if (filtro === null) {
    return listadoPorHacer;
  } else {
    let listadoFiltrado = listadoPorHacer.filter(
      (tarea) => tarea.completado === filtro
    );
    listadoPorHacer = listadoFiltrado;
    return listadoPorHacer;
  }
};

const actualizarEstado = (descripcion, estadoNuevo = true) => {
  cargarDB();
  //si la variable "indice" es negativo no existe en la lista
  const indice = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion == descripcion
  );
  if (indice < 0) {
    return false;
  } else {
    listadoPorHacer[indice].completado = estadoNuevo;
    guardarDB();
    return true;
  }
};

const borrarTarea = (descripcion) => {
  cargarDB();
  const indice = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion == descripcion
  );
  if (indice < 0) {
    return false;
  } else {
    listadoPorHacer.splice(indice, 1);
    guardarDB();
    return true;
  }
};

module.exports = {
  crearTarea,
  obtenerListado,
  actualizarEstado,
  borrarTarea,
};
