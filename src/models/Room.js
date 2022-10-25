const User = require('./Player')

class Room {
  constructor(number, name, player1, player2) {
    this.number = number;
    this.name = name;
    this.player1 = player1;
    this.player2 = player2;
  }

  getNumber() {
    return this.number;
  }
  getName() {
    return this.name;
  }

  getPlayer1() {
    return this.player1;
  }

  getPlayer2() {
    return this.player2;
  }

  setNumber(newNumber) {
    this.number = newNumber;
  }

  setNumber(newName) {
    this.name = newName;
  }

  setPlayer1(player1) {
    this.player1 = player1;
  }

  setPlayerr2(player2) {
    this.player2 = player2;
  }

  playersInRoom() {
    let numberPlayers = 0;
    if (player1) {
      numberPlayers++;
    }
    if (player2) {
      numberPlayers++;
    }
    return numberPlayers;
  }
}

module.exports = Room;
