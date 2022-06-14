//https://dog.ceo/api/breeds/image/random
const URL_DOG ='https://dog.ceo/api/breeds/image/random';


const generateDogImage = () => {
    fetch(`${URL_DOG}`).then(
    (res) => {
        // console.log(res);
        return res.json();
        }
    )
    .then(
        (images) => {
            // console.log(images);
            let dogsContainer =  document.querySelector('#dogs');
            dogsContainer.innerHTML = '';

            dogsContainer.innerHTML += `
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <img src="${images.message}" alt="dog">
              <span class="card-title">Good boy or good girl!</span>
            </div>
          </div>
            `;

        }
    ).catch(
        (err) => {
            console.log(err);
        }
    );
}

document.querySelector('#new-dog').addEventListener('click',generateDogImage);




const generateMoreDogImage = (countEl) => {
    fetch(`${URL_DOG}/${countEl}`).then(
    (res) => {
        return res.json();
        }
    )
    .then(
        (images) => {
            let dogsContainer =  document.querySelector('#dogs');

            images.message.forEach((item) => {
                dogsContainer.innerHTML += `
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <img src="${item}" alt="dog">
              <span class="card-title">Good boy or good girl!</span>
            </div>
          </div>
            `;
            });

            allow(ban);
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    );
};

document.querySelector('#more-dog').addEventListener('click', () => {
    generateMoreDogImage(3);
});



function ban(){
    if(ban.fun){
        return false;
    }
    generateMoreDogImage(3);
    ban.fun = true;
}

function allow(func){
      func.fun = false;
}


window.addEventListener('scroll', () => {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if(windowRelativeBottom < document.documentElement.clientHeight + 100){
        ban();
    }
});


