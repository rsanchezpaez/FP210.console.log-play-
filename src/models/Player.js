//Clase que representa a cada jugador
module.exports = class Player {
  constructor (name, username, password){
    this.name = name;
    this.username = username;
    this.password = password;
  }

//Getters de los atributos
  getName() {
    return this.name;
  }

  getUsername() {
    return this.number;
  }

  getPassword(){
    return this.password
  }

  //Setters de los atributos
  setName(newName){
    this.name = newName;
  }

  setUsername(newUsername){
    this.username = newUsername;
  }

  setPassword(newPassword){
    this.password = newPassword;
  }
}