//1
var todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('waves-effect')) {
        var newTitle = prompt('Input new title', 'New item');
        e.target.previousElementSibling.innerHTML = newTitle;
    }
});



//2
var numbers = document.querySelector('#numbers');

numbers.addEventListener('click', function (e) {
    if (e.target.classList.contains('waves-effect')) {
        var inputNumbers = document.querySelector('#numbers input');
        inputNumbers.value = parseInt(e.target.innerText) * parseInt(e.target.innerText);
    }
});

//4
var input1 = document.forms[0].elements.input1;
var input2 = document.forms[0].elements.input2;
var input3 = document.forms[0].elements.input3;
var textError = document.querySelectorAll('form p');

textError.forEach(function (elem) {
    elem.classList.add('display-none');
});

input1.addEventListener('blur', isCorrectLength);

input2.addEventListener('blur', isCorrectLength);

input3.addEventListener('blur', isCorrectLength);

function isCorrectLength(e) {
    var correctLength = Number(e.target.dataset.length);
    var currentStr = e.target.value.length;
    var error = e.target.nextElementSibling;

    if (correctLength === currentStr) {
        e.target.classList.remove('red-border');
        e.target.classList.add('green-border');
        error.classList.add('display-none');
    } else {
        e.target.classList.remove('green-border');
        e.target.classList.add('red-border');
        error.classList.remove('display-none');
        error.style.cssText = 'color:red';
        error.innerText = 'Количество символов должно быть ' + correctLength;
    }
}

//5
var productCounterMinus = document.querySelectorAll('.card-action a')[0];
var productCounterPlus = document.querySelectorAll('.card-action a')[1];
var totalProduct = document.querySelector('.total');
var costOfGoodsBtn = document.querySelector('.col ').lastElementChild.previousElementSibling;
var currentTotal = document.querySelector('#current-total');
var price = document.querySelector('.price');

productCounterMinus.addEventListener('click', function (e) {
    if (totalProduct.value === '0') {
        totalProduct.value = '0';
    } else {
        totalProduct.value--;
    }

});

productCounterPlus.addEventListener('click', function () {
    totalProduct.value++;
});

costOfGoodsBtn.addEventListener('click', function () {
    currentTotal.innerHTML = parseInt(price.innerText) * parseInt(totalProduct.value) + ' $.';
});


//6

var div = document.querySelector('#current-cart-items');
var btnCount = document.querySelector('#current-cart-items').lastElementChild.previousElementSibling;

div.addEventListener('click', function (e) {
    if (e.target.dataset.btn === 'btn-pos') {
        e.target.previousElementSibling.value++;
    }
    if (e.target.dataset.btn === 'btn-neg') {
        if (e.target.nextElementSibling.value === '0') {
            e.target.nextElementSibling.value = '0';
        } else {
            e.target.nextElementSibling.value--;
        }
    }
});



btnCount.addEventListener('click',function(){
    var product = document.querySelectorAll('#current-cart-items div.card');
    var currentTotalItems = document.querySelector('#current-total-items');
    var sum = 0;
    product.forEach(function(elem){
        var price = elem.querySelector('.price');
        var total = elem.querySelector('.total');

        sum += Number(price.innerText) * total.value;
        console.log(sum);
    });

    currentTotalItems.innerHTML = sum + ' $';
});

//7

var input = document.querySelector('input[name = input-info]');

input.addEventListener('keydown',function(e){
    if(e.key ==='Enter' && input.value.trim() !== ''){
        createText();
    }
});


function createText(){
    var inputValue = input.value;
    input.value = '';

    var pText = document.createElement('p');
    pText.innerText = inputValue;

    input.parentElement.append(pText);
}



//8
// var modalContainer = document.querySelector('#modal-box');
// var modal = document.querySelector('#modal1');

// modalContainer.addEventListener('click', function (e) {
//     var currentBtn = e.target;
//     var currentNumb = Number(e.target.dataset.numb);

//     if (currentBtn.classList.contains('waves-effect')) {
//         generateModalInfo(currentNumb);
//         modal.classList.add('modal_open');

//     }
// });

// window.addEventListener('keydown', function (e) {

//     if (e.key === 'Escape' && modal.classList.contains('modal_open')) {
//         modal.classList.remove('modal_open');
//     }
// });

// function generateModalInfo(currentId) {
//     var result = listModal.filter(function (item, index) {
//         if (item.id === currentId) {
//             return item;
//         }
//     });
//     var modalTitle = document.querySelector('#modal1 h4');
//     var modalDescription = document.querySelector('#modal1 p');

//     modalTitle.innerHTML = result[0].title;
//     modalDescription.innerHTML = result[0].description;



//     console.log(result);
//     return result;
// }

var modalBox = document.querySelector('#modal-box');
var modal1 = document.querySelector('#modal1');

modalBox.addEventListener('click',function(e){
    var currentBtn = e.target;
    var currentNumb = Number(e.target.dataset.numb);

    if(currentBtn.classList.contains('waves-effect')){
        generateModalInfo(currentNumb);
        modal1.classList.add('modal_open');
    }
});

window.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && modal1.classList.contains('modal_open')){
        modal1.classList.remove('modal_open');
    }
});

function generateModalInfo(currentId){
    var result = listModal.filter(function(item,index){
        if(item.id === currentId){

            return item;
        }
    });
    var modalTitle = document.querySelector('#modal1 h4');
    var modalText = document.querySelector('#modal1 p');
    modalTitle.innerHTML = result[0].title;
    modalText.innerHTML = result[0].description;
    console.log(result[0]);

    // return result;
}
