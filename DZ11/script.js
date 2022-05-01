//1
  function changeCat1(){
    var cat = document.getElementById('current-cat');
    var title = document.getElementById('current-title');
    var content = document.getElementById('current-content');
    cat.src = 'images/cat1.jpg';
    title.innerHTML = 'Cat1';
    content.innerHTML = 'I am a beautiful cat №1';
  }

  function changeCat2(){
    var cat = document.getElementById('current-cat');
    var title = document.getElementById('current-title');
    var content = document.getElementById('current-content');
    cat.src = 'images/cat2.jpg';
    title.innerHTML = 'Cat2';
    content.innerHTML = 'I am a beautiful cat №2';
  }

  function changeCat3(){
    var cat = document.getElementById('current-cat');
    var title = document.getElementById('current-title');
    var content = document.getElementById('current-content');
    cat.src = 'images/cat3.jpg';
    title.innerHTML = 'Cat3';
    content.innerHTML = 'I am a beautiful cat №3';
  }

//2
function addInfoCat(){
  var infoCats = document.getElementById('cat-info');
  infoCats.innerHTML += '<tr><td>Barsic</td><td>Belarus</td><td>2022</td</tr>';
}


//3

document.querySelector('#switcher img').id = 'imgThema';

function changeThema(){
  var imgThema = document.getElementById('imgThema');
  var body = document.getElementsByTagName('body');

  imgThema.src = 'images/moon.svg';
  for(var i = 0;i < body.length;i++){
  body[i].style.cssText = 'color: red; background-color: black;';
}
  imgThema.style.cssText = 'background-color: white;';
}


