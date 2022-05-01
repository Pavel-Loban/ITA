








//3. Создайте функцию, которая принимает строку имени и проверяет, насколько хорошее данное имя.
//Предварительно загруженный словарь оценок алфавита доступен в переменной scores.
//Сложите буквы своего имени, чтобы получить общий балл. */


var scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}

//Верните результат в соответствии со следующими правилами:

// score <= 60:   "NOT TOO GOOD"

// 61 <= score <= 300:  "PRETTY GOOD"

// 301 <= score <= 599:  "VERY GOOD"

// score >= 600:  "THE BEST"


// nameScore("JOHN") ➞ "THE BEST"

// nameScore("YOU") ➞ "VERY GOOD"

// nameScore("MATT") ➞ "THE BEST"

// nameScore("PUBG") ➞ "NOT TOO GOOD"

function nameScore(str){
    var scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
    scores = Object.entries(scores);
    var score = 0;
    var result;
    for(var i = 0; i < str.length;i++){
       for(var j = 0; j < scores.length; j++){
        if(str[i].includes(scores[j][0])){
            score += scores[j][1];
       }
      }
      console.log(score);
    }
    if(score <= 60){
        result = "NOT TOO GOOD";
    }else if(score <= 300 ){
        result =  "PRETTY GOOD";
    }else if(score <= 599){
        result =  "VERY GOOD";
    }else {
        result =  "THE BEST";
    }
    return result;
}
//  console.log(nameScore("JOHN"));
//  console.log(nameScore("YOU"));
//  console.log(nameScore("MATT"));
//  console.log(nameScore("PUBG"));









//5.Создайте функцию, которая принимает arr и возвращает сумму чисел между двумя "1".
// spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14

// spaceApart(["1", 9, 20, 38, "1"]) ➞ 67

// spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"

// spaceApart([3, "1", 2, 9, "1", 0, 7, "1"]) ➞ "invalid"

/*
Вернуть "invalid", если:
Отрицательное число присутствует внутри arr.
Количество единиц не равно двум.
Игнорировать любую другую строку внутри arr.
Обратите внимание, что "1" не равно 1. */

function spaceApart(arr){
    var arr2;
    var result = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
             return 'invalid';
        }
         if(arr[i] === "1") {
           count++;
        }
    }
     if(count > 2){
        return 'inva';
    }
    if(count === 2){
        var one = arr.indexOf('1');
        var lastOne = arr.lastIndexOf('1');
        arr2 = arr.slice(one,lastOne);
        arr2.shift();
    for(var i = 0; i< arr2.length;i++){
        result += arr2[i];
    }
    }
    return result;
}

console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]));
console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]));
