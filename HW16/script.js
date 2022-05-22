//1

var input1 = document.querySelectorAll('input')[0];
var input2 = document.querySelectorAll('input')[1];
var input3 = document.querySelectorAll('input')[2];

input1.addEventListener('click', getAlert);
input2.addEventListener('click', getAlert);
input3.addEventListener('click', getAlert);


function getAlert(e) {

    alert(e.target.value);
    e.target.removeEventListener('click', getAlert);
}


//2

var input4 = document.querySelectorAll('input')[3];
var input5 = document.querySelectorAll('input')[4];

input4.addEventListener('blur', getText);
input5.addEventListener('blur', getText);

function getText(e) {
    var textInputValue = document.createElement('p');

    if (e.target.value.trim() !== '') {
        textInputValue.innerHTML = '"Вы ввели ' + e.target.value + ' "';
        e.target.after(textInputValue);
    }

    e.target.value = '';

}

//3


var btnForm = document.querySelector('button');

btnForm.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target.parentElement.id);

    var inputForm = document.querySelectorAll('#sum-form input');
    var sum = 0;
    inputForm.forEach(function (elem) {

        sum += Number(elem.value);

    });
    var text = document.createElement('p');
    text.innerHTML = sum;
    btnForm.parentElement.append(text);
});




//4

var select = document.querySelector('select');
var lastInput = document.querySelectorAll('input')[10];

select.addEventListener('click', function (e) {
    lastInput.value = select.options[select.selectedIndex].text;
});




