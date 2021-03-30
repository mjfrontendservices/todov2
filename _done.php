<?php
$title = "App";
require './head.php';
?>

<header>
    <div class="container">
        <h2>Todos</h2>
    </div>
</header>

<section class="catName">
    <div class="container">
        <h2 class="categnameHead"></h2>
    </div>
</section>

<section class="addTodoInput">
    <div class="container">
        <div class="input">
            <input type="text" class="todoData" placeholder="Add todo...">
        </div>
        <div class="button">
            <button class="addTodo">Add</button>
            <button class="ad"><div class="spinner-border addingTodo"></div></button>
        </div>
    </div>
</section>

<section class="task">
    <div class="container">
        <div class="_task">
            <p><b>Tasks <span class="taskCounter"></span></b></p>
        </div>
        <div class="_done active">
            <p><b>Done <span class="doneCounter"></span></b></b></p>
        </div>
    </div>
</section>

<section class="doneList">
    <div class="container">
    </div>
</section>

<?php
require './foot.php';
?>