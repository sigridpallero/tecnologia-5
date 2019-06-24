function boton8response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+8;
  display.setAttribute("value", newvalue);
  } 



let boton8=document.getElementById("btn8");
  boton8.addEventListener('click', boton8response);

function boton5response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+5;
  display.setAttribute("value", newvalue);
  } 





let boton5=document.getElementById("btn5");
  boton5.addEventListener('click', boton5response);

function boton9response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+9;
  display.setAttribute("value", newvalue);
  } 



let boton9=document.getElementById("btn9");
  boton9.addEventListener('click', boton9response);

function boton7response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+7;
  display.setAttribute("value", newvalue);
  } 



let boton7=document.getElementById("btn7");
  boton7.addEventListener('click', boton7response);

function boton6response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+6;
  display.setAttribute("value", newvalue);
  } 



let boton6=document.getElementById("btn6");
boton6.addEventListener('click', boton6response);

function boton4response()
{
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+4;
  display.setAttribute("value", newvalue);
} 

let boton4=document.getElementById("btn4");
boton4.addEventListener('click', boton4response);


function botonMasresponse()
{
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+"+";
  display.setAttribute("value", newvalue);
 } 

let botonMas=document.getElementById("btn+");
botonMas.addEventListener('click', botonMasresponse);

function botonMenosresponse()
{
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+"-";
  display.setAttribute("value", newvalue);
} 

let botonMenos=document.getElementById("btn-");
botonMenos.addEventListener('click', botonMenosresponse);

function botonBarraresponse()
{
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+"/";
  display.setAttribute("value", newvalue);
} 



let botonBarra=document.getElementById("btn/");
botonBarra.addEventListener('click', botonBarraresponse);

function botonPorresponse()
{
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+"*";
  display.setAttribute("value", newvalue);
} 

let botonPor=document.getElementById("btn*");
botonPor.addEventListener('click', botonPorresponse);

function boton3response()
{
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+3;
  display.setAttribute("value", newvalue);
} 

let boton3=document.getElementById("btn3");
boton3.addEventListener('click', boton3response);

function boton2response()
{
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+2;
  display.setAttribute("value", newvalue);
} 



let boton2=document.getElementById("btn2");
  boton2.addEventListener('click', boton2response);

function boton1response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+1;
  display.setAttribute("value", newvalue);
  } 



let boton1=document.getElementById("btn1");
  boton1.addEventListener('click', boton1response);

function botonComaresponse()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+".";
  display.setAttribute("value", newvalue);
} 
let botonComa=document.getElementById("btn.");
botonComa.addEventListener('click', botonComaresponse);


function botonBorrarHandler()
{
  let display=document.getElementById("display");
  display.setAttribute("value","");
} 
let botonBorrar=document.getElementById("btn.");
botonBorrar.addEventListener('click', botonBorrarHandler);

function botonEqualHandler()
{
  let display=document.getElementById("display");
  display.setAttribute( "value", eval( display.getAttribute("value") ) );
}
let botonEqual=document.getElementById("btn.");
botonEqual.addEventListener('click', botonEqualHandler);









