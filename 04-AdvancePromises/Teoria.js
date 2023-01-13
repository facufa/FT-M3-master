const fs = require('fs')

const promiseReadFile = file => {
    new Promise((resolve, reject) => {
        fs.readFile(file, (err, data=10) => {
            if(err) reject(err);
            else resolve(data);
        })
    }) 
}


let p = promiseReadFile('./beatle.html')

p.then(value => console.log(value))         //10



