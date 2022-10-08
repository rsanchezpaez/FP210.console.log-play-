var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.init;
handle["/home"] =requestHandlers.init;
handle["/register"]=requestHandlers.register;
handle["/game-app"]=requestHandlers.login;







server.init(router.route, handle);