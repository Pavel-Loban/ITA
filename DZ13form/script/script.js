
var form = document.forms.form;
var pForm = document.getElementsByClassName('p-input');
var pinput = document.querySelectorAll('.p-input');

var input1 = form.elements.developers;
var error1 = document.querySelector('.error1');
var divInput1 = document.querySelector('#div-input1');
var errorText1 = document.querySelector('#error-text');

input1.addEventListener('blur', function(){
    if(input1.value.trim() === ''){
        error1.classList.remove('display');
        errorText1.innerHTML = 'Поле обязательно должно быть заполнено';
        divInput1.classList.remove('col-sm-10');
        divInput1.classList.add('col-sm-4');
    }else if(input1.value[0] !== input1.value[0].toUpperCase()){
        error1.classList.remove('display');
        divInput1.classList.remove('col-sm-10');
        divInput1.classList.add('col-sm-4');
        errorText1.innerHTML = 'Первая буква обязательно должна быть заглавной';
    }
    else{
        error1.classList.add('display');
        divInput1.classList.remove('col-sm-4');
        divInput1.classList.add('col-sm-10');
    }
});

//2
var input2 = form.elements.nameSite;
var error2 = document.querySelector('.error2');
var divInput2 = document.querySelector('#div-input2');
var errorText2 = document.querySelector('#error-text2');

input2.addEventListener('blur', function(e){
    if(input2.value.trim() === ''){
        error2.classList.remove('display');
        errorText2.innerHTML = 'Поле обязательно должно быть заполнено';
        divInput2.classList.remove('col-sm-10');
        divInput2.classList.add('col-sm-4');
    }
    else{
        error2.classList.add('display');
        divInput2.classList.remove('col-sm-4');
        divInput2.classList.add('col-sm-10');
    }
});

//3
var input3 = form.elements.urlSites;
var error3 = document.querySelector('.error3');
var divInput3 = document.querySelector('#div-input3');
var errorText3 = document.querySelector('#error-text3');

input3.addEventListener('blur', function(){
    input3.value.trim()
    if(input3.value.trim() === ''){
        error3.classList.remove('display');
        errorText3.innerHTML = 'Поле обязательно должно быть заполнено';
        divInput3.classList.remove('col-sm-10');
        divInput3.classList.add('col-sm-4');
    }else if( isNaN(parseInt(input3.value)) === false){
        error3.classList.remove('display');
        errorText3.innerHTML = 'Поле не должно быть числом';
        divInput3.classList.remove('col-sm-10');
        divInput3.classList.add('col-sm-4');
    }
    else{
        error3.classList.add('display');
        divInput3.classList.remove('col-sm-4');
        divInput3.classList.add('col-sm-10');
    }
});

//4
var input4 = form.elements.opening_date;
var error4 = document.querySelector('.error4');
var divInput4 = document.querySelector('#div-input4');
var errorText4 = document.querySelector('#error-text4');

input4.addEventListener('blur', function(){
    if(input4.value.trim() === ''){
        error4.classList.remove('display');
        errorText4.innerHTML = 'Поле обязательно должно быть заполнено';
        divInput4.classList.remove('col-sm-10');
        divInput4.classList.add('col-sm-4');
    }
    else{
        error4.classList.add('display');
        divInput4.classList.remove('col-sm-4');
        divInput4.classList.add('col-sm-10');
    }
});

//5
var input5 = form.elements.visitor_per_day;
var error5 = document.querySelector('.error5');
var divInput5 = document.querySelector('#div-input5');
var errorText5 = document.querySelector('#error-text5');

input5.addEventListener('blur', function(){
    input5.value.trim();
    if(input5.value.trim() === '' ){
        error5.classList.remove('display');
        errorText5.innerHTML = 'Поле обязательно должно быть заполнено';
        divInput5.classList.remove('col-sm-10');
        divInput5.classList.add('col-sm-4');
    }else if( isNaN(parseInt(input5.value)) === true){
        error5.classList.remove('display');
        errorText5.innerHTML = 'Поле обязательно должно быть числом';
        divInput5.classList.remove('col-sm-10');
        divInput5.classList.add('col-sm-4');
    }
    else{
        error5.classList.add('display');
        divInput5.classList.remove('col-sm-4');
        divInput5.classList.add('col-sm-10');
    }
});

//6
var input6 = form.elements.e_mail;
var error6 = document.querySelector('.error6');
var divInput6 = document.querySelector('#div-input6');
var errorText6 = document.querySelector('#error-text6');

input6.addEventListener('blur', function(){
    if(input6.value.trim() === ''){
        error6.classList.remove('display');
        errorText6.innerHTML = 'Поле обязательно должно быть заполнено';
        divInput6.classList.remove('col-sm-10');
        divInput6.classList.add('col-sm-4');
    }
    else{
        error6.classList.add('display');
        divInput6.classList.remove('col-sm-4');
        divInput6.classList.add('col-sm-10');
    }
});

//7
var input7 = form.elements.select;
var error7 = document.querySelector('.error7');
var divInput7 = document.querySelector('#div-input7');
var errorText7 = document.querySelector('#error-text7');

input7.addEventListener('blur', function(){
    if(input7.value.trim() === 'Выберите категорию'){
        error7.classList.remove('display');
        errorText7.innerHTML = 'Поле обязательно должно быть заполнено';
        divInput7.classList.remove('col-sm-10');
        divInput7.classList.add('col-sm-4');
    }
    else{
        error7.classList.add('display');
        divInput7.classList.remove('col-sm-4');
        divInput7.classList.add('col-sm-10');
    }
});

//8
var input8 = form.elements.textarea;
var error8 = document.querySelector('.error8');
var divInput8 = document.querySelector('#div-input8');
var errorText8 = document.querySelector('#error-text8');

input8.addEventListener('blur', function(){
    if(input8.value.trim() === ''){
        error8.classList.remove('display');
        errorText8.innerHTML = 'Поле обязательно должно быть заполнено';
        divInput8.classList.remove('col-sm-10');
        divInput8.classList.add('col-sm-4');
    }
    else{
        error8.classList.add('display');
        divInput8.classList.remove('col-sm-4');
        divInput8.classList.add('col-sm-10');
    }
});

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
            pForm[i].scrollIntoView();
            pForm[i].focus();
            console.log(pForm[i].value);
            e.preventDefault();
        }
    }
    for(let i = 0; i < pForm.length;i++){
        if(pForm[i].value.trim() === '' || pForm[i].value === 'Выберите категорию'){
            pForm[i].scrollIntoView();
            pForm[i].focus();
            console.log(pForm[i].value);
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




