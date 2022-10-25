const Player= require("./Player");
const Room = require("./Room");

class Game {
  constructor(number, room, user1, user2) {
    this.number = number;
    this.room = room;
    this.user1 = user1;
    this.user2 = user2;
  }
  getNumber() {
    return this.number;
  }
  setNumber(newNumber) {
    this.number = newNumber;
  }

  getRoomId() {
    return this.room.getNumero();
  }

  setRoomId(newRoomId) {
    this.room = room.setSalaId(newRoomId);
  }

  getPlayer1() {
    return this.player1;
  }


  getJPlayer2() {
    return this.player2;
  }
}

module.exports = Game;
