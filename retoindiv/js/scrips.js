window.onload = function()
{
  //de farenheit a centigrados
  var grados=parseInt(prompt("Introduzca una temperatura en grados farenheit"));
  console.log(grados + "ºF equivalen a: " + ((grados-32)*(5/9)) + "ºC.");
  //de  centigrados a farenheit
  var grados=parseInt(prompt("Introduzca una temperatura en grados centigrados"));
  console.log(grados + "ºC equivalen a: " + ((grados*(9/5))+32) + "ºF.");
  //de  centigrados a Kelvin
  var grados=parseInt(prompt("Introduzca una temperatura en grados centigrados"));
  console.log(grados + "ºC equivalen a: " + ((grados+273.5) + "ºK."));
  //de  Kelvin a  centigrados
  var grados=parseInt(prompt("Introduzca una temperatura en grados kelvin"));
  console.log(grados + "ºK equivalen a: " + ((grados-273.5) + "ºC."));
  //de Galones a litros
  var Galones=parseInt(prompt("Introduzca una cantidad en Galones"));
  console.log(Galones +" " +  "Galones equivalen a: " + ((Galones*3.7854) + "litros."));
  //Peso en la luna
  var Peso=parseInt(prompt("Introduzca su peso"));
  console.log(  "Su peso en la luna es: " + ((Peso/6) + "Kg."));
//suma de fraccionarios
  var uno = "3/5";
  var dos = "2/5";
  var parteuno = uno.split("/");
  var partedos = dos.split("/");
  console.log(parteuno);
  console.log(partedos);
  var denominador = parteuno[1] * partedos[1];
  var numerador = ((partedos[0] * parteuno[1]) + (partedos[1] * parteuno[0]));
  var r = numerador + "/" + denominador;
    console.log("Suma de fraccionarios " + (r));
  //resta de fraccionarios
  var uno = "3/5";
  var dos = "2/5";
  var parteuno = uno.split("/");
  var partedos = dos.split("/");
  console.log(parteuno);
  console.log(partedos);
  var denominador = parteuno[1] * partedos[1];
  var numerador = ((partedos[0] * parteuno[1]) - (partedos[1] * parteuno[0]));
  var r = numerador + "/" + denominador;
    console.log("Resta de fraccionarios " + (r));
  //multiplicacion de fraccionarios
  var uno = "3/5";
  var dos = "2/5";
  var parteuno = uno.split("/");
  var partedos = dos.split("/");
  console.log(parteuno);
  console.log(partedos);
  var denominador = parteuno[1] * partedos[1];
  var numerador = ((partedos[0] * parteuno[0]));
  var r = numerador + "/" + denominador;
  console.log("moltiplicacion de fraccionarios " + (r));
  //division de fraccionarios
  var uno = "3/5";
  var dos = "2/5";
  var parteuno = uno.split("/");
  var partedos = dos.split("/");
  console.log(parteuno);
  console.log(partedos);
  var denominador = parteuno[1] * partedos[0];
  var numerador = ((partedos[1] * parteuno[0]));
  var r = numerador + "/" + denominador;
  console.log("Division de fraccionarios " + (r));

};
