//importamos los módulos realizados por nosotros. srver.js, router.js y requestHandlers.js
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./src/controlers/requestHandlers");

//Utilizamos un objeto (handle) para la lista de manipuladores de petición como una coleccion de pares
var handle = {};
handle["/"] = requestHandlers.init;
handle["/home"] =requestHandlers.init;
handle["/register"]=requestHandlers.register;
handle["/login"]=requestHandlers.login;
handle["/game-app"]=requestHandlers.gameApp;
handle["/validated-register"]=requestHandlers.validatedRegister;
handle["/assets/avatars"]= requestHandlers.serveImg;
handle["/ocupation"]= requestHandlers.ocupation;
handle["/disconnect"]= requestHandlers.disconnect;
handle["/ocupationcheck"]= requestHandlers.ocupationcheck;
handle["/logOut"] = requestHandlers.logOut;

//Arrancamos el servidor http utilizando la funcion init de server.js (con la función router.route y el objeto handle con las rutas como parametros).
//la ruta handle llama a las diferentes funciones almacenadas en requestHandlers.js dependiendo del tipo de petición
server.init(router.route, handle);