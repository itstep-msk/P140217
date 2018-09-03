<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
include("db.php");

if(isset ($_SESSION['user'])) {
    echo "Привет ".$_SESSION['user'];
    echo '
		<form action="" method="POST">
		    <input type="text" name="header" placeholder="заголовок" style="margin-bottom: 5px;"></br>
		    <textarea name="text" cols="30" placeholder="введите текст..." rows="10"></textarea></br>
		    <input type="submit" value="Отправить" style="margin-top: 5px;">
		</form>
    ';
} else {
	echo "Вы не вошли на сайт...";
}

?>



<?php

$header = $_POST['header'];
$content = $_POST['text'];
if (!empty($header) && !empty($content))
    mysql_query("insert into content (header, content) values ('$header', '$content')");

?>