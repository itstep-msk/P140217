<?
// Получаем файл если он есть
$file = "fruit.json";
if(file_exists($file)) {
	$fruitJson = file_get_contents($file);
}
// В переменную записываем результат функции. Возвращает массив
$array = json_decode($fruitJson);

// Добавляем в конец массива ассоциативный массив
$array[] = array($_POST["key"] => $_POST["value"]);

// Конвертируем из массива в json объект
$json = json_encode($array);

// Создаем и записываем в файл
$file = fopen("fruit.json","w+");
fwrite($file, $json);
fclose($file);

echo file_get_contents("fruit.json");

/*
Пример

1) $fruitJson = file_get_contents("fruit.json"); // [{ "apple": "10" }]

2) $array = json_decode($fruitJson); // ["apple" => "10"]

3)

$_POST["key"] // "orange"
$_POST["value"] // "20"

$array[] = array($_POST["key"] => $_POST["value"]); // ["apple" => "10", "orange" => "20"]

4) $json = json_encode($array); // [{ "apple": "10" },{ "orange": "20" }]

$file = fopen("fruit.json","w+"); // сохраняет в файл

*/

?>