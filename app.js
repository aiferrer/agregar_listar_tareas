require("colors");
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquireMenu, pausa, preguntaInput} = require('./helpers/inquirer');
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
    console.log("Hola Mundo");       

    let opt = '';
    const tareas = new Tareas(); 

    do {
        opt = await inquireMenu();            
        switch (opt) {
            case '1':
                const desc = await preguntaInput('Descripcion:');
                tareas.crearTarea(desc);
                console.log(desc);
                break;

            case '2':
               console.table(tareas.listadoArr);
           
        }
         
       
      
       // console.log(tarea);        
       // tareas._listado[tarea.id] = tarea;

       // console.log(tareas);     
                
        //console.log({opt});
        await pausa();  

    } while (opt !== '0' );

    
};

main();


