

function alwaysHungry(arr) {
    // tu código aquí 
    var tengohambre = true;
    var delicioso_count = 0;
    var mensaje = "";
    
    for (var i = 0; i <= arr.length-1; i++){
        if (arr[i] == "comida"){
            delicioso_count++;
        }
      }

    if (delicioso_count == 0){
        mensaje = "always hungry"
    }
    else if (delicioso_count == 1){
      mensje = "delicioso"
    }
    else
    {
        for (var i = 0; i <= delicioso_count-1; i++){
          if (i < delicioso_count-1){
            mensaje+= "delicioso, ";
          }
          else{
            mensaje+= "delicioso";
          }
        }
    }

    return mensaje
}


function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí

    for (var i = 0; i <= arr.length; i++){
      if (arr[i] > cutoff){
        filteredArr.push(arr[i]);
      }
    }

    return filteredArr;
}


function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;
    var count = 0;
    // calcula el promedio
    for (var i = 0; i <= arr.length-1; i++){
      sum+= arr[i];
      avg = Math.round(sum/arr.length);
    }
    // console.log(avg);
    var count = 0;
    // cuenmta cuánmtas variables son mayores que el promedio
    for(var i = 0; i <= arr.length-1; i++){
        // console.log(arr[i] + " " + avg);
      if (arr[i] >= avg){
        count ++;
      }
    }
    return count;
}


function reverse(arr) {
    // tu código aquí
    return arr.reverse();
}
   


function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    for (var i = 0; i <= n-3; i++){
        fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);
    }
    return fibArr;
}
   


   
console.log("pruebas de la funcion always hungry" );
console.log("-----------------------------------\n" );

console.log(alwaysHungry([3.14, "comida", "pastel", true, "comida"]));
//  esto debería mostrar "delicioso, "delicioso"
 console.log(alwaysHungry([4, 1, 5, 7, 2]));
//  esto debería mostrar "Tengo hambre"copy
console.log(alwaysHungry([4, "comida", 5, "comida", "comida", "comida", "comida", 7, "comida", "comida", 90, "hu", "comida", "comida"]));
//  esto debería mostrar delicioso, delicioso, delicioso, delicioso, delicioso, delicioso, delicioso, delicioso, delicioso
console.log(alwaysHungry([]));


console.log("\n\npruebas de la funcion high Pass" );
console.log("-----------------------------------\n" );

console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5));
console.log(highPass([3, 1, 3, 5, -2, 5, 2], 5));

console.log("\n\npruebas de la funcion better than average" );
console.log("-----------------------------------\n" );

console.log(betterThanAverage([6, 8, 3, 10, -2, 5, 9]) + " numeros por encima del promedio tiene el siguiente arreglo [6, 8, 3, 10, -2, 5, 9]"); // esperamos 4 de vuelta
console.log(betterThanAverage([11, 14, 1, 9, -2, 34,21,10,44]) + " numeros por encima del promedio tiene el siguiente arreglo [11, 14, 1, 9, -2, 34,21,10,44]"); // esperamos 4 de vuelta


console.log("\n\npruebas de la funcion reverso del arreglo" );
console.log("-----------------------------------\n" );

console.log(' el reverso del arreglo ["a", "b", "c", "d", "e"] es : ' + reverse(["a", "b", "c", "d", "e"])); 
console.log(' el reverso del arreglo ["r", "a", "d", "a", "r"] es : ' + reverse(["r", "a", "d", "a", "r"])); 


console.log("\n\npruebas de la funcion fibonnaciArr" );
console.log("-----------------------------------\n" );
console.log(fibonacciArray(10));
console.log(fibonacciArray(20));
