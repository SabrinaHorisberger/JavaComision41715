class Club {
  constructor(id, tipo, nombre, precio) {
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio;
  }
}




  const club1 = new Club(1, "bailable", "Diosa", 1000)
  const club2 = new Club(2, "pub", "El Agujero", 2000)
  const club3 = new Club(3, "bailable", "Red Point", 3500)
  const club4 = new Club(4, "bailable", "La Luciernaga", 1200)
  const club5 = new Club(5, "pub", "Sunshine", 4000)
  const club6 = new Club(6, "bailable", "Baby baby", 2600)
  const club7 = new Club(7, "pub", "El Faro", 1300)
  const club8 = new Club(8, "pub", "Inmortal", 1800)
  const club9 = new Club(9, "bailable", "Black Velvet", 3400)
  const club10 = new Club(1, "bailable", "Tiger", 1000)
  const club11 = new Club(2, "pub", "Sky", 2000)
  const club12 = new Club(3, "bailable", "Return", 3500)
  const club13 = new Club(4, "bailable", "Heelll", 1900)
  const club14 = new Club(5, "pub", "Tamarindo", 5000)
  const club15 = new Club(6, "bailable", "Arcano", 2600)
  const club16 = new Club(7, "pub", "Astral", 1300)
  const club17 = new Club(8, "pub", "White", 1500)
  const club18 = new Club(9, "bailable", "Vainilla", 3400)


const clubs = [club1, club2, club3, club4, club5, club6, club7, club8, club9,club10, club11, club12, club13, club14, club15, club16, club17, club18]

localStorage.setItem('clubs',JSON.stringify(clubs));

console.log(JSON.parse(localStorage.getItem('clubs')));

  