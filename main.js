
alert('Hola! bienvenidx a nuestra agenda nocturna')

let nombreIngresado = prompt('Ingrese su nombre:');
alert('que bueno tenerte por aquí, ' + nombreIngresado)

let edad 
do{
    edad = parseInt (prompt ( 'Ingrese su edad: '));

    if((edad<18)){
     
    alert(nombreIngresado +  'lamentablemente no cumples con los requisitos de ingreso, nos vemos en un par de años :)')
     }
    
    
} while(isNaN(edad) || edad <=18){
        alert('Bienvenido!');
     }
    

     alert ('Los Clubs nocturnos que participan de nuestra agenda son:')