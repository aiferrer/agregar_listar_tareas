const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = (data) =>{  
    fs.writeFileSync(archivo, JSON.stringify(data));
}

// Tarea 9
const leerDB = ()=>{
  if (fs.existsSync(archivo)) {
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    console.log(data);
    return data;

  } 
  return null;
}

module.exports = {
 guardarDB,
 leerDB

}