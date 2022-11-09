
//SERVIDOR HTTP BASICO
//inicio del servidor

var {createServer} = require("http");
var url = require("url");

//el parametro route es una funcion que sale de router.js
function init(route, handle){
    //Preparamos las peticiones HTTP que haremos a nuestro servidor cuando usemos createServer()
    //Cuando recibe una peticion 
    function onRequest(request, response){
        //En la respuesta request, mirar qué ruta URL y la query
        var pathname = url.parse(request.url).pathname;
        var idpath = url.parse(request.url).query;
        var postData = "";

        request.setEncoding("utf-8");
        request.addListener("data", function(textPost){
            postData += textPost;
            console.log("text post recived: " + textPost + ".");
        });

        request.addListener("end", function(){
            route(handle, pathname, response, postData, idpath);
        });

    }
    //Le pasamos la función onRequest como parámetro al procedimiento createServer()
    //Devuelve un objeto y señala en qué puerto va a escucharlo (8888)
    createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
} 

exports.init = init;