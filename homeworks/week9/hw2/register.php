<?php
require_once('conn.php');

$username = $_POST['username'];
$password = $_POST['password'];
$nickname = $_POST['nickname'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$username = $password = $nickname = "";
	if(empty($_POST['username'])){
		$nameErr = "username is required";
		echo "<script> alert(\"$nameErr\");
		location.href='registerpage.php'</script>";
	} else {
		$username = $_POST["username"];
	}

	if (empty($_POST["password"])) {
		$passwordErr = "password is required";
		echo "<script> alert(\"$passwordErr\");
		location.href='registerpage.php'</script>";

	} else {
		$password = $_POST["password"];
	}

	if (empty($_POST["nickname"])) {
		$nicknameErr = "Nickname is required";
		echo "<script> alert(\"$nicknameErr\");
		location.href='registerpage.php'</script>";
	} else {
		$nickname = $_POST["nickname"];
	}

	if (!($username === '') and !($password === '') and !($nickname === '')){
		$sql = "SELECT * FROM `keronscribe_users` WHERE `username` = '$username'";
		$result = $conn->query($sql);
		if($result->num_rows > 0){
			echo "該名稱已被使用<br/>";
			echo "<a href=\"registerpage.php\">回註冊頁</a> <br/>";
			echo "<a href=\"loginpage.php\">往登入頁</a> <br/>";
		} else {
      $sql = "INSERT INTO `keronscribe_users`(`username`, `password`,`nickname`) VALUES ('$username', '$password', '$nickname')";
      if($conn->query($sql)){
        header('location:login.php');
      } else {
        echo "error $sql <br / >  $conn->error";
      }
		}
	}
}


?>
