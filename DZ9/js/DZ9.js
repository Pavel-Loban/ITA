//1. Используйте прототипное наследование. Объявить класс под названием “Laptop”
//2. Класс “Laptop”. У каждого нового ноутбука есть “название”, “модель”, ”серийный номер”,
//“год изготовления”, “размер ОЗУ”, “размер ПЗУ”, “масса”. Учтите, что сейчас ноутбуки выпускаются
//без дисководов, и также присутствует вебкамера. Есть метод который выводит количество «ОЗУ и ПЗУ».
//Есть метод, который выводит название и модель.
//3. Класс “Ultrabook”. Есть свойства: “название”, “модель ”, “ серийный номер ”,
//“ год изготовления ”, “вес”, “размер ОЗУ”, “размер ПЗУ”. Учтите, что сейчас ультрабуки
//выпускаются без дисководов и есть вебкамера. Есть метод который выводит данные о названии,
//весе и год изготовления. Есть метод который выводит количество «ОЗУ и ПЗУ»


function Laptop(name,model,serialNumber,yearDrop,weight,sizeRAM,sizeROM,cdrom,webCamera){
  this.name = name;
  this.model = model;
  this.serialNumber = serialNumber;
  this.yearDrop = yearDrop;
  this.sizeRAM = sizeRAM;
  this.sizeROM = sizeROM;
  this.weight = weight;
  this.cdrom = cdrom;
  this.webCamera = webCamera;
}

Laptop.prototype.getInfoRamRomLaptop = function(){
  return 'Size RAM - ' + this.sizeRAM + '. ' + 'Size ROM - ' + this.sizeROM + '.';
};

Laptop.prototype.getNameAndModelLaptop = function(){
  return 'Laptop ' + this.name + '. model - ' + this.model;
};

function Ultrabook(name,model,serialNumber,yearDrop,weight,sizeRAM,sizeROM,cdrom,webCamera){
  Laptop.call(this,name,model,serialNumber,yearDrop,weight,sizeRAM,sizeROM,cdrom,webCamera);
}

Ultrabook.prototype = Object.create(Laptop.prototype);
Ultrabook.prototype.constructor = Ultrabook;

Ultrabook.prototype.getInfoNameWeightYeardrop = function(){
  return 'Название - ' +  this.name + ', вес -  ' + this.weight + ', год выпуска - ' + this.yearDrop;
};


var laptop = new Laptop('HP','SS100','SN3456456',2020,'2kg','8Gb','1T', 'none CD-rom','web-camera');
var ultrabook = new Ultrabook('Mac','TT600','SN98765',2022,'1kg','16Gb','2T', 'none CD-rom','web-camera');

console.log(laptop.getInfoRamRomLaptop());
console.log(laptop.getNameAndModelLaptop());

console.log(ultrabook.getInfoRamRomLaptop());
console.log(ultrabook.getInfoNameWeightYeardrop());