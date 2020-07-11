## Agenda de tareas Node

Estas es una pequeña aplicación para agendar tareas pendientes y realizadas, a través de la terminal.

Para ejecutar nuestro proyecto debemos instalar los paquetes necesarios:

```
npm install
```

Esta aplicación tiene 4 funcionalidades:

1. Crear una tarea
2. Actualizar una tarea
3. Borrar una tarea
4. Listar las tareas

#### 1. Agregar una tarea
```
npm app crear -d <unaTarea>
```
```
npm app crear --descripcion <unaTarea>
```
#### 2. Actualizar una tarea
Sino especificamos "-c true" o "-c false" por defecto la actualiza a tarea completada
```
npm app actualizar -d <unaTarea>
```
```
npm app actualizar --descripcion <unaTarea>
```
Si quisiéramos especificar si fue completada o no:
```
npm app actualizar -d <unaTarea> -c true
```
```
npm app actualizar --descripcion <unaTarea> --completado true
```
```
npm app actualizar -d <unaTarea> -c false
```
```
npm app actualizar --descripcion <unaTarea> --completado false
```
#### 3. Borrar una tarea
```
npm app borrar -d <unaTarea>
```
```
npm app borrar --descripcion <unaTarea>
```
#### 4. Listar las tareas
Todas las tareas
```
npm app listar
```
Solo las tareas que NO estén completadas
```
npm app listar -cl false
```
```
npm app listar --completadoListar false
```
Solo las tareas que SI estén completadas
```
npm app listar -cl true
```
```
npm app listar --completadoListar true
```