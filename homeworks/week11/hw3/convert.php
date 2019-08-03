<?php
require_once('conn.php');
$certificate_id = $_COOKIE["id"];
$sql = "SELECT * FROM `keronscribe_users_certificate` WHERE `id` = '$certificate_id'";
$result = $conn->query($sql);
$the_user = $result->fetch_assoc();
$username = $the_user['username'];
$sql = "SELECT * FROM `keronscribe_users` WHERE `username` = '$username'";
$result = $conn->query($sql);
if($result->num_rows > 0){
  $row = $result->fetch_assoc();
  $user_id = $row['user_id'];
}
?>
