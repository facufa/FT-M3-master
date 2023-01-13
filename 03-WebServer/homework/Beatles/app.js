var http = require('http');
var fs   = require('fs');
const { Console } = require('console');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]


http.createServer((req, res) => {
  //Muestra todo el array en JSON
  if(req.url === '/api') {
    res.writeHead(200, {'Content-type': 'application/json'})
    res.end(JSON.stringify(beatles))
  }

  //Muestra solo un beatle del array en JSON
  if(req.url.slice(0,5) === '/api/') {                      // /api/Richard Starkey
    
    const search = req.url.split('/').pop()                 // ['api', 'Richard Starkey']                     
    const beatle = beatles.find(b => b.name.replace(' ', '%20') === search)
    

    if(beatle) {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(beatle))
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.end('Pagina no se encontro')
    }

  }

  //Muesta el html en '/'
  if(req.url === '/') {
    fs.readFile('./index.html', (err, data) => {
      if(err) {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('EROR 404')
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
      }
    })
  }

  //Profile de cada beatle
  if(req.url.length > 1) {                          // /Jonh Lenon
    
    const search = req.url.split('/').pop();        // [Jonh%20Lenon] 
    const beatle = beatles.find( b => b.name.replace(' ', '%20') === search)
    //console.log('console.log beatle', beatle)
    
    if(beatle) {
      fs.readFile('./beatle.html', 'utf-8', (err, data) => {
        if(err) {
          res.writeHead(404, {'Content-Type': 'text/plain'})
          res.end('No se encontro el beatle')
        } else {
            data = data.replace('{name}', beatle.name);              //modificamos el html 
            data = data.replace('{birthday}', beatle.birthdate);
            data = data.replace('{profilePic}', beatle.profilePic);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
      })
    }
  }

}).listen(3000, '127.0.0.1', () => {
  console.log('servidor funcionando', 3000, '127.0.0.1')
})