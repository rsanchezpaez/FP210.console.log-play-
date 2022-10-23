const Jugador= require("../models/Jugador");
const Sala = require("../models/Sala");

class Partida {
  constructor(numero, sala, usuario1, usuario2) {
    this.numero = numero;
    this.sala = sala;
    this.usuario1 = usuario1;
    this.usuario2 = usuario2;
  }
  getNumero() {
    return this.numero;
  }
  setNumero(numeroNuevo) {
    this.numero = numeroNuevo;
  }

  getSalaId() {
    return this.sala.getNumero();
  }

  setSalaId(idSalaNuevo) {
    this.sala = sala.setSalaId(idSalaNuevo);
  }

  getJugador1() {
    return this.jugador1;
  }


  getJugador2() {
    return this.jugador2;
  }
}

module.exports = Partida;
