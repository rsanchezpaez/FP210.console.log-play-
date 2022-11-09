const Player= require("./Player");
const Room = require("./Room");

//Clase que representa la partida. Cada partida tiene un id y un room
class Game {
  
  constructor(number, room) {
    this.number = number;
    this.room = room;

  }
  getNumber() {
    return this.number;
  }
  setNumber(newNumber) {
    this.number = newNumber;
  }

  //Se pueden obtener los datos de cada Room. Por ejemplo, su id o los jugadores.
  getRoomId() {
    return this.room.getNumber();
  }

  getUser1(){
    return this.room.getPlayer1();
  }

  getUser2(){
    return this.room.getPlayer2();
  }

}

module.exports = Game;
