
//1
function chessBoard(str){
  let result = '';
  let lеtters = ['a','b','c','d','e','f','g','h'];
  let arr = str.split('');
  lеtters.forEach(function(elem,index){
      if((elem === arr[0] && index % 2 === 0 &&  (parseInt(arr[1]) % 2) !== 0) ||
      (elem === arr[0] && index % 2 !== 0  &&  (parseInt(arr[1]) % 2) === 0))
      {
          result = 'black';
      }
      if((elem === arr[0] && index % 2 === 0 &&  (parseInt(arr[1]) % 2) === 0) ||
      (elem === arr[0] && index % 2 !== 0  &&  (parseInt(arr[1]) % 2) !== 0)){
          result = 'white';
      }
  });
  return result;
}

console.log(chessBoard('a1'));
console.log(chessBoard('e5'));
console.log(chessBoard('d1'));


//2
function mirror(arr){
  let arrClon = arr.slice(0, -1);

  arrClon.reverse();
  arrClon.forEach(function(elem){
      arr.push(elem);
  });

  return arr;
}

console.log(mirror([0,2,4,6]));
console.log(mirror([1,2,3,4,5]));
console.log(mirror([3,5,6,7,8]));

//3

function isDisarium(numb){
  let number = numb + '';
  number = number.split('');
  let newNumber = 0;
  number.forEach(function(elem,index){
      newNumber += parseInt(elem)**(index+1);
  });
  if(numb === newNumber){
      return true;
  }else{
      return false;
  }

}
console.log(isDisarium(135));
console.log(isDisarium(71));
console.log(isDisarium(8));
console.log(isDisarium(446));
