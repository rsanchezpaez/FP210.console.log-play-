module.exports = class Jugador {
  constructor (nombre, username, password){
    this.nombre = nombre;
    this.username = username;
    this.password = password;
  }


  getNombre() {
    return this.nombre;
  }

  getUsername() {
    return this.numero;
  }

  getPassword(){
    return this.password
  }

  setNombre(nuevoNombre){
    this.nombre = nuevoNombre;
  }

  setUsername(nuevoUsername){
    this.username = nuevoUsername;
  }

  setPassword(nuevoPassword){
    this.password = nuevoPassword;
  }
}