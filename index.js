var server = require("./server");
var router = require("./router");
var requestHandlers = require("./src/controlers/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.init;
handle["/home"] =requestHandlers.init;
handle["/register"]=requestHandlers.register;
handle["/login"]=requestHandlers.login;
handle["/game-app"]=requestHandlers.gameApp;
handle["/validated-register"]=requestHandlers.validatedRegister;
handle["/assets/avatars"]= requestHandlers.serveImg;

server.init(router.route, handle);