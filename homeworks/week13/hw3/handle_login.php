<?php
require_once('conn.php');

$username = $_POST['username'];
$password = $_POST['password'];
$stmt = $conn->prepare("SELECT * FROM `keronscribe_users` WHERE `username`=? ");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
	$row = $result->fetch_assoc();
	$hash = $row['password'];
	if (password_verify($password, $hash)) {
		session_start();
		$_SESSION['username'] = $row['username'];
		$_SESSION['user_id'] = $row['user_id'];
		 echo "{$_SESSION['username']}";
		header('location:index.php');
	} else {
		// 登入失敗
		echo "<h1>Wrong password!</h1>
    <a class=\"a\" href=\"register.php\">前往註冊</a>
    <a class=\"a\" href=\"login.php\">前往登入</a>";
	}
}
