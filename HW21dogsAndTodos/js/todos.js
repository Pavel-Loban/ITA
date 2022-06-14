//https://jsonplaceholder.typicode.com/users/1/todos
// Выведите первые 4 задачи из данного списка. Обязательно нужно вывести название задачи, и текущее состоаяние выполнения(true/false)

const getTenTaskcs = (count = 10) => {
    fetch(`https://jsonplaceholder.typicode.com/users/1/todos/?_limit=${count}`).then(
        (res) => {
            return res.json();
        }
    ).then(
        (data) => {
            console.log(data);
            const containerTodos = document.querySelector('#todos');
            containerTodos.innerHTML = '';

            data.forEach((todo) => {
                containerTodos.innerHTML += `
                <div class="card pink darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">${todo.title}</span>
                        <p>${todo.completed}</p>
                    </div>
                </div>
                `;
            });
        }
    ).catch(
        (err) => {
            console.log(err);

        }
    );
};

document.querySelector('#ten-tasks').addEventListener('click', () => {
    getTenTaskcs(3);
});

document.querySelector('#thirty-tasks').addEventListener('click', () => {
    getTenTaskcs(10);
});

const getTodo = (postId = 9) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`).then(
        (res) => {
            return res.json();
        }
    ).then(
        (data) => {
            const containerTodos = document.querySelector('#todos');
            containerTodos.innerHTML = '';
            containerTodos.innerHTML += `
            <div class="card pink darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${data.title}</span>
                    <p>${data.completed}</p>
                </div>
            </div>
            `;
        }

    ).catch(
        (err) => {
            console.log(err);

        }
    );
};

document.querySelector('#ninth-task').addEventListener('click', () => {
    getTodo(9);
});