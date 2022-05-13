 var inputData = document.querySelector('#inputTask');
 var btnAddTask = document.querySelector('#btn-add');
 var ulList = document.querySelector('#list');
 var spans = document.getElementsByTagName('span');
//  var newli = document.querySelectorAll('#list li');
 var allLi = document.getElementsByTagName('li');

 var notDone = document.querySelector('#notDone');
 var done = document.querySelector('#done');
 var userInfo = document.querySelector('#userInfo');

 //<li>Task1 <span>Delete</span></li>
 //
 function createTask(){
    var inputValue = inputData.value;
    inputData.value = '';

    var allLi = document.createElement('li');
    allLi.innerText = inputValue;

    var newSpan = document.createElement('span');
    newSpan.innerText = ' DELETE';

    var newDate = document.createElement('i');
    var date = new Date();

    newDate.innerText = ' - ' + date.getFullYear() + '.' + (date.getMonth() + 1) + '.'+ date.getDate();

    //Проверка,чтобы пустое поле ввода нельзя было добавить как задачу
    if(inputValue !== ''){
        allLi.append(newSpan);
        allLi.append(newDate);// добавляем дату добавления задачи
        ulList.append(allLi);


        removeTask();
        getActiveList();
    }
 }

 btnAddTask.onclick = createTask;

 function removeTask(){
     for(let spanItem of spans){
         spanItem.onclick = function(){
            spanItem.parentElement.remove();
         };
     }
 }

 removeTask();


 //Счетчик задач, зачеркивание выполненных задач
 function getActiveList(){
    notDone.value = document.getElementsByTagName('li').length - done.value;
    done.value = document.getElementsByClassName('text-decor').length;
    for(let i of allLi){
        i.onclick = function(){
            if(i.classList.contains('text-decor')){
                i.classList.remove('text-decor');
                done.value = document.getElementsByClassName('text-decor').length;
             } else{
                i.classList.add('text-decor');
            }

            done.value = document.getElementsByClassName('text-decor').length;
            notDone.value = allLi.length - done.value;
        };
    }
 }
 getActiveList();

//Сделать активным input
 var lil = spans[0].previousSibling;
 function active(){
    inputData.focus();
 }


 //Кнопка

var div3 = document.getElementsByClassName('container')[3];
 function getButton(){
     var div = document.createElement('div');
     var newbtn = document.createElement('button');

     div.classList.add('container');
     newbtn.classList.add('btn','btn-primary','mt-3');
     newbtn.setAttribute('id','userInfo');
     newbtn.innerText = 'Информация о себе';

     div.append(newbtn);
     div3.after(div);
 }

 getButton();

// Редактирование Модального окна
 var btnUserInfo = document.querySelector('#userInfo');
 var modal = document.querySelector('#exampleModal');
 var infoTitle = document.querySelector('.modal-title');
 var btnCloseModal = document.querySelector('.btn-secondary');
 var modalText = document.querySelector('.modal-body p');

 btnUserInfo.addEventListener('click', function(){
    modal.classList.add('modal_open');
    infoTitle.innerText = 'ФИО разработчика';
    modalText.innerText = 'Лобан Павел Юльянович';
    btnCloseModal.addEventListener('click', function(){
    modal.classList.remove('modal_open');
    });
 });


