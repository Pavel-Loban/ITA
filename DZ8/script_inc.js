
function HashStorageFunc() {

   var _obj = {};

  this.addValue = function (key,value) {
      _obj[key] = value;
      return _obj;
  };

  this.getValue = function(key){
    return _obj[key];
    };

  // this.deleteValue = function(key){
  //   if(key in _obj) {
  //      delete _obj[key];
  //      return true;
  //   }
  //     return false;
  // };
  this.deleteValue = function(key){
    for(key in _obj) {
       delete _obj[key];
       return true;
    }
      return false;
  };

  this.getKeys = function() {
      return Object.keys(_obj);
  };
}

var drinkStorage = new HashStorageFunc();


var getNewDrink = function () {
    var name = prompt('Введите название напитка');
    if(name === ''){
      return alert('Вы не ввели напиток');
    }
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    var isAlc = prompt('Напиток алкогольный?');
    var structure = prompt("способ приготовления");
    var result = `Алкогольный? - ${isAlc}. Рецепт: ${structure}`;
    var resultObj = drinkStorage.addValue(name,result);
    console.log(resultObj);
};

var getClickInfoDrink = function (){
  var drink = prompt('Введите напиток','');
    if(drink === ''){
      return alert('Вы не ввели напиток');
    }
  drink = drink[0].toUpperCase() + drink.slice(1).toLowerCase();

      if(drinkStorage.getValue(drink)){
        return alert(drinkStorage.getValue(drink));
      }else {
        return alert('Такого напитка нет!!!');
      }
};

var getRemoveDrink = function(){
  var removeDrink = prompt('Название напитка','');
  removeDrink = removeDrink[0].toUpperCase() + removeDrink.slice(1).toLowerCase();
    if(drinkStorage.deleteValue(removeDrink)){
      return alert('Напиток удален');
    }else{
      return alert('Такого напитка не было!!!');
    }
};


function getClickInfoDrinks(){
  console.log(drinkStorage.getKeys());
}