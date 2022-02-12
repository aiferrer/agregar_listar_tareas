const Tarea = require('./tarea');
require('colors');
class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};        
    }

    // Tarea 7
    get listadoArr(){
		const listado = [];
		Object.keys(this._listado).forEach(key =>{
			const tarea = this._listado[key];
			listado.push(tarea);
		});		
       //console.log(listado);
		return listado;
    }

    crearTarea(desc){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasArch(tareas = []){    
        
        // console.log(tareas);
         tareas.forEach(tarea =>{
             this._listado[tarea.id] = tarea;
         })
        //  console.log(this._listado);
          return this._listado;       
          
    }

    // Tarea 10
    listadoCompleto (){  
        const listadoCompleto = this.listadoArr;        
        
        for (let i = 0; i < listadoCompleto.length; i++) {
            const numTarea = `${i+1}.`.green;
            if (listadoCompleto[i].completadoEn === null){
                console.log(`${numTarea} ${listadoCompleto[i].desc} :: ` + 'Pendiente'.red);       
            }
            else
                console.log(`${numTarea} ${listadoCompleto[i].desc} :: ` + 'Completada'.green);               
       }



  

      //  return listComp;

    }

   
}

module.exports = Tareas;