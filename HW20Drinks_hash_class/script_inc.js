
class HashStorageClass {
  constructor(){
    this.obj = {};
  }


  addValue(key,value){
      this.obj[key] = value;
      return this.obj;
  }

  getValue(key){
    return this.obj[key];
    }

  deleteValue(key){
    if(!(key in this.obj)) {

       return false;
    }
    delete this.obj[key];
      return true;
  }

  getKeys() {
      return Object.keys(this.obj);
  }


}

const drinkStorage = new HashStorageClass();


const getNewDrink = () => {
    let name = prompt('Введите название напитка');
    if(name === ''){
      return alert('Вы не ввели напиток');
    }
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    let isAlc = prompt('Напиток алкогольный?');
    let structure = prompt("способ приготовления");
    let result = `Алкогольный? - ${isAlc}. Рецепт: ${structure}`;
    let resultObj = drinkStorage.addValue(name,result);
    console.log(resultObj);
};
document.querySelector('.btn-primary').addEventListener('click',getNewDrink);

const getClickInfoDrink = () => {
  let drink = prompt('Введите напиток','');
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

document.querySelector('.btn-secondary').addEventListener('click',getClickInfoDrink);

const getRemoveDrink = () => {
  let removeDrink = prompt('Название напитка','');
  removeDrink = removeDrink[0].toUpperCase() + removeDrink.slice(1).toLowerCase();
    if(drinkStorage.deleteValue(removeDrink)){
      return alert('Напиток удален');
    }else{
      return alert('Такого напитка не было!!!');
    }
};
document.querySelector('.btn-success').addEventListener('click',getRemoveDrink);


const getClickInfoDrinks = () => {
  console.log(drinkStorage.getKeys());
};
document.querySelector('.btn-danger').addEventListener('click',getClickInfoDrinks);