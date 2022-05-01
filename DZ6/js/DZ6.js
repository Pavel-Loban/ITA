//1.	Напишите функцию, которая создает объект, в котором каждая пара (ключ, значение)
//представляет собой (нижний, верхний регистр) версии буквы, соответственно.
 function mapping(arr){
   var obj = {};
    for(var i = 0; i < arr.length;i++){
        obj[arr[i]] = arr[i].toUpperCase();
    }
    return obj;
 }
 console.log(mapping(["p", "s"]) );
 console.log(mapping(["a", "b", "c"]) );
 console.log(mapping(["a", "v", "y", "z"]) );
 function mapping(arr){
  var obj = {};
   arr.forEach(function(elem){
     obj[elem] = elem.toUpperCase();
   });
   return obj;
}
console.log(mapping(["p", "s"]) );
console.log(mapping(["a", "b", "c"]) );
console.log(mapping(["a", "v", "y", "z"]) );


 //2.	Напишите функцию, которая принимает массив учеников и возвращает массив их главных заметок.
 // Если у ученика нет заметок, предположим, пусть главная заметка будет равна 0.
  function getStudentTopNotes(arr){
    var maxNotes = arr.map(function(elem){
      return elem.notes.reduce(function(prev,num){
        if(num > prev){
          return num;
        }else {
          return prev;
        }
      },elem.notes[0]);
   });
   return maxNotes;
  }
  console.log(getStudentTopNotes([
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5]
    },
    {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5]
    },
    {
      id: 3,
      name: "Zygmunt",
      notes: [2, 2, 4, 4, 3, 3]
    }
])
);

function getStudentTopNotes(arr){
    var maxNotes = arr.map(function(max){
       return Math.max(...max.notes);
    });
    return maxNotes;
  }
  console.log(getStudentTopNotes([
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5]
    },
    {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5]
    },
    {
      id: 3,
      name: "Zygmunt",
      notes: [2, 2, 4, 4, 3, 3]
    }
])
);



  //3.	Первый массив arr1 содержит некоторые числа, а второй массив arr2 содержит
  //квадраты значений чисел, заданных в первом массиве.
//Напишите функцию, которая берет эти два массива и возвращает true, если
//	доступны все квадратные значения во втором массиве из первого, иначе 	false.

function simpleCompare(arr, arr2){
  for(var i = 0; i < arr.length; i++){
     var squareNumberArr = arr[i]**2;
    if(arr2.includes(squareNumberArr)){
      return true;
    }else{ return false;}
  }
}
console.log(simpleCompare([2, 2, 3], [4, 4, 9]) );
console.log(simpleCompare([121, 144, 19, 161, 19, 144, 19, 11],
  [121, 14641, 20736, 361,25921, 361, 20736, 361]) );
  console.log(simpleCompare([4, 4], [1, 31]));


  function simpleCompare(arr, arr2){
    var answer;
    arr.forEach(function(elem){
      if(arr2.includes(elem * elem)){
          answer = true;
      }else {
        answer = false;
      }
    });
    return answer;
  }
  console.log(simpleCompare([2, 2, 3], [4, 4, 9]) );
console.log(simpleCompare([121, 144, 19, 161, 19, 144, 19, 11],
  [121, 14641, 20736, 361,25921, 361, 20736, 361]) );
  console.log(simpleCompare([4, 4], [1, 31]));


  //4.	Напишите функцию, которая принимает строку в качестве аргумента и преобразует
  //первый символ каждого слова в верхний регистр. Верните вновь отформатированную строку.

function makeTitle(str){
  var newStr = str.split(' ');
  var resultStr;
    for(var i = 0; i < newStr.length; i++){
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
      resultStr = newStr.join(' ');
    }
  return resultStr;
  }
  console.log(makeTitle("This is a title"));
  console.log(makeTitle("capitalize every word"));
console.log(makeTitle("I Like Pizza"));
console.log(makeTitle("PIZZA PIZZA PIZZA"));


