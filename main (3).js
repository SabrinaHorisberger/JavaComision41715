let nombreIngresado="";

let edad;
let total = 0;

let mayoriaEdad=true;
let askAgain = true;

const filtrado = new Array();

class Club
{
  constructor(id, tipo, nombre, precio)
  {
      this.id = id;
      this.tipo = tipo;
      this.nombre = nombre;
      this.precio = precio;
  }
}

const club = 
[
  new Club (1, "bailable", "Diosa", 1000), 
  new Club (2, "pub", "El Agujero", 2000), 
  new Club (3, "bailable", "Red Point", 3500), 
  new Club (4, "bailable", "La Luciernaga", 1200), 
  new Club (5, "pub", "Sunshine", 4000), 
  new Club (6, "bailable", "Baby baby", 2600), 
  new Club (7, "pub", "El Faro", 1300), 
  new Club (8, "pub", "Inmortal", 1800), 
  new Club (9, "bailable", "Black Velvet", 3400) 
] 
  
const busquedaNombres = function(strTipo)
{
    const resultado = club.filter(clb => clb.tipo==strTipo);

    const nombre = resultado.map(filtrado => filtrado.nombre);

    console.log(nombre);

    return nombre.join(' ');
}



console.log();

saludo();

comprobar();

if (mayoriaEdad) 
{
  alert(
    "Bienvenido! Los Clubs nocturnos que participan de nuestra agenda son: Diosa, El Agujero, Sunshine, Black Velvet, Red Point, Baby baby, La Luciernaga, El Faro, Inmortal."
  );
}

do 
{
  precioTicket = parseInt(prompt("Cuanto está dispuesto a gastar en la entrada al lugar?")); 
  precioParking = parseInt(prompt(" y en aparcar su auto?"));
  let total = sumar(precioTicket, precioParking);

  if(isNaN(total))
  {
    alert("Volvé a ingresar los precios dispuestos a pagar");
  }
  else
  {
    askAgain = false; 

    if (total < 2000) 
    {
      alert(" los lugares para salir por debajo de los 2000 pesos son: La Luciernaga, Baby Baby, El Faro, Inmortal.");
    } 
    else if (total >= 2000) 
    {
      alert("Por ese rango de precio podes salir a todos esos lugares: Diosa, El Agujero, Sunshine, Black Velvet, Red Point");
    } 

  }
} while (askAgain);

alert ("Ahora veamos que tipo de experiencia estas buscando")

askAgain = true;

do 
{

  let experiencia = prompt("elige: pub o bailable?");


  switch(experiencia.toLowerCase())
  {
    case "bailable":
    case "pub":
      askAgain = false;
      
      alert("los mejores lugares para vivir la experiencia tipo "+experiencia.toLowerCase()+" son:" + busquedaNombres(experiencia.toLowerCase()))
    break;

    default:
      alert("Volvé a ingresar una opción válida");
    break;
  }

} while (askAgain);


function saludo() 
{
  console.log("Hola! bienvenidx a nuestra agenda nocturna!");
  nombreIngresado = prompt("Ingrese su nombre:");
  alert("Que bueno tenerte por aquí, " + nombreIngresado);
}

function comprobar()
{
  do 
  {
    edad = parseInt(prompt("Ingrese su edad: "));
  } while (isNaN(edad));

  if (edad < 18) 
  {
    alert(nombreIngresado +" lamentablemente no cumples con los requisitos de ingreso, nos vemos en un par de años :)");
    mayoriaEdad=false;
  }
}

function sumar(precioTicket, precioParking) 
{
  return precioTicket + precioParking;
}

