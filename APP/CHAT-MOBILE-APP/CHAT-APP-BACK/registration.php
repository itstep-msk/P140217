<?

class Database {
	private $address, $login, $password;

	function __construct($address, $login, $password) {
		$this->address = $address;
		$this->login = $login;
		$this->password = $password;
	}

	public function connect() {
		return mysql_connect($this->address, $this->login, $this->password);
	}

	public function select($db) {
		return mysql_select_db($db);
	}

	public function check() {

	}

	public function query($query) {
		return mysql_query($query);
	}

	public function get_assoc($query) {
		return mysql_fetch_assoc(mysql_query($query));
	}
}

class User {

	private $name, $email, $password, $phone;

	function __construct($name, $email, $password, $phone) {
		$this->name = $name;
	}

}

$db = new Database("localhost", "root", "");
$db->connect();
$db->select("chat");
//$db->query("INSERT INTO user(login, password, email, phone) VALUES('test','testpass','1@1.ru','777')");
//$result = $db->get_assoc("SELECT * FROM user");

$_POST = json_decode(file_get_contents('php://input'), true);

var_dump($_POST);

/*
php:// — Доступ к различным потокам ввода-вывода

php://input является потоком только для чтения, который позволяет читать необработанные данные из тела запроса.
*/

?>