var todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function(event){
    // console.log(event.target.tagName);
    if(event.target.tagName === 'P'){
        event.target.classList.toggle('task-no-active');
    }
});

//2

var ulList = document.querySelector('.collection');

ulList.addEventListener('click', function(event){
    if(event.target.classList.contains('collection-item')){
        event.target.nextElementSibling.classList.toggle('answer-item-show');
    }
});

//3

var btnInfo = document.querySelector('#open-modal');
var divModal = document.querySelector('#modal1');

btnInfo.addEventListener('click', function(){
       divModal.classList.add('modal_open');
});


var clos = document.querySelector('.modal-close');
window.addEventListener('click', function(event){
    if(event.target !== btnInfo && !event.target.closest('#modal1')){
        divModal.classList.remove('modal_open');
    }
    if(event.target === clos){
        divModal.classList.remove('modal_open');
    }
});

//4

var bigPicture = document.querySelector('.photo img');
var boxImages = document.querySelector('.container');


boxImages.addEventListener('click', function(event){
    var images = document.querySelectorAll('.image');

    if(event.target.parentElement.classList.contains('image')){
        bigPicture.src = event.target.src;
        for(let i = 0; i< images.length; i++ ){
            images[i].classList.remove('active-image');
        }
        event.target.parentElement.classList.add('active-image');
    }
});


//5
var ulList = document.querySelectorAll('#todo span');
var ul = document.querySelectorAll('#todo li');
var list = document.querySelector('#todo');
var btnSort = document.querySelector('#sort');

btnSort.addEventListener('click', function(){

    var list, i, switching, b, shouldSwitch;
  list = document.getElementById("todo");
  switching = true;

while (switching) {
    switching = false;
    b = list.getElementsByTagName("SPAN");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML > b[i + 1].innerHTML) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      list.insertBefore(b[i + 1].parentElement, b[i].parentElement);
      switching = true;
    }
  }
});
