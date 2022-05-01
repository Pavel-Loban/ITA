// 1.	Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
//       Регулярные выражения (кто умеет) не использовать.
//       Спросить у пользователя строку. Вывести в консоль количество русских  гласных букв в ней.
// •	с использованием метода массива forEach,
// •	с использованием метода массива filter,
// •	с использованием метода массива reduce.

for(var i = 0; i < 1; i++){
  var str = prompt('Введите Вашу фамилию.', 'Используйте русские буквы!!!');
   if(typeof(str) === 'string' && typeof(str) !== null && typeof(str) !== ''){
       } else{
         i--;
       }
 }


 var vowels = 'аеёиоуыэюя';
function getVowels(str){
  var count = 0;
   str.toLowerCase().split('').forEach(function(elem){
      if(vowels.includes(elem)){
         count++;
      }
  });
  return count;
}
console.log(getVowels(str));

function getVowels(str){
  var count = str.toLowerCase().split('').filter(function(elem){
      vowels.includes(elem);
  });
    return count.length;
}
console.log(getVowels(str));

function getVowels(str){
  var count = str.toLowerCase().split('').reduce(function(count,elem){
      if(vowels.includes(elem)) {
        return count + 1;
      }else{
        return count;
      }
 }, 0 );
    return count;
}
console.log(getVowels(str));


//2.	У вас есть два массива. Один показывает имена людей, а другой
//показывает их род занятий. Ваша задача - создать объект, отображающий
//каждого человека по его роду занятий.
var names = ["Max", "Vera", "Joe", "Annette", "Sussan"];
var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];

function combineNameWork(arr,arr1){

  //FOR
  var object = {};
  // for(var i = 0; i < arr.length; i ++){
  // object[arr[i]] = arr1[i];
  // }
  // return object;

  //FOREACH
  arr.forEach(function(elem){
    object[elem] = arr1[elem];
  });
  return object;
}



console.log(combineNameWork(names,jobs));


//3.	У вас есть входной массив (из строк с двумя буквами) и массив слов
//Напишите функцию, которая возвращает true, если каждую (строку с двумя
//буквами) из первого массива можно найти хотя бы один раз в массиве                          слов(втором массиве).

function canFind(arrOfLetters, arrOfWords){
  arrOfWords = arrOfWords.join();
  var result = arrOfLetters.every(function(elem){
    return arrOfWords.includes(elem);
  });
  return result;
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) );
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]));
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) );
