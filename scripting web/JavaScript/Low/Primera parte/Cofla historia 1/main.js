dineroCofla = prompt("cuanto dinero tienes Cofla?");
dineroRoberto = prompt("cuanto dinero tienes Roberto?");
dineroPedro = prompt("cuanto dinero tienes Pedro?");
dineroCofla = parseInt(dineroCofla); //Esto convertia en numero a un string
if (dineroCofla >= 0.6 && dineroCofla<1) {
alert("Cofla comprate el helado de agua");
alert("y te sobra: " + (dineroCofla - 0.6)//Esto lo cierro entre parentesis ya que ufnciona como separar en terminos matematicamente hablando
}                          
else if (dineroCofla >=1 && dineroCofla<1.6) {
alert("Cofla comprate el helado de crema");
alert("y te sobra: " + (dineroCofla -1)); //Esto lo cierro entre parentesis ya que ufnciona como separar en terminos matematicamente hablando
else if (dineroCofla >= 1.6&& dineroCofla<1.7) {
alert("Cofla comprate el helado de heladix");
alert("y te sobra: " + (dineroCofla - 1.6));//Esto lo cierro entre parentesis ya que ufnciona como separar en terminos matematicamente hablando 
}
else if (dineroCofla >= 1.7&& dineroCofla<1.8) {
alert("Cofla comprate el helado de heladovich");
alert("y te sobra: " + (dineroCofla - 1.7));//Esto lo cierro entre parentesis ya que ufnciona como separar en terminos matematicamente habland
}
else if (dineroCofla >= 1.8&& dineroCofla<2.9) {
alert("Cofla comprate el helado de helardo");
alert("y te sobra: " + (dineroCofla - 1.8));//Esto lo cierro entre parentesis ya que ufnciona como separar en terminos matematicamente hablando
}
else if (dineroCofla >= 2.9) {
alert("Cofla comprate el helado con confites o un pote de 1/4 de helado");
alert("y te sobra: " + (dineroCofla - 2.9));//Esto lo cierro entre parentesis ya que ufnciona como separar en terminos matematicamente hablando
 else{
 alert("lo siento Cofla , pobre de mierda, no te alcanza para ningun puto helado. flaco escualido hijo de puta");
 }

if (dineroRoberto >= 0.6 && dineroRoberto<1) {
alert(" Roberto comprate el helado de agua");
}                          
else if (dineroRoberto >=1 && dineroRoberto<1.6) {
alert(" Roberto comprate el helado de crema");
};
else if (dineroRoberto >= 1.6&& dineroRoberto<1.7) {
alert(" Roberto comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7&& dineroRoberto<1.8) {
alert(" Roberto comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8&& dineroRoberto<2.9) {
alert(" Roberto comprate el helado de helardo");
}
else if (dineroRoberto >= 2.9) {
alert(" Roberto comprate el helado con confites o un pote de 1/4 de helado");
}
 else{
 alert("lo siento Roberto, pobre de mierda, no te alcanza para ningun puto helado. flaco escualido hijo de puta");
 }

 if (dineroPedro >= 0.6 && dineroPedro<1) {
alert("Pedrocomprate el helado de agua");
}                          
else if (dinerPedro >=1 && dineroPedro<1.6) {
alert("Pedrocomprate el helado de crema");
}
else if (dineroPedro >= 1.6&& dineroPedro<1.7) {
alert("Pedrocomprate el helado de heladix");
}
else if (dineroPedro >= 1.7&& dineroPedro<1.8) {
alert("Pedrocomprate el helado de heladovich");
}
else if (dineroPedro >= 1.8&& dineroPedro<2.9) {
alert("Pedrocomprate el helado de helardo");
}
else if (dineroPedro >= 2.9) {
alert("Pedrocomprate el helado con confites o un pote de 1/4 de helado");
}
 else{
 alert("lo siento Pedro, pobre de mierda, no te alcanza para ningun puto helado. flaco escualido hijo de puta");
 }

