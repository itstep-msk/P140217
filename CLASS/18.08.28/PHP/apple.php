<?

$file = fopen("data.txt", "a+");

$data = json_decode(file_get_contents("data.txt"));

foreach($_POST as $key => $value) {
	$data[] = array($key => $value);
}

$data = json_encode($data);

fwrite($file, $data);
fclose($file);

echo file_get_contents("data.txt");

?>