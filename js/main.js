const checkearEdad = () =>{
  return edad >= 18 || edad === undefined
}


const getSumaDeNombres = (listaDeNombres) =>{
  let sumaDeLosNombres = ""

  for(let boliche of listaDeNombres){
    const {nombre} = boliche 
    
    if(sumaDeLosNombres === ""){
      sumaDeLosNombres = nombre
    }else{
      sumaDeLosNombres += ", " + nombre
    }
  }
  return sumaDeLosNombres
}


let edad;

const botonDarkMode = document.getElementById('botonDarkMode');
botonDarkMode.addEventListener('click', () =>{
  Swal.fire({
    icon: 'success',
    title: 'party mode activado!',
    text: '♪ ♬ ─=≡Σ((( つ•̀ω•́)つLET’SGO! ♬ ♪',
    timer: 2400,
  })
})
const botonLightMode = document.getElementById('botonLightMode');
botonLightMode.addEventListener('click', () =>{
  Swal.fire({
    icon: 'success',
    title: 'take it easy mode activado!',
    text: '(⌣_⌣”)',
    timer: 2400
  })
})

let darkMode

if(localStorage.getItem('theme')){
  darkMode = localStorage.getItem('theme');
}else{
    localStorage.setItem('theme', "light");
}

if(darkMode == "dark"){
  document.body.classList.add('darkMode');
}

botonDarkMode.addEventListener('click', () =>{
  document.body.classList.add('darkMode');
  localStorage.setItem('theme', "dark");
});

botonLightMode.addEventListener('click', () =>{
    document.body.classList.remove('darkMode');
    localStorage.setItem('theme', "light");
});


  const input1 = document.getElementById("preguntarNombre2");

  input1.addEventListener("change", (e) => {
    if(checkearEdad()){
      let nombre = e.target.value;
      let titulo = document.getElementById("saludo2");
      if (nombre.lenght !== 0) {
        titulo.innerText = "Que bueno tenerte por aquí, " + nombre;
      }
    }else{
    alert("No tienes edad suficiente")
  }
});



let listaBoliches = document.getElementById("listaBoliches");



const comprobarEdad = () => {

    const input2 = document.getElementById("edades");
    input2.addEventListener("change", (e) => {
    edad = e.target.value;
    console.log(edad);
    if (edad < 18) {
      listaBoliches.innerHTML =
        "No contas con los requisitos para poder ingresar";
    } else if (edad >= 18) {
      listaBoliches.innerHTML =
        `Bienvenido! Los Clubs nocturnos que participan de nuestra agenda son: ${getSumaDeNombres(clubs)} ` ;
    }
  });
};
comprobarEdad();

const sumar = (gastoEntrada, gastoParking) => {
  return Number(gastoEntrada) + Number(gastoParking);
};

const cuantoGastar = () => {
  if(checkearEdad()){
    const textoFiltrador = document.getElementById("debajoDosmil");
    const input3 = document.getElementById("gastoEntrada").value;
    const input4 = document.getElementById("gastoParking").value;
    let total = sumar(input3, input4);

    //filtro de precio disuesto a gastar
    const bolichesFiltrados = clubs.filter((boliche) => boliche.precio <= total )

    console.log(total);

    textoFiltrador.innerHTML = `<p> Los lugares para salir por debajo de los ${total} pesos son: ${getSumaDeNombres(bolichesFiltrados)} <p>`

  }else{
    alert("No tienes edad suficiente")
  }
};

const filtrado = new Array();

const busquedaNombres = function (strTipo) {
  const resultado = clubs.filter((clb) => clb.tipo == strTipo);
  const nombre = resultado.map((filtrado) => filtrado.nombre);
  console.log(nombre);
  return nombre.join(" ");
};


let askAgain = true;
const input5 = document.getElementById("tipoExperiencia");
input5.addEventListener("change", (e) => {
  if(checkearEdad()){
    let experiencia = e.target.value;
      console.log(experiencia);

      do {
        let experiencias = document.getElementById("experienciaElegida");
        console.log(experiencias);

        //console.log(experiencias?.nombre || "esa experiencia no existe");


        switch (experiencia.toLowerCase()) {
          case "bailable":
          case "pub":
            askAgain = false;

            experiencias.innerHTML =
              "Los mejores lugares para vivir la experiencia tipo " +
              experiencia.toLowerCase() +
              " son: " +
              "" +
              busquedaNombres(experiencia.toLowerCase());
            break;

          default:
            alert("Volvé a ingresar una opción válida");
            break;
        }
      } while (askAgain);
    }else{
      alert("No tienes edad suficiente")
    }
});

document
  .getElementById("gastoParking")
  .addEventListener("change", cuantoGastar);
