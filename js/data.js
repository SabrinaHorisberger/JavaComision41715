class Club {
  constructor(id, tipo, nombre, precio) {
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const club = [
  new Club(1, "bailable", "Diosa", 1000),
  new Club(2, "pub", "El Agujero", 2000),
  new Club(3, "bailable", "Red Point", 3500),
  new Club(4, "bailable", "La Luciernaga", 1200),
  new Club(5, "pub", "Sunshine", 4000),
  new Club(6, "bailable", "Baby baby", 2600),
  new Club(7, "pub", "El Faro", 1300),
  new Club(8, "pub", "Inmortal", 1800),
  new Club(9, "bailable", "Black Velvet", 3400),
];
