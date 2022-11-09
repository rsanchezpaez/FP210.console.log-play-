//Use this module to storage functions for each request handler. Combine with the router.

var querystring = require("querystring");
//fs.readFile is destructured to avoid download the whole fs module.
var{readFile}= require("fs");
const Room = require('../models/Room');
const Player = require('../models/Player');
const Game = require("../models/Game");

var userRegisters = new Array();

var rooms = new Array();
let room1 = new Room("room1", "Room 1", "", "");
let room2 = new Room("room2", "Room 2", "", "");
let room3 = new Room("room3", "Room 3", "", "");
rooms.push(room1);
rooms.push(room2);
rooms.push(room3);


function init(response) {

    readFile("public/views/home.html", function (err, data) {
        if (err) {
            throw err;
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    })
}
//When fetch the path of /validated-register (register.html). 
function validatedRegister(response, postData) {

    var myJSON = JSON.parse(postData);
    if (postData) {
        if(myJSON.name === '' || myJSON.username === '' || myJSON.password === ''){
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end();
        }
       
        if(myJSON.name !== '' && myJSON.username !== '' && myJSON.password !== ''){
            var newUser = new Player(myJSON.name, myJSON.username, myJSON.password);
            var userRepited = userRegisters.find(user => user.username === newUser.username);
            if(userRepited === undefined){
                userRegisters.push(newUser);
                //clean post data avoid duplicate records
                postData = "";
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end();
            }else{
                response.writeHead(404, { "Content-Type": "text/html" });
                response.end();
            }
           
        }

        
    }
}

//When fetch the path of /login (home.html). 
function login(response, postData) {
    var myJson = JSON.parse(postData);
    var username = myJson.username;
    var password = myJson.password;
    var item = userRegisters.find(item => item.username === username);

    if (item !== undefined) {
        if (item.username === username && item.password === password) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end();
        }


        if (item.username === username && item.password !== password) {
            //PASSWORD INCORRECT
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end();
        }
    }

    if (item === undefined) {
        //USER DOESN'T EXISTS
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end();
    }
}

//read and load register.html when link to /register
function register(response) {
    readFile("public/views/register.html", function (err, data) {
        if (err) {
            throw err;
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    })

}
//read and load game.app.html when fetch to /game-app
function gameApp(response) {
    readFile("public/views/game-app.html", function (err, data) {
        if (err) {
            throw err;
        }

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    })
}

        /**
        * Wipe out user from a Room.
        * @param  {idpath} room Number of the room.
        */
function disconnect(response, postData, idpath) {
    var chosen_room = rooms.find(room => room.number === querystring.parse(idpath)["room"]);
    console.log(chosen_room);
    if (chosen_room.player1 === querystring.parse(idpath)["user"]){
        console.log(chosen_room.player1);
        chosen_room.player1 =''; 
        response.writeHead(200, { "Content-Type": "text/html" });
    }
    else if (chosen_room.player2 === querystring.parse(idpath)["user"]){
        console.log(chosen_room.player2);
        chosen_room.player2 =''; 
        response.writeHead(200, { "Content-Type": "text/html" });
    }
    else {
        console.log("no encontrado");
        response.writeHead(404, { "Content-Type": "text/html" });
    }
    response.end();
}
        /**
        * Check if a room is full or not.
        * @param  {idpath} room Number of the checked room.
        */
function ocupationcheck(response, postData, idpath) {
    var chosen_room = rooms.find(room => room.number === querystring.parse(idpath)["room"]);
    if (chosen_room.player1 != '' && chosen_room.player2 != '') {
        response.writeHead(403, { "Content-Type": "text/html" });
    }
    else if (chosen_room.player1 == '' && chosen_room.player2 == '') {
        response.writeHead(200, { "Content-Type": "text/html" });
    }
    else {
        response.writeHead(201, { "Content-Type": "text/html" });
    }
    response.end();

}
        /**
        * Ocupate a room with drag and drop event.
        * @param  {idpath} room Number of the checked room.
        */
function ocupation(response, postData, idpath) {

    var chosen_room = rooms.find(room => room.number === querystring.parse(idpath)["room"]);
    if (chosen_room.player1 != '' && chosen_room.player2 != '') {
        response.writeHead(404, { "Content-Type": "text/html" });
    }
    else {
        if(chosen_room.player1 === '') {
            chosen_room.player1 = querystring.parse(idpath)["user"]
        }
        else{
            chosen_room.player2 = querystring.parse(idpath)["user"]
        }

        response.writeHead(200, { "Content-Type": "text/html" });
    }
    response.end();
}


function serveImg(response, postData, idpath) {
    let img = "src/assets/avatars/guerrera.png"
    if (idpath === "2") {
        img = "src/assets/avatars/guerrero.png"
    }
    if (idpath === "3") {
        img = "src/assets/avatars/arquera.png"
    }
    if (idpath === "4") {
        img = "src/assets/avatars/arquero.png"
    }
    if (idpath === "5") {
        img = "src/assets/avatars/maga.png"
    }
    if (idpath === "6") {
        img = "src/assets/avatars/mago.png"
    }
    if (idpath === "7") {
        img = "src/assets/avatars/monstrua.png"
    }
    if (idpath === "8") {
        img = "src/assets/avatars/monstruo.png"
    }
    readFile(img, function (err, data) {
        if (err) {
            console.log(err)
            throw err;
        }

        response.writeHead(200, { "Content-Type": "image/jpeg" });
        response.write(data);
        response.end();
    })
}
        /**
        * Log out an user from session and wipe out room's data.
        * @param  {idpath} registeredUser Number of the user.
        */
function logOut(response, postData, idpath){

    var userNameLogOut = idpath.replace('user=', '');

    rooms.forEach(room => {
        for (const key in room) {
            if(key === 'player1'){
                var value = room[key];
                if(value === userNameLogOut){
                    room[key] = '';
                    console.log(rooms);
                }
            }
            if(key === 'player2'){
                var value = room[key];
                if(value === userNameLogOut){
                    room[key] = '';
                    console.log(rooms);
                }
            }
        }
        
    });

    readFile("public/views/home.html", function (err, data) {
        if (err) {
            throw err;
        }
        response.writeHead(200, { "Content-Type": "text/html" });
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
exports.disconnect = disconnect;
exports.ocupationcheck = ocupationcheck;
exports.logOut = logOut;



