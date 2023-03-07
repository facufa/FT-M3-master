// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

const server = express();
// to enable parsing of json bodies for post requests
// server.use(express.json());


// TODO: your code to handle requests
// Estructura       ----> server.METHOD(url, function(req, res, next) => {})

//  Si vamos a trabajar con  req.body, es decir, si vamos a recibir infomacion del body no nos podemos OLVIDAR
//  de utilizar de ACTIVAR el middlewares de express.json() !


const PATH = '/posts'

server.post(PATH, function(req, res){
 const {author, title, contents} = req.body;
 // let author = req.body.author
 // let title = req.body.title
 // let contents = req.body.contents
 

})  


module.exports = { posts, server };
