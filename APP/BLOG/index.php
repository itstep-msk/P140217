<?php
header('Content-Type: text/html; charset=utf-8');
include("db.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>


<?php


$data = mysql_query("select * from content");
while ($result = mysql_fetch_array($data, MYSQL_ASSOC)) {
    echo "<p> <b>Название</b> </p>"; 
    echo "<div>" . $result['header'] . "</div>";
    echo "<p> <b>Текст</b> </p>"; 
    echo "<div>" . $result['content'] . "</div>";
    echo "</br>";
    echo "</br>";
}

?>