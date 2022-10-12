var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.init;
handle["/home"] =requestHandlers.init;
handle["/register"]=requestHandlers.register;
handle["/login"]=requestHandlers.login;
handle["/game-app"]=requestHandlers.gameApp;
handle["/validated-register"]=requestHandlers.validatedRegister;
//TODO: improve this routes
handle["/assets/avatars"]= requestHandlers.serveImg;
handle["/assets/avatars2"]= requestHandlers.serveImg2;
handle["/assets/avatars3"]= requestHandlers.serveImg3;
handle["/assets/avatars4"]= requestHandlers.serveImg4;
handle["/assets/avatars5"]= requestHandlers.serveImg5;
handle["/assets/avatars6"]= requestHandlers.serveImg6;
handle["/assets/avatars7"]= requestHandlers.serveImg7;
handle["/assets/avatars8"]= requestHandlers.serveImg8;





server.init(router.route, handle);