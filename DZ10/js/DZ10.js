//1.  Напишите функцию сортировки, которая сортирует числа не по порядку номеров,
//а по их длине! Это означает сортировку чисел с наименьшим количеством цифр в первую
//очередь до чисел с наибольшим количеством цифр.

//numbSort([2, 37, 1, 2, 739, 2]) ➞ [1, 2, 2, 2, 37, 739]numbSort([777, 182, 11, 881, 27]) ➞
// [11, 27, 777, 182, 881]numbSort([5, 4, 3, 2, 1, 18, 6, 1, 3]) ➞ [5, 4, 3, 2, 1, 6, 1, 3, 18]

function sortLength(num1,num2){
  return num1.length - num2.length;
}
function numbSort(arr){
  var arrSortLength = arr.map(function(elem){
    return String(elem);
  }).sort(sortLength).map(function(elem){
    return Number(elem);
  });
  return arrSortLength;
}
console.log(numbSort([2, 37, 1, 2, 739, 2]));
console.log(numbSort([777, 182, 11, 881, 27]));
console.log(numbSort([5, 4, 3, 2, 1, 18, 6, 1, 3]));

//2. Напишите функцию, которая сортирует слова по заданной строке.
// В строке могут быть лишние буквы (см. Примеры #2 и #3).
// В каждом массиве будут уникальные начальные буквы.

// sortStr(["orange ", "mandarin", " pear", "coconut "], "cmop")➞
// [" coconut", " mandarin", " orange", " pear"]sortStr(["middle", "junior", "senior"], "stnmj")➞
// ["senior", " middle", " junior"]sortStr(["bike", "car", "motorcycle"], "camrb")➞
// ["car", "motorcycle", "bike"]

function sortStr(arr, str){
  var sortByWord = [];
  for(var i = 0;i<str.length;i++){
    for(var j = 0;j < arr.length;j++){
      arr[j] = arr[j].trim();
      if(str[i] === arr[j][0]){
        sortByWord.push(arr[j]);
      }
    }
  }
  return sortByWord;
}

console.log(sortStr(["orange ", "mandarin", " pear", "coconut "], "cmop"));
console.log(sortStr(["middle", "junior", "senior"], "stnmj"));
console.log(sortStr(["bike", "car", "motorcycle"], "camrb"));


// 3. Есть строка, переверните все слова нечетной длины. Слова четной длины не изменяются.
// revOddWord("Egg") ➞ "ggE"   revOddWord ("It is false") ➞
//"It is eslaf"revOddWord ("Dear Santa, give me a new iPhone”)➞ "Dear atnaS, give me a wen iPhone. "

function revOddWord(str){
  str = str.split(' ');
  var res = [];
  for(var i=0;i<str.length;i++){
    if(str[i].length % 2 === 1){
      str[i] = str[i].split('').reverse().join('');
    }
    res.push(str[i]);
  }
  return res.join(' ');
}

function revOddWord(str){
  str = str.split(' ');
  var newStr = str.reduce(function(prev,elem,index){
    if(index === 0){
     return  prev + elem;
    }
      if(elem.length % 2 === 1){
        elem = elem.split('').reverse().join('');
      }
      return prev + ' ' + elem;
  },'');
  return newStr;
}

console.log(revOddWord ("It is false"));
console.log(revOddWord("Egg"));
console.log(revOddWord("Dear Santa, give me a new iPhone"));