// Hola mundo
//alert('hola mundo!');

// Comentarios
 //comentarios de linea
 /*comentarios de mas 
 de una lineas*/ 

// Crea una página que muestre el mensaje en el html 'Soy JavasScript'
//document.write('Soy JavaScript');

// Sentencias
//alert('Hola'); alert('mundo');
    //alert('Hola'); 
    //alert('mundo');
        // Inserción automatica de punto y coma
        //alert('Hola') 
        //alert('mundo')
/*-----------------------------------------------------------------------------*/
// Variables

let mensaje;
mensaje = "hola mundo"
//alert(mensaje)

let a = 5;
let b = 6;
let suma = a + b;
//console.log("El resultado de la suma es: ",suma);

let nombre = "Sowil";
let nombre2 = nombre;

nombre2 = "Muñoz";
//console.log("El nombre uno es: ",nombre);
//console.log("El nombre dos es: ",nombre2);

// Nombrar variables con camel case
nombreUno = "Sowil";
nombreDos = "Muñoz";

// Nombrar como underscore
nombre_uno = "Sowil";
nombre_Dos = "Muñoz";

// nombres no comunes 
let $ = 1;
let _ = 2;

/* no puedes nombrar variables de esta manera
let 1a = 3;
let primer-nombre = 4; */

'use stric'
mensaje = 'hola mundo';

// Constantes
const PI = 3.141624;
const COLOR_ROJO = "#FFFFF";
pi_dos = PI;
pi_dos = 7;
//console.log(PI);
//console.log(pi_dos);

// const id_account = get_id_account(45);

// Tipos de datos

// JS es un lenguaje dinamicamente tipado 
let mensaje_tres = "hola";
mensaje_tres = 12345;

// numero 
let n = 123;
n = 12.456;

// Valores numericos especiales Infiniti, -Infinite y NaN

// Infinity: representa el infinito matematico. Es un valor especial que es mayor que cualquier número;
//console.log(1 / 0);
//console.log(Infinity);

// NaN: Representa un error de cálculo. Es el resultado de una operación matemtica incorrecta o indefinida
//console.log("No es un número" / 2);

// Nan es conocido como pegajoso. Cualquir operación sobre NaN se vuelve NaN
//console.log("No es un número" / 2 + 5);

// Tipo de datos BigInt
// Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.991
let numero_grande = 12345678901234567891299955456366458312n;
//console.log(numero_grande);

// Tipo String
let t = "a";
let texto = "hola";
let texto_dos = 'hola';
let texto_3 = ``; // backticks funcionalidad extendida
let nomb = "Sowil";
//console.log("Hola ", nomb);
//console.log('hola', nomb);
//console.log(`Hola`, nomb);

//console.log("hola ${nomb}");
//console.log('hola ${nomb}');
//console.log(`hola ${nomb}`);

// Tipo Booleano

// True y False
let verdadero = true;
let falso = false;

let mayor = 4 > 1; // True

// Tipo de dato null
// Es un valor especial que no pertenece a ningun tipo de dato anterior.
// Forma un tipo propio separado que contiene sólo el vvalor null.
let edad = null;
//console.log(edad);

// En JS NULL NO SIGNIFICA UN OBJETO NO EXISTENTE 
// Es solo un valor especial que representa nada, vacío o valor desconocido.

// Valor Undefined 
// Es un valor especial que no pertenece a ningun tipo de dato anterior.
// El siginificado es Undefined es valor no asignado.

let edad_dos;
//console.log(edad_dos);

// El operador typeof o función typeof(x), devuelve el tipo de dato 

//console.log(typeof undefined); //  Undefined
//console.log(typeof 0); // number
//console.log(typeof true); // boolean
//console.log(typeof 10n); //BigInt
//console.log(typeof "hola"); // string

//console.log(typeof(alert)); // function
//console.log(typeof(null)); // object -  ERROR DE JAVASCRIPT, PORQUE ESTO DEBERIA ENVIAR NULL
//console.log(typeof(Math)); // object

// Interacciones: alert, prompt, confirm

// alert - tambien es conocido como ventana modal
//alert('hola mundo');

// prompt
//let nonbre_capturado = prompt('Digite el nombre', 'Hola');
//alert(nombre_capturado);

//prompt('Digite el nombre')
//prompt('Digite el nombre', '') // Solo para Internet Explore

// Confirm
// let esHelado = confirm('¿Tegusta el helado');
// console.log(esHelado); // true si presionan OK y false si presionan cancelar

// CONVERSIÓN DE TIPOS
// Existen dos tipos de conversiones explicita e implicita

// Convertir a String 
let valor = true;
console.log(typeof valor);

valor = String(valor); // "true"
valor = String(false); // "false"
valor = String(null); // "null"
valor = String(undefined); // undefined
console.log(typeof valor);

//Convertir a numero

// Conversiones númericas ocurren automáticamente en funciones matemáticas y expresiones
// alert('6' / '2' ); // 3
// alert(1 + '2'); // '12'
// alert('2' + 1 ); // '12'

let cadena = "123";
let num_cad = Number(cadena); // 123

console.log(Number('hola')); // NaN

/* 
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN 
*/

//Convertir a booleano
console.log(Boolean("hola"));
/*
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false

'0' -> true
'  ' -> true
*/ 
console.log(Boolean(String(0)))
console.log(Boolean(0))

// OPERADORES BÁSICOS

// Operadores Unarios y Binarios


let res;
a = 5;
b = 2;

// Operadores Binarios
res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b; // mod
res = a ** b; // potencia

//alert('1' + 2); // 12
//alert(1 + '2'); // 12

//alert(2 + 2 + '1'); //41
//alert('1' + 2 + 2); //122

//alert(2 - '1'); // 1 
//alert('6' / '2'); // 3
//alert('6' / '2a') // NaN


// OPERACIÓN UNARIA +
a = 1;
console.log(+a);

a = -1;
console.log(+a);

console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log(+null);
console.log(+"");

a = "2";
b = "3";

console.log(+a + +b); // <- SON LO MISMO -> console.log(Number(a) + Number(b));

    // OPERACIÓN UNARIA -
    a = 1;
    console.log(-a);

    a = -1;
    console.log(-a);

    console.log(-true);
    console.log(-false);

// ASIGNACIONES
a = 2 + 3;
a = b = c = 2 + 3;

c = 2 + 3;
b = c;
a = b;

c = 3 - (a = b + 1);

// MODIFICADORES
a = a + 2;;
a += 2;

a = a - 2;
a -= 2;

// INCREMENTO y DECREMENTO

// ++ Incremento
// -- Decremento

a = 2;
a ++;
//console.log(a); // 3

a = 2;
a --;
//console.log(a); // 1

// POSICIÓN del Incremento o Decremento
a = 1;
b = ++ a; // se aplica antes de ir a la siguiete linea
console.log(b); // 2

a = 1;
b = a ++; // se aplica en la siguiente linea
c = a;
console.log(b); // 1
console.log(c); // 2

