require('colors');
const inquirer = require('inquirer');

const preguntas = [{
    type:'list',
    name:'opcion',
    message:'Que desea hacer?',    
    choices: [{
        value:'1',
        name: `${'1.'.green} Crear Tarea`
    },
    {
        value:'2',
        name: `${'2.'.green} Listar Tareas`
    },
    {
        value:'3',
        name: `${'3.'.green} Listar Tareas Completadas`
    },
    {
        value:'4',
        name: `${'4.'.green} Listar Tareas Pendientes`
    },
    {
        value:'5',
        name: `${'5.'.green} Completar Tarea(s)`
    },
    {
        value:'6',
        name: `${'6.'.green} Borrar Tarea`
    },
    {
        value:'0',
        name: `${'0.'.green} Salir`
    }
  
    ]
}];


const inquireMenu = async () =>{

    console.clear();
    
    console.log('=========================='.green);
    console.log('  Seleccione una Opción   ');
    console.log('=========================='.green);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {

    await inquirer.prompt([
        {
            type:'input',
            name:'enter',
            message:`Presione ${'ENTER'.green} para continuar`
        }
    ]);

   
}

const preguntaInput = async(message)=>{
   
    const {desc} = await inquirer.prompt(
        [
            {
                type: 'input',
                name: 'desc',
                message,
                validate(value){
                    if (value.length === 0 ) {
                        return 'Ingrese un valor';
                    } 
                    return true;            
                }
    
            }
        ]
    );
    return desc;    
}


module.exports = {
    inquireMenu,
    pausa,
    preguntaInput
}