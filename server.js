var {createServer} = require("http");
var url = require("url");

function init(route, handle){

    function onRequest(request, response){
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
    createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
} 

exports.init = init;