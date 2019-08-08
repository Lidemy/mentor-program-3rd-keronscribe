<?php
require_once('conn.php');
$certificate_id = $_COOKIE["id"];
$sql = "SELECT * FROM `keronscribe_users_certificate` WHERE `id` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $certificate_id);
$stmt->execute();
$result = $stmt->get_result();
$the_user = $result->fetch_assoc();
$username = $the_user['username'];
$stmt = $conn->prepare("SELECT * FROM `keronscribe_users` WHERE `username` = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows > 0){
  $row = $result->fetch_assoc();
  $user_id = $row['user_id'];
  $nickname = $row['nickname'];
} else {
  $message = "請登入或註冊:)";
	echo "<script type='text/javascript'>alert('$message');location.href = 'index.php'</script>";
}
?>
