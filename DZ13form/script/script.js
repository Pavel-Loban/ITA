
var form = document.forms.form;
var pForm = document.getElementsByClassName('p-input');
var pinput = document.querySelectorAll('.p-input');

var input1 = form.elements.developers;
var error1 = document.querySelector('.error1');
var divInput1 = document.querySelector('#div-input1');
var errorText1 = document.querySelector('#error-text');

window.addEventListener('click', function(e){
    if(e.target.classList.contains('p-input')){
        e.target.addEventListener('blur',function(){
            if(e.target.value.trim() === '' || e.target.value === 'Выберите категорию' ){
                e.target.parentElement.classList.remove('col-sm-10');
                e.target.parentElement.classList.add('col-sm-4');
                e.target.parentElement.nextElementSibling.classList.remove('display');
                console.log(e.target.parentElement.nextElementSibling);
            }else{
                e.target.parentElement.classList.add('col-sm-10');
                e.target.parentElement.classList.remove('col-sm-4');
                e.target.parentElement.nextElementSibling.classList.add('display');
            }
        });
        console.log(e.target);
    }
});

// input1.addEventListener('blur', function(){
//     if(input1.value.trim() === ''){
//         error1.classList.remove('display');
//         errorText1.innerHTML = 'Поле обязательно должно быть заполнено';
//         divInput1.classList.remove('col-sm-10');
//         divInput1.classList.add('col-sm-4');
//     }else if(input1.value[0] !== input1.value[0].toUpperCase()){
//         error1.classList.remove('display');
//         divInput1.classList.remove('col-sm-10');
//         divInput1.classList.add('col-sm-4');
//         errorText1.innerHTML = 'Первая буква обязательно должна быть заглавной';
//     }
//     else{
//         error1.classList.add('display');
//         divInput1.classList.remove('col-sm-4');
//         divInput1.classList.add('col-sm-10');
//     }
// });



// //3
// var input3 = form.elements.urlSites;
// var error3 = document.querySelector('.error3');
// var divInput3 = document.querySelector('#div-input3');
// var errorText3 = document.querySelector('#error-text3');

// input3.addEventListener('blur', function(){
//     input3.value.trim()
//     if(input3.value.trim() === ''){
//         error3.classList.remove('display');
//         errorText3.innerHTML = 'Поле обязательно должно быть заполнено';
//         divInput3.classList.remove('col-sm-10');
//         divInput3.classList.add('col-sm-4');
//     }else if( isNaN(parseInt(input3.value)) === false){
//         error3.classList.remove('display');
//         errorText3.innerHTML = 'Поле не должно быть числом';
//         divInput3.classList.remove('col-sm-10');
//         divInput3.classList.add('col-sm-4');
//     }
//     else{
//         error3.classList.add('display');
//         divInput3.classList.remove('col-sm-4');
//         divInput3.classList.add('col-sm-10');
//     }
// });



//5
// var input5 = form.elements.visitor_per_day;
// var error5 = document.querySelector('.error5');
// var divInput5 = document.querySelector('#div-input5');
// var errorText5 = document.querySelector('#error-text5');

// input5.addEventListener('blur', function(){
//     input5.value.trim();
//     if(input5.value.trim() === '' ){
//         error5.classList.remove('display');
//         errorText5.innerHTML = 'Поле обязательно должно быть заполнено';
//         divInput5.classList.remove('col-sm-10');
//         divInput5.classList.add('col-sm-4');
//     }else if( isNaN(parseInt(input5.value)) === true){
//         error5.classList.remove('display');
//         errorText5.innerHTML = 'Поле обязательно должно быть числом';
//         divInput5.classList.remove('col-sm-10');
//         divInput5.classList.add('col-sm-4');
//     }
//     else{
//         error5.classList.add('display');
//         divInput5.classList.remove('col-sm-4');
//         divInput5.classList.add('col-sm-10');
//     }
// });


//Radios
var radios = form.elements.accommodation;
var error9 = document.querySelector('.error9');
var divInput9 = document.querySelector('#div-input9');
var errorText9 = document.querySelector('#error-text9');

//checkbox
 var checkbox = form.elements.rewiew;
 var error10 = document.querySelector('.error10');
 var divInput10 = document.querySelector('#div-input10');
 var errorText10 = document.querySelector('#error-text10');


//submit
var btn = document.querySelector('.p-btn');

btn.onclick = function(e){

if(checkbox.checked === false ){
    error10.classList.remove('display');
    errorText10.innerHTML = 'Разрешите отзыв';
    divInput10.classList.remove('col-sm-10');
    divInput10.classList.add('col-sm-4');
    e.preventDefault();
}else{
    error10.classList.add('display');
    divInput10.classList.remove('col-sm-4');
    divInput10.classList.add('col-sm-10');
}

// focus

for(let i = 0; i < pForm.length;i++){
    if(pForm[i].value.trim() === '' || pForm[i].value === 'Выберите категорию'){
        pForm[i].parentElement.classList.remove('col-sm-10');
        pForm[i].parentElement.classList.add('col-sm-4');
        pForm[i].parentElement.nextElementSibling.classList.remove('display');
        pForm[i].scrollIntoView();
        pForm[i].focus();
        console.log(pForm[i].value);
        e.preventDefault();
    }else{
        pForm[i].parentElement.classList.add('col-sm-10');
        pForm[i].parentElement.classList.remove('col-sm-4');
        pForm[i].parentElement.nextElementSibling.classList.add('display');
    }
}
    for(let i = 0; i < pForm.length;i++){
        if(pForm[i].value.trim() === '' || pForm[i].value === 'Выберите категорию'){
            pForm[i].scrollIntoView();
            pForm[i].focus();
            break;
        }
    }

    if(radios[0].checked === false && radios[1].checked === false && radios[2].checked === false){
        error9.classList.remove('display');
        errorText9.innerHTML = 'Выберите';
        divInput9.classList.remove('col-sm-10');
        divInput9.classList.add('col-sm-4');
        e.preventDefault();
    }else{
        error9.classList.add('display');
        divInput9.classList.remove('col-sm-4');
        divInput9.classList.add('col-sm-10');
    }
};




