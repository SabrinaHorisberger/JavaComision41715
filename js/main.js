
/*const preguntarNombre2 = document.getElementById ('preguntarNombre2')
preguntarNombre2.addEventListener('input', () => {
console.log (preguntarNombre2.value);
  
})

 /*const preguntarNombre = input1.addEventListener('change', (e) =>{
 const nombreIngresado = e.target.value;
  return nombreIngresado;
  console.log(e.target.value)

});*/

const preguntarNombre = () => {
  const nombreIngresado = prompt("Ingrese su nombre: ");
  return nombreIngresado;
};

const saludar = () => {
  let titulo = document.getElementById("saludo2");
  titulo.innerText = "Que bueno tenerte por aquí, " + preguntarNombre();
};

const comprobarEdad = () => {
  let edad;
  let listaBoliches = document.getElementById("listaBoliches");

  do {
    edad = parseInt(prompt("Ingrese su edad: "));
  } while (isNaN(edad));

  if (edad < 18) {
    listaBoliches.innerHTML = "No contas con los requisitos para poder ingresar";
    
  } else if (edad >= 18) {
    listaBoliches.innerHTML =
      ' <p>"Bienvenido! Los Clubs nocturnos que participan de nuestra agenda son: Diosa, El Agujero, Sunshine, Black Velvet, Red Point, Baby baby, La Luciernaga, El Faro, Inmortal." </p>';
  }
};

const sumar = (precioTicket, precioParking) => {
  return precioTicket + precioParking;
};

const cuantoGastar = () => {
  let total = 0;
  let askAgain = true;
  let debajoDosmil = document.getElementById("debajoDosmil");


  do {
    precioTicket = parseInt(
      prompt("Cuanto está dispuesto a gastar en la entrada al lugar?")
    );
    precioParking = parseInt(prompt(" y en aparcar su auto?"));
    total = sumar(precioTicket, precioParking);

    if (isNaN(total)) {
      alert("Volvé a ingresar los precios dispuestos a pagar");
    } else {
      askAgain = false;

      if (total < 2000) {
        debajoDosmil.innerHTML = 'Los lugares para salir por debajo de los 2000 pesos son: La Luciernaga, Baby Baby, El Faro, Inmortal.';
          
        
      } else if (total >= 2000) {
        
        debajoDosmil.innerHTML = 'Por ese rango de precio podes salir a todos esos lugares: Diosa, El Agujero, Sunshine, Black Velvet, Red Point';
        
      }
    }
  } while (askAgain);
};

const filtrado = new Array();

const busquedaNombres = function (strTipo) {
  const resultado = club.filter((clb) => clb.tipo == strTipo);
  const nombre = resultado.map((filtrado) => filtrado.nombre);
  console.log(nombre);
  return nombre.join(" ");
};

const tipoDeExperiencia = () => {
  let askAgain = true;
  let experiencia = document.getElementById('experiencia');
  experiencia.innerHTML ='Ahora veamos que tipo de experiencia estas buscando:';
  
  do {
    let experienciaElegida = document.getElementById('experienciaElegida');

    let experiencia = prompt("Elige: pub o bailable?");

    switch (experiencia.toLowerCase()) {
      case "bailable":
      case "pub":
        askAgain = false;
        
            experienciaElegida.innerHTML = "Los mejores lugares para vivir la experiencia tipo " +
            experiencia.toLowerCase() +
            " son:" + "" +
            busquedaNombres(experiencia.toLowerCase())
      
        break;

      default:
        alert("Volvé a ingresar una opción válida");
        break;
    }
  } while (askAgain);
};

saludar();
comprobarEdad();
cuantoGastar();
tipoDeExperiencia();
