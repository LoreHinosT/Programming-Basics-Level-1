
//¿Cómo sabemos que necesitamos un bucle aquí?
 // Necesitamos recorrer los km del corredor para hacer saltar los caramelos
//¿Cuál es el punto de partida del bucle?
 // El punto de partida es km=0
//¿Cuándo debe detenerse el bucle? 
 //Cuando llegue al km=10
//¿Cómo sabrá parar? 
 //El contador km lo indicara
//¿Cuál es el incremento para cada iteración del bucle? 
 //Se incrementa 1 unidad
//¿Qué variables necesitamos? 
 //Para que el bucle while funcione debemos tener en cuenta las variables: km
var km=0;
var caramel=0;
    
while (km<=10){
    if (km%3==0){
        console.log("Dar un caramelo");
        caramel++;
    }
    km=++;
 }
console.log("numero de caramelos recibidos"+caramel);


//Crea un nuevo bucle en el que el corredor solo reciba un caramelo cada 3 kilómetros Y si se desplaza a más de 9 kilómetros por hora.

var km=0;
var caramel=0;
var velocidad=10
while (km<=10&&velocidad>9){
    if (km%3==0){
        console.log("Dar un caramelo");
        caramel++;
    }
    km++;
 }
console.log("numero de caramelos recibidos"+caramel);


