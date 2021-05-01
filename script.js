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
//console.log(typeof valor);

valor = String(valor); // "true"
valor = String(false); // "false"
valor = String(null); // "null"
valor = String(undefined); // undefined
//console.log(typeof valor);

//Convertir a numero

// Conversiones númericas ocurren automáticamente en funciones matemáticas y expresiones
// alert('6' / '2' ); // 3
// alert(1 + '2'); // '12'
// alert('2' + 1 ); // '12'

let cadena = "123";
let num_cad = Number(cadena); // 123

//console.log(Number('hola')); // NaN

/* 
TABLA CONVERSION NUMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN 
*/

//Convertir a booleano
//console.log(Boolean("hola"));
/*
TABLA CONVERSION BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false

'0' -> true
'  ' -> true
*/ 
//console.log(Boolean(String(0)))
//console.log(Boolean(0))

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
//console.log(+a);

//console.log(+true);
//console.log(+false);
//console.log(+NaN);
//console.log(+undefined);
//console.log(+null);
//console.log(+"");

a = "2";
b = "3";

//console.log(+a + +b); // <- SON LO MISMO -> console.log(Number(a) + Number(b));

    // OPERACIÓN UNARIA -
    a = 1;
    //console.log(-a);

    a = -1;
    //console.log(-a);

    //console.log(-true);
    //console.log(-false);

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
/console.log(b); // 2

a = 1;
b = a ++; // se aplica en la siguiente linea
c = a;
//console.log(b); // 1
//console.log(c); // 2


// COMPARACIONES

console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

let resultado = 2 > 1;

// Comparaciones entre cadenas
console.log('z' > 'a'); // true
console.log('Show' > 'show'); // false
console.log('casa' > 'casas'); // false 

// 1. La letra minúscula es mayor que la mayúscula
// 2. La palabra con mas letras, despues de pasar la primera condicion, es mayor que la de menos letras


// Comparación de diferentes tipos
// Al comparar valores de diferentes tipos, JS convierte los valores a números
// TODA COMPARACIÓN CON NaN es false

a = 0;
b = '0';

boleano_a = Boolean(a); // false
boleano_b = Boolean(b); // true 

console.log('**************************');
console.log('2' > 1); // true
console.log('01' == 1); // true
console.log(true > 0); // true 
console.log(false == 0); // true

console.log('*******NaN********');
// NaN
console.log('hola' > 0); // false
console.log('hola' < 0); // false



console.log('*********Undefined********');
// Undefined
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false


console.log('*********Null*************');
// Null
console.log(null > 0); // fals
console.log(null < 0); // false
console.log(null >= 0); // true
console.log('**************************');

console.log('***Null y Undefined == ****');
// El UNDEFINED Y EL NULL EN LAS COMPARACIONES DE IGUALACION NO ESTRICTAS ACTUAN DIFERENTE
// actúan diferente: son iguales entre sí, pero no a ningún otro valor.
console.log(null == undefined); // true
console.log(null == 5); // false
console.log(undefined == 5) // false
console.log('**************************');


console.log('**No diferencia de 0 de falso ==****');
console.log(0 == false); // true
console.log(' ' == false); // true
console.log('***********************************');


// Igualacion estricta
console.log(0 === false); // false
console.log(null === undefined) // false 

// practica
5 > 4 // true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //false
undefined === null //true
null  == 0 // false
null === +"0" // false


// SENTENCIA IF

/*
if(condicion){

}else if(condicion){

}else{

}
*/ 

// if de linea
if (4 > 5) console.log('Mensaje');

// if con mas de una sentencia
if (4 > 5) {
    b = 5 + 3;
    console.log('Mensaje');
}

if ('45a' / 3) {
    console.log('No entró');
} //  no entra al ciclo

if ('0') {
    console.log('entró');
}

if (1) {
    console.log('entró o no entró?');
}

let edadx;

if (edadx) {
    console.log('Variable definida');
}else{
    console.log('Variable indefinida');
}

// Haga un algoritmo que dada una edad retorne true si es mayor de edad y false si no lo es
let edad_usuario = 17;

if (edad_usuario >= 18) {
    console.log(true);
}else{
    console.log(false);
}

console.log(edad_usuario >= 18);

// Operador Ternario
// condición ? opreación verdadera : operación falsa;
resultado = edad_usuario >= 18 ? x=5 : x=7;


// Operador lógico
/*
v or v = v
v or f = v
f or v = f
f or f = f
*/ 

console.log('******** Operador OR ******');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // true


if (4 == 4 || 2 > 5) {
    console.log('Verdadero');
}

// resultado = valor_uno || valor_dos || valor_tres;
// 1. Evalua los operando de izquierda a derecha 
/* 2. Por cada operando convierte el valor a booleano si el 
   resultado es true, se detiene y retorna el valor original de ese operando */
// 3. Si todos los operandos han sido evaluados (todos eran falsos), retorna el último operando.

let comparacion_booleana = true || false || true; // true 
    comparacion_booleana = '0' || '0'; // '0';
    comparacion_booleana = undefined || null || NaN || ''; // ''
    comparacion_booleana = undefined || null || 3 || ''; // 3
    comparacion_booleana = undefined || 'hola' || 3 || ''; 'hola'
// RESUMEN: Devuelve el primer valor verdadero o el ultimo si todos son falsos

console.log('****************************');

console.log('******** Operador AND ******');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // true

if (4 == 4 && 2 < 5) {
    console.log('Verdadero');
}


    comparacion_booleana = true && false && true;  // false
    comparacion_booleana = '0' && '0'; // '0'
    comparacion_booleana = undefined && null && NaN && ''; // Undefined
    comparacion_booleana = undefined && null && 3 && ''; // Undefined
    comparacion_booleana = undefined && 'hola' && 3 && ''; // Undefined

// resumen: Devuelve el primer valor falso o el último si todos son verdaderos.
console.log('****************************');


// PREVALENCIA U ORDER ENTRE OR Y AND

// a && b || c && d = (a && b) || (c && d)

// Negación
console.log(!true); // false
console.log(!false); // true
console.log(!!undefined); // false == Boolean(undefined);


console.log('******** Nillish o Fsuion de nulos ******');
// Nillish o Fusion de nulos
// 1. Evalua los operando de izquierda a derecha 
/* 2. Por cada operando revisa si es null o undefined y regresa el primero que no sea 
      ni nulo ni undefined */
// 3. Si todos los operandos han sido evaluados son nulos o undefined regresa el último

a = null ?? undefined ?? undefined ?? null ?? 'hola' ?? null ?? 'carlos'; // "hola"

a = undefined ?? undefined ?? undefined ?? null ?? null ?? null ?? null; //null