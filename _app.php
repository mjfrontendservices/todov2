<?php
$title = "Todo App";
require './head.php';
?>

<header>
    <div class="container">
        <h2>Todos</h2>
    </div>
</header>

<section class="addCategInput">
    <div class="container">
        <div class="input">
            <input type="text" class="categInput" placeholder="Add Category...">
        </div>
        <div class="button">
            <button class="add">Add</button>
            <button class="adding"><div class="spinner-border addLoading"></div></button>
        </div>
    </div>
</section>

<section class="addCateg">
    <div class="container">
        <h4 class="adds"><i class="fa fa-plus"></i> Add Category</h4>
        <h4 class="cancel"><i class="fa fa-times"></i> Cancel</h4>
    </div>
</section>

<section class="categories">
    <div class="container">
    </div>
</section>

<?php
require './foot.php';
?>