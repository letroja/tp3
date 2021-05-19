const fs = require ('fs');
module.exports = {

    leerJson : function() {
            return JSON.parse (fs.readFileSync('./db/tareas.json',
            'utf-8'))
    },

    agregarTarea : function(titulo,estado='pendiente') {  // con los parametros creo una nueva tarea
        let nuevaTarea = {
            titulo,
            estado 
        }
        let tareas = this.leerJson(); 
        tareas.push(nuevaTarea)   
        fs.writeFileSync ('./db/tareas.json',JSON.
        stringify(tareas),'utf-8')
         this.listarTareas()
    },
    listarTareas : function(){

        let tareas = this.leerJson();
        
        tareas.forEach(tarea => {
            console.log(tarea);
            
        });
    },

    filtrarPorEstado : function(filtro){
        let tareas = this.leerJson();
        let tareasFiltradas = tareas.filter(tarea => 
        tarea.estado === filtro);

         return console.log(tareasFiltradas); 
    }

}