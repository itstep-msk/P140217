<? header('Content-Type: text/html; charset=utf-8');
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
    <div>Регистрация</div>
    <form action="" method="POST">
        <input type="text" placeholder="login" name="user">
        <input type="password" placeholder="password" name="password">
        <input type="submit" value="Регистрация">
    </form>

    <?
    $inputUser = $_POST["user"];
    $inputPassword = $_POST["password"];

    $data = mysql_query("select * from users where '$inputUser' = login and '$inputPassword' = password");
    if (mysql_fetch_array($data)) {
        echo ("Such user already exists. Try another login");
    } else {
        mysql_query("insert into users (login, password) values ('$inputUser', '$inputPassword')");
    }
    ?>

</body>
</html>