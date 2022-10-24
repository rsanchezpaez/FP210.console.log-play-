var querystring = require("querystring");
var fs = require("fs");
var userRegisters= new Array();
var salas= new Array();
const Sala = require('../models/Sala')
let sala1=new Sala("room1","Sala 1","","");
salas.push(sala1);
let sala2=new Sala("room2","Sala 2","","");
salas.push(sala2);
let sala3=new Sala("room3","Sala 3","","");
salas.push(sala3);


function init(response){

    console.log("Request handler 'init' has been called");
   
    fs.readFile("public/views/home.html", function(err, data){
        if(err){
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
}

function validatedRegister(response, postData){

    console.log("Request handler 'validatedRegister' has been called");
    var myJSON = JSON.parse(postData);
    if(postData){
        var objectUser = {
            "username": myJSON.username,
            "password": myJSON.password,
            "name": myJSON.name,
        }
        console.log("El usuario registrado es:", objectUser)
        userRegisters.push(objectUser);
        //clean post data avoid duplicate records
        postData="";
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end();
    } 
}

function login(response, postData){
    console.log("Request handler 'login' has been called");
    var myJson= JSON.parse(postData);
    var username= myJson.username;
    var password = myJson.password;
    var item = userRegisters.find(item => item.username === username);
    console.log("El item encontrado es", item)
    if(item !== undefined){
        if(item.username === username && item.password === password){
            console.log("puede logearse")
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end();
            }
            
        
        if(item.username === username && item.password !== password){
            //PASSWORD INCORRECT
            console.log("no puede logearse password incorrecta")
            response.writeHead(404, {"Content-Type": "text/html"});
            response.end();
        }    
    }

    if(item === undefined){
        //USER DOESN'T EXISTS
        console.log("no puede logearse usuario no registrado")
        response.writeHead(404, {"Content-Type": "text/html"});
        response.end();
    }
}

function register(response){
    console.log("Request handler register has been called")
    fs.readFile("public/views/register.html", function(err, data){
        if(err){
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
    
}
function gameApp(response){
    fs.readFile("public/views/game-app.html", function(err, data){
        if(err){
            throw err;
        }

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    })
}

function ocupation(response,postData,idpath){

    console.log(querystring.parse(idpath)["room"])
    console.log(querystring.parse(idpath)["user"])
    var chosen_room = salas.find(room => room.numero === querystring.parse(idpath)["room"]);
    console.log(chosen_room)
    if(chosen_room.jugador1!='' && chosen_room.jugador2!='')
    {
    response.writeHead(404, {"Content-Type": "text/html"});
    }
    else{
    if(chosen_room.jugador1==='') {chosen_room.jugador1=querystring.parse(idpath)["user"]}
    else{chosen_room.jugador2=querystring.parse(idpath)["user"]}
    response.writeHead(200, {"Content-Type": "text/html"});
    }
    response.end();
}
function serveImg(response, postData ,idpath){
    
    let img ="src/assets/avatars/guerrera.png"
    if(idpath === "2"){
        img="src/assets/avatars/guerrero.png"
    }
    if(idpath === "3"){
        img="src/assets/avatars/arquera.png"
    }
    if(idpath === "4"){
        img="src/assets/avatars/arquero.png"
    }
    if(idpath === "5"){
        img="src/assets/avatars/maga.png"
    }
    if(idpath === "6"){
        img="src/assets/avatars/mago.png"
    }
    if(idpath === "7"){
        img="src/assets/avatars/monstrua.png"
    }
    if(idpath === "8"){
        img="src/assets/avatars/monstruo.png"
    }
    fs.readFile(img, function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
}  
    

exports.init = init;
exports.login = login;
exports.register = register;
exports.validatedRegister = validatedRegister;
exports.gameApp = gameApp;
exports.serveImg = serveImg;
exports.ocupation = ocupation;



    
    