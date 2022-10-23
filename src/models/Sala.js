class Sala {
  constructor (numero, nombre){
    this.numero = numero;
    this.nombre = nombre;
  }

  getNumero() {
    return this.numero;
  }
  getNombre() {
    return this.nombre;
  }

  setPath(nuevoNumero){
    this.numero = nuevoNumero;
  }

  setName(nuevoNombre){
    this.nombre = nuevoNombre;
  }
}

module.exports = Sala;