var edad;
var altura;
var peso;
var imc;
var nivel;
var x=0;
var promedio=0.0;
var total=0.0;
var prome=0.0;
var nivel;
var prom=document.getElementById(`promedio`)

function Aleatorios() {
    edad = Math.random() * (99 - 18) + 18;
    edad = edad.toFixed();
    console.log(edad);
    document.getElementById('edad').value = edad;

    altura = Math.random() * (1.5 - 2.5) + 2.5;
    altura = altura.toFixed(1);
    console.log(altura);
    document.getElementById('altura').value = altura;

    peso = Math.random() * (130 - 20) + 20;
    peso = peso.toFixed();
    console.log(peso);
    document.getElementById('peso').value = peso;

}

function CalcularIMC() {

    imc=peso/(altura*altura);
    imc=imc.toFixed(1);

    document.getElementById("imc").value=imc;
    if (imc < 18.5) {

        document.getElementById('nivel').value = "Bajo de Peso";
        nivel= "Bajo de Peso";

    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('nivel').value = "Peso Saludable";
        nivel= "Peso Saludable";

    }else if (imc >= 25.0 && imc <= 29.9) {
        document.getElementById('nivel').value = "Sobrepeso";
        nivel= "Sobrepeso";
    }
    else if (imc >= 30.0) {
        document.getElementById('nivel').value = "Obesidad";
        nivel= "Obesidad";
    }

}
function Registrar(){
    var tabla=document.getElementById('Registrar');
    x++;
    tabla.innerHTML = tabla.innerHTML+"<br>"+"Numero: "+x+" EDAD: "+edad+" PESO: "+peso +" Altura: "+altura+" IMC="+imc+" Nivel:"+nivel;

    promediar();

}
function Borrar(){     

    var tabla=document.getElementById('Registrar');
    tabla.innerHTML="";

}
function promediar()
{


    promedio=0;
    total=parseFloat(total)+parseFloat(imc);


    promedio=total/x; 
    prom.innerHTML="El promedio es: "+promedio.toFixed(1);  


}


var btnGenerar = document.getElementById('generar');
btnGenerar.addEventListener('click', Aleatorios);
var btnCalcular = document.getElementById('calcular');
btnCalcular.addEventListener('click', CalcularIMC);
var btnRegistrar= document.getElementById('registrar');
btnRegistrar.addEventListener('click', Registrar);
var btnBorrar= document.getElementById('borrar');
btnBorrar.addEventListener('click', Borrar);