                                                    // Bucles While 
 
// let number = 0;
// while( number <=10){
//     console.log(number);
//     number = number + 1
// }


// let number = 1;
// while (number <=100){
//     console.log(number);
//     number++
// }

// let  number = 1;
// while (number < 12) {
//     console.log(number);
//     number +=2
// }

//                                                      // Bucles Do While 

// let number = 1

// do {
    
// } while (condition);


//                                                      // Function 1

// function suma(a,b) {
//     resultado = a+b
//     return resultado;
// };
// // Lamamos a la función para usarla 
// var respuesta = suma (7,2)
// alarm(respuesta);

// // Function Suma
// function suma(a, b) {
// result_suma = a+b
// return result_suma;
// };

// let sumandos = suma(450,6)
// alarm(sumandos);

// // Function Resta
//  function resta(x,y) {
//     resultado= x+y
//     return resultado;
//  };

//  let respuesta = resultado (x,y)
//  alert(respuesta)

// // FUNCTION  RESUMIDA

// function add (a) {
//     resultado = a + 100;
//     return resultado
// }

// FUNCION RESUMIDA MÁS MODERNA    (   => = Fucntion  )

// var add = a => a+100;                         var add = (a,b) => a+b;
// alert (add(5));                               alert (add(5,7));

// var resta = a => a - 89;                       var divicion = a => a/2
// alert (resta(100));                            alert (divicion(100));


//  var multiplicacion= (a,b) => a*b
//  alert(multiplicacion (6,8));






// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//       continue;
//     } else {
//       console.log(i);
//     }
//   }

// const medalForScore = (score) => {
//     if (score < 3){
//       return 'Bronze';
//     }
//     if (score < 7){
//       return 'silver';
//     }
//     return 'Gold';
//   }
  
//   console.log(medalForScore(7));

let emoji = ':D';

const greet = (name) => {
  emoji = ':)';
  const myGreet = () => `Hola ${name} ${emoji}`;
  return myGreet();
};

console.log(greet('Laboratoria'));