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

    var allList = document.createElement('li');
    allList.innerText = inputValue;

    var newSpan = document.createElement('span');
    newSpan.innerText = ' DELETE';

    var newDate = document.createElement('i');
    var date = new Date();

    newDate.innerText = ' - ' + date.getFullYear() + '.' + (date.getMonth() + 1) + '.'+ date.getDate();

    //Проверка,чтобы пустое поле ввода нельзя было добавить как задачу
    if(inputValue.trim() !== ''){
        allList.append(newSpan);
        allList.append(newDate);// добавляем дату добавления задачи
        ulList.append(allList);

        notDone.value = ulList.children.length - done.value;
        done.value = document.getElementsByClassName('text-decor').length;
    }
 }

 btnAddTask.addEventListener('click',createTask);



 const removeTask = (e) => {


let ul = document.querySelectorAll('#list li');
let span = e.target.closest('span');
    if(span){
        span.parentElement.remove();
        let allTaskc = 0;
        let taskComplite = 0;
      ul.forEach(function(elem){
        allTaskc++;
        if(elem.classList.contains('text-decor')){
            taskComplite++;
        }
        console.log(allTaskc);
        notDone.value = allTaskc - taskComplite;
        done.value =  taskComplite;
      });
    }

};
 ulList.addEventListener('click',removeTask);



const getTextDecor = (e) => {
    let tagLi = e.target.closest('li');
    let span = e.target.closest('span');
    if(tagLi ){
        tagLi.classList.toggle('text-decor');
    }

    notDone.value = document.getElementsByTagName('li').length - done.value;
    done.value = document.getElementsByClassName('text-decor').length;

    done.value = document.getElementsByClassName('text-decor').length;
    notDone.value = allLi.length - done.value;
};

ulList.addEventListener('click',getTextDecor);


 //----------------------------

const saveTasks = () => {

    let content =  ulList.innerHTML;
    localStorage.setItem('list-items',content);

    let activeTask =  notDone.value;
    localStorage.setItem('active-task',activeTask);

    let noActiveTask = done.value;
    localStorage.setItem('no-active-task',noActiveTask);
};


document.querySelector('#save__tasks').addEventListener('click',saveTasks);


const renderContent = () => {
    ulList.innerHTML = localStorage.getItem('list-items');

    notDone.value = localStorage.getItem('active-task');
    done.value = localStorage.getItem('no-active-task');
};
renderContent();

const clearTasks = () => {
    localStorage.clear('list-items');
    let ulList = document.querySelectorAll('#list li');
    ulList.forEach(function(elem){
        elem.remove();
        done.value = 0;
        notDone.value = 0;
    });
};

document.querySelector('#clear__tasks').addEventListener('click',clearTasks);

