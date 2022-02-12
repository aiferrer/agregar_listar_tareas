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
    }


    // Tarea 11
    listarPendientesCompletadas(completada = true){
        let indice = 0;
            
        this.listadoArr.forEach(elem => {
            const {desc, completadoEn} = elem;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
          
                if(completada )
                {
                    if(completadoEn){
                        indice += 1;
                        console.log(`${indice} ${desc} :: ${estado}`);
                    }                          
                }
                else{
                    if(!completadoEn){
                        indice += 1;
                        console.log(`${indice} ${desc} :: ${estado}`); 

                    }                   
                }
                
            });

    }

 
   
}

module.exports = Tareas;