const color = require('colors');

function mostrarMenu() {

    return new Promise(resolve => {

        console.log('=========================='.green);
        console.log('  Seleccione una Opción   ');
        console.log('=========================='.green);
    
        console.log(`${'?'.green} Que desea hacer?`);
        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readline.question('Selecciona una Opción: ', (opt) => {            
            readline.close();
            resolve(opt);
          });   

    })

   

}


const pausa = () =>{

    return new Promise(resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readline.question(`Presione ${'ENTER'.green} para continuar`, (answer) => {
            console.log(`${answer}`);
            readline.close();
            resolve();
          });   
    })



}






module.exports = {
    mostrarMenu,
    pausa 
}