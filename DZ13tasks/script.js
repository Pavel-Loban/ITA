 // Task 1

 var btnValidInput = document.getElementById('btn-submit-name');

 function validInput(){
     var form = document.forms.form1;
     var firstName = form.elements.firstName;
     var errorMessage = document.querySelector('.error-message');

     if(firstName.value === ''){
        errorMessage.style.display = 'block';
        firstName.focus();
     } else{
         errorMessage.style.display = 'none';
     }
 }
 btnValidInput.onclick = validInput;


 //2
 var btnValidInput2 = document.getElementById('btn-submit-lastname');

function getInfoInput(){
    var form2 = document.forms.form2;
    var lastName = form2.elements.lastName;
    var errorMessage = document.querySelector('.error-message-lastname');
    var lenghtLastName = form2.elements.lastName;

    if(lastName.value === '' || (lastName.value).length < 3){
        errorMessage.style.display = 'block';
        lastName.focus();
    }else{
        errorMessage.style.display = 'none';
    }
}
btnValidInput2.onclick = getInfoInput;

 // Task3

 var quad = document.getElementsByClassName('blue_block')[0];

 function changeBackgroundQuad(){
     quad.classList.add('red_block');
 }

 quad.addEventListener('mouseenter', changeBackgroundQuad);





 // Task5

 var inputName = document.querySelector('#first_name2');

 inputName.addEventListener('keyup', function(event){
     //console.log(event.code);
if(event.code === 'Enter'){
    var currentValue = inputName.value;
    var parentTable = document.querySelector('#name_list');
    parentTable.innerHTML += '<tr><td>' + currentValue + '</td></tr>';
    inputName.value = '';
}
 });




 // Task6

var btnOpen = document.querySelector('#open-modal');
var modal = document.querySelector('#modal1');

btnOpen.addEventListener('click', function(){
    modal.classList.add('modal_open');
});

window.addEventListener('keyup', function(){

});

//8
var inputName2 = document.querySelectorAll('#first_login')[1];

inputName2.addEventListener('keyup', function(event){
    // console.log(event.code);
    if(event.code === 'Enter'){
        var inputLogin = inputName2.value;
        if(inputLogin[0] === inputLogin[0].toUpperCase()){
            console.log(inputLogin);
            inputName2.value = '';
            inputName2.style.border = 'none';
        }else{
            inputName2.focus();
            inputName2.style.border = '3px solid red';
        }
        // console.log(inputLogin);

    }
});

//9

var firstKg = document.querySelector('#first_kg');
var btnCalculateWater = document.querySelector('#calculate-water');
var finalCalculate = document.querySelector('#final-calculate');

function getWaterPerKg(){
    finalCalculate.innerHTML = firstKg.value * 30 + ' мл';

}
btnCalculateWater.onclick = getWaterPerKg;

//10

var numbeOfDays = document.querySelector('#first_days');
// var hourlyRate = document.getElementsByTagName('select');
var calculateSalary = document.querySelector('#calculate-salary');
var finalSalary = document.querySelector('#final-salary');

function getSalary(){
    var rates = document.querySelector('select');
    var hourlyRate = rates.value;
    console.log(numbeOfDays.value);

    finalSalary.innerHTML = (numbeOfDays.value * hourlyRate) + ' $';
}

    calculateSalary.onclick = getSalary;