var altura; //al menos 1 metro de alto para subir
var edad; //Ser mayor de 10 años
altura=prompt("Ingrese la altura",""); //Comando para pedir al usuario que ingrese la altura y edad
edad=prompt("Ingrese la edad","");

if (altura>52)&&(edad>10){
    console.log("¡Subete chico!");
}
else{
    console.log("Lo siento, chico. Tal vez el proximo año");
}
if (altura>52)||(edad>10){
    console.log("¡Subete chico!");
}
else{
    console.log("Lo siento, chico. Tal vez el proximo año");
}