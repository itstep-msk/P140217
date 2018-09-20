<?
$fileName = "fruit.json";
// Проверка на файл
if(file_exists($fileName)) {
	$fruitJson = file_get_contents($fileName);
	// В переменную записываем результат функции. Возвращает массив
	$array = json_decode($fruitJson);
} else {
	$array = array();
}

// Добавляем в конец массива ассоциативный массив
$array[] = array($_POST["key"] => $_POST["value"]);

// Конвертируем из массива в json объект
$json = json_encode($array);

// Создаем и записываем в файл
$file = fopen($fileName,"w+");
fwrite($file, $json);
fclose($file);

echo file_get_contents($fileName);

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