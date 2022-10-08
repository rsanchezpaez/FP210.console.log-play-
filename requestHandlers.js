var querystring = require("querystring");
var fs = require("fs");

function init(response, postData){

    console.log("Request handler 'init' has been called");
    console.log(postData);
    if(postData){
        //TODO: SAVE DATA FUNCTION
        console.log("saving data");
        var objectUser = {
            "userneame": querystring.parse(postData)['email'],
            "password": querystring.parse(postData)['password'],
            "name": querystring.parse(postData)['name']
        }
        console.log("El usuario registrado es:", objectUser)

    }
   
    fs.readFile("./vistas/home.html", function(err, data){
        if(err){
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
}

function login(response, postData){
    console.log("Request handler 'login' has been called");
    console.log(postData)
    
    //TODO: PASSWORD AND USER CORRECT? --> REDIRECT TO GAMING PAGE || SAVE VARIABLE USERLOGGED
    //TODO: PASSWORD AND USER WRONG?? --> SHOW MESSAGE
    var isCorrect = true;
    if(isCorrect){
        fs.readFile("./vistas/game-app.html", function(err, data){
            if(err){
                throw err;
            }
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data);
            response.end();
        })
    }
    
}

function register(response){
    console.log("Request handler register has been called")
    fs.readFile("./vistas/register.html", function(err, data){
        if(err){
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
    
}
function postData(response, postData){
    
    console.log("Request handler postData has been called");
    console.log("has posteado:" ,postData)
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("You write: " + 
        querystring.parse(postData)["email"] + querystring.parse(postData)["password"]
    );
    response.end();

}



exports.init = init;
exports.login = login;
exports.postData= postData;
exports.register = register;