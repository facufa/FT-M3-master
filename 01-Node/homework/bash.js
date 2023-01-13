//aqui una funcion que de acuerdo al comando que le llegue ejecute esa logica que llega del otro archivo


  //  // Output un prompt
  //  process.stdout.write('prompt > '); //write() escribe
  //  // El evento stdin 'data' se dispara cuando el user escribe una línea
  //  process.stdin.on('data', function (data) { //on() esta escuchando a llamados
  //    var cmd = data.toString().trim(); // trim()remueve los espacios entre letras
  //    process.stdout.write('Hola jefe: ' + cmd);
  //    process.stdout.write('\nprompt > ');
  //  });


//importo los comandos de mi archivo index.js
const commands = require('./commands/index.js');


const done = function(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}


// abro el prompt
process.stdout.write('prompt > ');


process.stdin.on('data', function (data) {
     var arr = data.toString().trim().split(' '); // remueve los espacios entre letras [comando, facundo]
     var cmd = arr.shift();
            
   // if(cmd !== 'date' && cmd !== 'pwd' && cmd !== 'ls' && cmd !== 'echo' && cmd !== 'cat'...)
    if(!commands.hasOwnProperty(cmd)) {
    process.stdout.write('Error de moldulo')
    process.stdout.write('\nprompt > ')
  } else {
    commands[cmd](arr, done)
    //process.stdout.write('\nprompt > ')
  }

});


//console.log(Object.keys(process))

