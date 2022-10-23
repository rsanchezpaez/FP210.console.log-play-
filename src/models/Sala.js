const Usuario = require('../models/Jugador')

class Sala {
  constructor(numero, nombre, jugador1, jugador2) {
    this.numero = numero;
    this.nombre = nombre;
    this.jugador1 = jugador1;
    this.jugador2 = jugador2;
  }

  getNumero() {
    return this.numero;
  }
  getNombre() {
    return this.nombre;
  }

  getJugador1() {
    return this.jugador1;
  }

  getJugador2() {
    return this.jugador2;
  }

  setNumero(nuevoNumero) {
    this.numero = nuevoNumero;
  }

  setNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  setJugador1(jugador1) {
    this.jugador1 = jugador1;
  }

  setJugador2(jugador2) {
    this.jugador2 = jugador2;
  }

  jugadoresEnSala() {
    let numeroJugadores = 0;
    if (jugador1) {
      numeroJugadores++;
    }
    if (jugador2) {
      numeroJugadores++;
    }
    return numeroJugadores;
  }
}

module.exports = Sala;
