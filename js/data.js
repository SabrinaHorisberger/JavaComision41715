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


const clubs = [club1, club2, club3, club4, club5, club6, club7, club8, club9]

localStorage.setItem('clubs',JSON.stringify(clubs));

console.log(JSON.parse(localStorage.getItem('clubs')));

  