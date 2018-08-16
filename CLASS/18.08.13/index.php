<?php

echo "Hello from php <br>";

$apple = "<br>hello from Apple";

echo $apple;

echo "Hello $apple";

echo "<h1 class=\"apple\">Hello world</h1>";
echo "<h1 class='apple'>Hello world</h1>";

$orange = "apple";

echo $$orange;

// $$orange -> $apple

$myArray[0] = "apple";
$myArray[1] = "orange";
$myArray[2] = "plum";
$myArray[] = "lemon";
$myArray["Moscow"] = 17000000;

array_push($myArray, "melon","watermelon","tomato");

echo "<pre>";
var_dump($myArray);
echo "</pre>";
/*
for($i = 0; $i < 10; $i++) {
	echo $i;
}

echo $i;
 */

foreach($myArray as $key => $item) {
	echo "Key: ".$key." value: ".$item."<br>";
}

$file = fopen("data.txt", "a+");

fwrite($file,"Hello world<br>");
fclose($file);

echo file_get_contents("data.txt");

?>