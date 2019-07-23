<?php
require_once('conn.php');

$username = $_POST['username'];
$password = $_POST['password'];
$sql = "SELECT * FROM `keronscribe_users` WHERE `username` = '$username' AND `password` = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0){
	$row = $result->fetch_assoc();
	setcookie("id", "{$row['user_id']}", time()+3600*24);
	header('location:board.php');
} else {
	echo "<script>location.href='loginpage.php'</script>";
}
?>