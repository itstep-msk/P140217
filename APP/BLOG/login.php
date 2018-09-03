<? header('Content-Type: text/html; charset=utf-8');
session_start();
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
    <div>Войти</div>
    <form action="" method="POST">
        <input type="text" placeholder="login" name="user">
        <input type="password" placeholder="password" name="password">
        <input type="submit" value="Войти">
    </form>

    <?
    $inputUser = $_POST["user"];
    $inputPassword = $_POST["password"];


    if(!empty($inputUser) && !empty($inputPassword)) {
        $data = mysql_query("select * from users where '$inputUser' = login and '$inputPassword' = password");
        if (!mysql_fetch_array($data)) {
            echo ("Such user doesn't exist");
        } else {    
            $_SESSION['user'] = $inputUser;
            echo "<script> window.location.href='http://localhost:81/denwer/30.08.18/admin.php' </script>";
        }
    }
    ?>

</body>
</html>