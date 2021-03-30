$(document).ready(function () {

    // navigations

    $('._task').click(function () {
        window.location.href = "_tasks.html";
    });

    $('._done').click(function () {
        window.location.href = "_done.html";
    });

    // categs localstorage array

    let categs = JSON.parse(localStorage.getItem('todos'));
    if (!categs) {
        categs = [];
    }

    // temp array for temporary arrays[variables]

    let temp = JSON.parse(localStorage.getItem('temp'));
    if (!temp) {
        temp = '';
    }

    // category name function add category

    function addCateg(categname) {
        const obj = {
            id: Date.now(),
            categName: categname,
            tasks: [],
            done: []
        }
        if (categname === "") {
            alert("Invalid Category...");
        } else {
            $($('.add')).hide();
            $('.adding').show();
            categs.push(obj);
            localStorage.setItem('todos', JSON.stringify(categs));
            window.location.reload();
        }
    }

    // function for assigning a temporary id for category visit

    function tempCategId(tempId) {
        localStorage.setItem('temp', tempId);
    }

    // add category button click

    $('.add').click(function () {
        addCateg($('.categInput').val());
    });

    // add category Toggle big button

    $('.addCateg').click(function () {
        $('.addCategInput').slideToggle();
        $('.adds').toggle();
        $('.cancel').toggle();
    });

    // append on reload (append the category...)

    categs.forEach(element => {
        $('.categories .container').append(`
            <div class="cat">
                <div cat-id="${element.id}" class="categoryName">
                    <h2>${element.categName}</h2>
                    <p>
                        <span class="task"><i class="fa fa-tasks"></i> Task: <span class="_taskCounter">${element.tasks.length}</span></span><br>
                        <span class="done"><i class="fa fa-check"></i> Done: <span class="_doneCounter">${element.done.length}</span></span><br>
                    </p>
                </div>
                <div class="categDelete">
                    <i del-data="${element.id}" class="fa fa-trash del"></i>
                </div>
            </div>
        `)
    });

    // delete category (deleting the category...)

    $('.del').click(function () {
        let id = $(this).attr('del-data');
        let categIdtoDelete = categs.findIndex(x => x.id === parseInt(id));
        if (categIdtoDelete != -1) {
            categs.splice(categIdtoDelete, 1);
            localStorage.setItem('todos', JSON.stringify(categs));
            window.location.reload();
        }
    });

    // go inside Category

    // add todo task...

    function addTodo(todoData) {
        $('.addTodo').hide();
        $('.ad').show();
        let tempId = parseInt(localStorage.getItem('temp'));
        let indexToInsertTodo = categs.findIndex(x => x.id === tempId);
        let todo = {
            id: Date.now(),
            todoName: todoData
        }
        categs[indexToInsertTodo].tasks.push(todo);
        localStorage.setItem('todos', JSON.stringify(categs));
        window.location.href = "_tasks.html";
    }

    // if category name (block was click, id will be put on the temporary id...)

    $('.categoryName').click(function () {
        tempCategId($(this).attr('cat-id'));
        window.location.href = "_tasks.html";
    });

    // add todo data

    $('.addTodo').click(function () {
        addTodo($('.todoData').val())
    });

    // append on reload

    // category name

    categs.forEach(element => {
        if (parseInt(temp) === element.id) {
            $('.categnameHead').text(`${element.categName}`);
        }
    });

    let tempId = parseInt(localStorage.getItem('temp')); // getting the temporary id
    let getTask = categs.findIndex(x => x.id === tempId); // getting the index of temporary id...

    $('.taskCounter').text(categs[getTask].tasks.length); // counters
    $('.doneCounter').text(categs[getTask].done.length);

    // all the task

    categs[getTask].tasks.forEach(element => {
        $('.taskList .container').append(`
            <div class="taskk">
                <div class="taskName">
                    <p><b>${element.todoName}</b></p>
                </div>
                <div class="actions">
                    <i done-id="${element.id}" class="fa fa-check green done"></i>
                    <i remove-id="${element.id}" class="fa fa-trash red remove"></i>
                </div>
            </div>
        `)
    });

    // all the done

    categs[getTask].done.forEach(element => {
        $('.doneList .container').append(`
            <div class="done">
                <div class="doneName">
                    <p><b>${element.done}</b></p>
                </div>
                <div class="doneDel">
                    <i removeDone-id="${element.id}" class="fa fa-trash removeDone"></i>
                </div>
            </div>
        `)
    });

    // done click function

    function doneId(tempId, doneId) {
        let doneIndex = categs.findIndex(x => x.id === parseInt(tempId));
        let todoToDeleteIndex = categs[doneIndex].tasks.findIndex(y => y.id === parseInt(doneId));
        let doneOBJ = {
            id: Date.now(),
            done: categs[doneIndex].tasks[todoToDeleteIndex].todoName
        }
        categs[doneIndex].done.push(doneOBJ);
        localStorage.setItem('todos', JSON.stringify(categs));
        categs[doneIndex].tasks.splice(todoToDeleteIndex, 1);
        localStorage.setItem('todos', JSON.stringify(categs));
        window.location.reload();
    }

    // remove todo tasks

    function removeTodo(tempId, removeId) {
        let doneIndex = categs.findIndex(x => x.id === parseInt(tempId));
        let todoToDeleteIndex = categs[doneIndex].tasks.findIndex(y => y.id === parseInt(removeId));
        if (todoToDeleteIndex != -1) {
            categs[doneIndex].tasks.splice(todoToDeleteIndex, 1);
            localStorage.setItem('todos', JSON.stringify(categs));
            window.location.reload();
        }
    }

    // remove the done todo

    function removeDoneTodo(tempId, removeId) {
        let doneIndex = categs.findIndex(x => x.id === parseInt(tempId));
        let todoToDeleteIndex = categs[doneIndex].done.findIndex(y => y.id === parseInt(removeId));
        if (todoToDeleteIndex != -1) {
            categs[doneIndex].done.splice(todoToDeleteIndex, 1);
            localStorage.setItem('todos', JSON.stringify(categs));
            window.location.reload();
        }
    }

    // done was click

    $('.done').click(function () {
        doneId(
            localStorage.getItem('temp'),
            $(this).attr('done-id')
        );
    });

    // remove was click

    $('.remove').click(function () {
        removeTodo(
            localStorage.getItem('temp'),
            $(this).attr('remove-id')
        );
    });

    // remove on the done was click

    $('.removeDone').click(function () {
        removeDoneTodo(
            localStorage.getItem('temp'),
            $(this).attr('removeDone-id')
        );
    });

});