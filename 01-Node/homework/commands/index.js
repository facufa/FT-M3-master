
//La idea es escribir en el index los comandos, la logica de cada comando y despues los exportamos
var fs = require('fs'); //importo fs, es un modulo que permite acceder al sistema de arcivo
const axios = require('axios')




//COMANDS:
module.exports = {
    pwd: function(done) {
        done(process.cwd());
    },
    date: function(done) {
        done(Date())
    },
    ls: function(done) {
        fs.readdir('.', function(err, files) {
            let line = ''
            if (err) throw err;
            files.forEach(function(file) {
              //process.stdout.write(file.toString() + "\n");
              line = line + file.toString() + "\n"
            })
            process.stdout.write('\nprompt > ')
          });
    },
    echo: function(arr) {
        done(arr.join(' '))
       // process.stdout.write('\nprompt > ')
    },
    cat: function(arr) {
        fs.readFile(arr[0], 'utf-8', function(err, data){
            if(err) throw err;
            process.stdout.write(data)
            process.stdout.write('\nprompt > ')
        })
    },
    head: function(arr) {
        fs.readFile(arr[0], 'utf-8', function(err, data){
            if(err) throw err;
            const lines = data.split('/n').slice(0, 8)
            process.stdout.write(lines.join('/n'))
            process.stdout.write('\nprompt > ')
        })
    },
    tail: function(arr) {
        fs.readFile(arr[0], 'utf-8', function(err, data) {
            if(err) throw err;
            const lines = data.split('/n').slice(-10)
            process.stdout.write(lines.join('/n'))
            process.stdout.write('\nprompt > ')
        })
    },
    curl: function(arr) {
        axios(arr[0]) 
        .then(respuesta => {
            process.stdout.write(respuesta.data.toString())
            process.stdout.write('\nprompt > ')
        })
        .catch(error => {
            console.log(error)
            process.stdout.write('\nprompt > ')
        })
    }
}



    // var fs = require('fs');
    
    // fs.readdir('.', function(err, files) {
    //     if (err) throw err;
    //     files.forEach(function(file) {
    //       process.stdout.write(file.toString() + "\n");
    //     })
    //     process.stdout.write("prompt > ");
    // });