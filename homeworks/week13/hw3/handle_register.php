<?php
require_once('conn.php');

$username = trim($_POST['username']);
$password = trim($_POST['password']);
$nickname = trim($_POST['nickname']);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$username = $password = $nickname = "";
	if(empty($_POST['username'])){
		$nameErr = "username is required";
		echo "<script> alert(\"$nameErr\");
		location.href='register.php'</script>";
	} else {
		$username = $_POST["username"];
	}

	if (empty($_POST["password"])) {
		$passwordErr = "password is required";
		echo "<script> alert(\"$passwordErr\");
		location.href='register.php'</script>";

	} else {
		$password = $_POST["password"];
		$password = password_hash("$password", PASSWORD_DEFAULT);
	}

	if (empty($_POST["nickname"])) {
		$nicknameErr = "Nickname is required";
		echo "<script> alert(\"$nicknameErr\");
		location.href='register.php'</script>";
	} else {
		$nickname = $_POST["nickname"];
	}

	if (!($username === '') and !($password === '') and !($nickname === '')){
		$stmt = $conn->prepare("SELECT * FROM `keronscribe_users` WHERE `username` = ?");
		$stmt->bind_param("s",$username);
		$stmt->execute();
		$result = $stmt->get_result();
		if($result->num_rows > 0){
			echo "該名稱已被使用<br/>";
			echo "<a href=\"register.php\">回註冊頁</a> <br/>";
			echo "<a href=\"login.php\">往登入頁</a> <br/>";
		} else {
			$stmt = $conn->prepare("INSERT INTO `keronscribe_users`(`username`, `password`,`nickname`) VALUES (?,?,?)");
			$stmt->bind_param("sss", $username, $password, $nickname);
      if($stmt->execute()){
        header('location:login.php');
      } else {
        echo "error $sql <br / >  $conn->error";
      }
		}
	}
}

?>
