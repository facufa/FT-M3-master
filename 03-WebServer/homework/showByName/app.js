var fs  = require("fs")
var http  = require("http")

var ip = '127.0.0.1';


//creamos el servidor
http.createServer((req, res) => {
    fs.readFile(`${__dirname}/images/${req.url}.jpg`, (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-type': 'text/plain'});
            res.end('Hubo un error en el servidor');
        } else {
            res.writeHead(200, {'Content-type': 'image/jpg'})
            res.end(data);
        }
    })
}).listen(3000, ip, () => {
    console.log('servidor funcionando', ip, 3000)
});  //esta escuchando el puerto 3000 en el ip local host 127.0.0.1