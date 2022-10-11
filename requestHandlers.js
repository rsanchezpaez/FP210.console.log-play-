var querystring = require("querystring");
var fs = require("fs");
var userRegisters= new Array();


function init(response, postData){

    console.log("Request handler 'init' has been called");
    console.log(postData);
    if(postData){
        //TODO: THERE ARE REGISTER DUPLICATED
        console.log("saving data");
        var objectUser = {
            "username": querystring.parse(postData)['email'],
            "password": querystring.parse(postData)['password'],
            "name": querystring.parse(postData)['name']
        }
        console.log("El usuario registrado es:", objectUser)

        userRegisters.push(objectUser);
        //clean post data avoid duplicate records
        postData="";
    }
    console.log(userRegisters)
   
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
    
    //TODO: PASSWORD AND USER CORRECT? --> REDIRECT TO GAMING PAGE || SAVE VARIABLE USERLOGGED
    //TODO: PASSWORD AND USER WRONG?? --> SHOW MESSAGE
    
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
function gameApp(response){
    fs.readFile("./vistas/game-app.html", function(err, data){
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

function serveImg(response, postData ,idpath){
    console.log("Entro")
    console.log("El id ha llegado como: ", idpath)

    fs.readFile("./assets/avatars/guerrera.png", function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        console.log(data)
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
     //SE BLOQUEA 
    /*
    if(idpath === 1){
        fs.readFile("./assets/avatars/guerrera.png", function(err, data){
            if(err){
                console.log(err)
                throw err;
            }
            console.log(data)
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(data);
            response.end();
        })
    }
    if(idpath === 2){
        fs.readFile("./assets/avatars/guerrero.png", function(err, data){
            if(err){
                throw err;
            }
            console.log(data)
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(data);
            response.end();
        })
    }
    if(idpath === 3){
        fs.readFile("./assets/avatars/arquera.png", function(err, data){
            if(err){
                throw err;
            }
            console.log(data)
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(data);
            response.end();
        })
    }
    if(idpath === 4){
        fs.readFile("./assets/avatars/arquero.png", function(err, data){
            if(err){
                throw err;
            }
            console.log(data)
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(data);
            response.end();
        })
    }
    if(idpath === 5){
        fs.readFile("./assets/avatars/maga.png", function(err, data){
            if(err){
                throw err;
            }
            console.log(data)
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(data);
            response.end();
        })
    }
    if(idpath === 6){
        fs.readFile("./assets/avatars/mago.png", function(err, data){
            if(err){
                throw err;
            }
            console.log(data)
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(data);
            response.end();
        })
    }
    if(idpath === 7){
        fs.readFile("./assets/avatars/monstrua.png", function(err, data){
            if(err){
                throw err;
            }
            console.log(data)
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(data);
            response.end();
        })
    }
    if(idpath === 7){

        fs.readFile("./assets/avatars/monstruo.png", function(err, data){
            if(err){
                throw err;
            }
            console.log(data)
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(data);
            response.end();
        })
    }

*/

   
}
function serveImg2(response, postData ,idpath){
    console.log("Entro")
    console.log("El id ha llegado como: ", idpath)

    fs.readFile("./assets/avatars/guerrero.png", function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        console.log(data)
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
    

   
}
function serveImg3(response, postData ,idpath){
    console.log("Entro")
    console.log("El id ha llegado como: ", idpath)

    fs.readFile("./assets/avatars/arquera.png", function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        console.log(data)
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
    

   
}
function serveImg4(response, postData ,idpath){
    console.log("Entro")
    console.log("El id ha llegado como: ", idpath)

    fs.readFile("./assets/avatars/arquero.png", function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        console.log(data)
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
    

   
}
function serveImg5(response, postData ,idpath){
    console.log("Entro")
    console.log("El id ha llegado como: ", idpath)

    fs.readFile("./assets/avatars/maga.png", function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        console.log(data)
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
    

   
}
function serveImg6(response, postData ,idpath){
    console.log("Entro")
    console.log("El id ha llegado como: ", idpath)

    fs.readFile("./assets/avatars/mago.png", function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        console.log(data)
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
    

   
}
function serveImg7(response, postData ,idpath){
    console.log("Entro")
    console.log("El id ha llegado como: ", idpath)

    fs.readFile("./assets/avatars/monstrua.png", function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        console.log(data)
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
    

   
}
function serveImg8(response, postData ,idpath){
    console.log("Entro")
    console.log("El id ha llegado como: ", idpath)

    fs.readFile("./assets/avatars/monstruo.png", function(err, data){
        if(err){
            console.log(err)
            throw err;
        }
        console.log(data)
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.write(data);
        response.end();
    })
    

   
}

exports.init = init;
exports.login = login;
exports.postData= postData;
exports.register = register;
exports.gameApp = gameApp;
exports.serveImg = serveImg;
exports.serveImg2 = serveImg2;
exports.serveImg3 = serveImg3;
exports.serveImg4 = serveImg4;
exports.serveImg5 = serveImg5;
exports.serveImg6 = serveImg6;
exports.serveImg7 = serveImg7;
exports.serveImg8 = serveImg8;



    
    