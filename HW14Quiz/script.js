 //1
var userForm = document.querySelector('#start-question');
var avatarContainer = document.querySelector('#smile');
var userData = ['Joe','avatar'];
var questionBox = document.querySelector('#box-questions');
var questionForm = document.querySelector('.quiz-form');
var correctAnswer = ['B','D','B','A','C','E'];
var resultContainer = document.querySelector('.quiz__heading');

var countQuestion = document.querySelectorAll('.quiz-form__quiz');
var btnRight = document.querySelectorAll('.layer_right ');
var btnLeft = document.querySelectorAll('.layer_left');
var body = document.getElementsByTagName('body');
var btnSpan = document.querySelectorAll('.layer');

avatarContainer.addEventListener('click', function(e){
    if(document.querySelectorAll('.show')){
        document.querySelectorAll('.show').forEach(function(item){
            item.classList.remove('show');
        });
    }
    //console.log(e.target);
    if(e.target.tagName === 'INPUT'){
        e.target.previousElementSibling.firstElementChild.classList.add('show');
    }
});


userForm.addEventListener('submit',function(e){
    var activeAvatar = document.querySelector('input[name="question2"]:checked');
    var activeName = userForm.elements.question1.value;
    var activeImg = activeAvatar.previousElementSibling.firstElementChild.src;

    if(activeName === ''){
        userData = ['User', activeImg];
    }else{
        userData = [activeName, activeImg];
    }


    console.log(userData);

    userForm.classList.add('quiz');
    questionBox.classList.remove('quiz');

    for(var i = 1; i < countQuestion.length;i++ ){
        countQuestion[i].classList.add('quiz__heading');
    }




    scrollingUp();


    e.preventDefault();

});

questionForm.addEventListener('submit',function(e){
    var userInfo = document.querySelector('.name__user');
    var count = 0;
    var startResult = 0;


    var userAnswer = [
        questionForm.elements.q1,
        questionForm.elements.q2,
        questionForm.elements.q3,
        questionForm.elements.q4,
        questionForm.elements.q5,
        questionForm.elements.q6
    ];

    userAnswer.forEach(function(item, index){
        if(item.value === correctAnswer[index]){
            count += (100/(countQuestion.length));
            for(var i = 0; i < item.length ; i++){
                var isChecked = item[i].checked;
                if(isChecked){
                    item[i].parentElement.classList.add('correct');
                }
            }
        }else{
            for(var i = 0; i < item.length; i++){
               var isChecked = item[i].checked;
                if(isChecked){
                    item[i].parentElement.classList.add('wrong');
                }
            }
        }
    });

    // for(var i = 0; i < countQuestion.length;i++ ){
    //     countQuestion[i].classList.remove('quiz__heading');
    // }
    countQuestion.forEach(function(elem){
        elem.classList.remove('quiz__heading');
    });

    btnSpan.forEach(function(span){
        span.classList.add('quiz__heading');
    });



    resultContainer.classList.remove('quiz__heading');

    userInfo.innerHTML = userData[0] + '<img src="'+ userData[1] +'" alt = "user">' + Math.round(count);



    var userImg = document.querySelector('.name__user img');
     userImg.classList.add('border');
     document.querySelector('H2').lastChild.nodeValue = '%';
    scrollingUp();

    e.preventDefault();
});



window.addEventListener('click',function(e){
    var submit2 = document.querySelectorAll('.submit')[1];
    if(e.target.classList.contains('layer_right') ){
        e.target.parentElement.classList.add('quiz__heading');
        e.target.parentElement.nextElementSibling.classList.remove('quiz__heading');
        }

    if(e.target.classList.contains('layer_left') ){
        e.target.parentElement.classList.add('quiz__heading');
        console.log(e.target.parentElement.previousElementSibling);
        e.target.parentElement.previousElementSibling.classList.remove('quiz__heading');
    }
    if(e.target === btnRight[btnRight.length - 1]){
        console.log('Ura');
        submit2.classList.add('submit2');
        submit2.style.cssText = 'margin-top: -15px;';
    }else if(e.target === btnLeft[btnLeft.length - 1]){
        submit2.classList.remove('submit2');
        submit2.style.cssText = '1rem auto 4rem auto;';
    }

});


function scrollingUp(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}