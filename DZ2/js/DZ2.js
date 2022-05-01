"use strict";
//1. Напишите функцию, которая принимает массив целых чисел и строк.
//Преобразуйте целые числа в строки и верните новый массив.
function convertElements(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        var element = String(array[i]);
        newArray.push(element);
    }
     return newArray;
 }
console.log(convertElements([1, 2, "x", "z"]));
console.log(convertElements(["pdf", 123, "def", 456]));
console.log(convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(convertElements([]));

//2. Создайте функцию, которая возвращает
//количество " true” значений в массиве.

function numericTrue(array1){
    var result = 0;
    for(var i = 0; i < array1.length; i++){
        if(array1[i] === true){
            result += 1;
        }

    }
    return result;
}
console.log(numericTrue([true, false, false, true, false,]));
console.log(numericTrue ([false, false, false, false]));
console.log(numericTrue ([]));

//3. Вернуть наибольшее и наименьшее числа
//Создайте функцию, которая принимает массив чисел,
//и возвращает наибольшее и наименьшее число.

function highLow(ar){
    //1

    // let numberMin = Math.min(...ar);
    // let numberMax = Math.max(...ar);
    // let maxAndMinNumber = `${numberMax},${numberMin}`;
    // console.log(typeof(maxAndMinNumber));
    // return maxAndMinNumber;

    //2
    var answer = 0;
    var min = ar[0];
    var max = ar[0];
    for(var i = 0; i <ar.length; i ++){
        if(ar[i] < min){
            min = ar[i];
        }
        if(ar[i] > max){
            max = ar[i];
        }
        answer = `${min},${max}`;
        }

        return answer;
    }

//     ar.sort();
//     console.log(ar);
//     let minNumber = ar[0];
//     let maxNumber = ar[ar.length -1];
//     let answer = `${maxNumber},${minNumber}`;
//     return answer;
// }
console.log(highLow([10, 2, 3, 4, 5]) );
console.log(highLow([1, 2, -3, 4, 5]) );
console.log(highLow([1, 9, 3, 4, -5]) );
console.log(highLow([13]));

// var sum1 = 0;

// function ttt(cur){
//      sum1 += cur;
//      if(cur < 10){
//          return ttt(++cur);
//      }
//      console.log(sum1, cur);
// }
// ttt(0);