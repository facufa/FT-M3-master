
// executor = function(resolve, rejected)
let usd = 10;

let p = new Promise(function(resolve, rejected){
    if(usd >= 10) resolve(10)
    else if(usd < 10) rejected(-3)
});

/*

p = {this.state = 'pending', 
     this._handlerGroups = [],
     value = undefined,
     .then();
    }


*/ 

/////////////////////
//          10
p.then(data => console.log(data), e => console.log('atencion error', e)) //state = pending
//    false      20
p.then(null, e => e + 10) //state = pending
//      10           false   
p.then(data => data, null) //state = fulfilled; 

/////////////////////////

p.then(data => data + 15 + console.log('usd'), e => console.log('error de ejecucion'))

/*

p = {}

_handlerGroups = [ {sucessCB = data => console.log(data),
                    errorCB = e => console.log('atencion error', e)
                    .downstreamPromise = .then()},
                    
                    {sucessCB = false, errorCB =  e => e + 10 },
                    {sucessCB = data => data, errorCB = false}
                ]; 


let current = [ {sucessCB = data => console.log(data),
                 errorCB = e => console.log('atencion error', e)
                .downstreamPromise = .then()},
              ];
            

*/  

/*


pB = pA.then(data => console.log(data), e => console.log('atencion error', e))
pC = pB.then(null, e => e + 10)
pD = pC.then(data => data, null) 


 p = {sh, eh, pB}
 p = {sh, eh , pC}


*/
 
// TRY / CATCH

/*

try {}
intenta ejecutar todo lo que esta definido aca adento, si hay un error corta la 
ejecucion y se va al catch, si todo sale bien no se va al catch

catch {}
si hay un error ejecuta lo que hay dentro del catch


 */