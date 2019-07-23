<?php
require_once('conn.php');
$user_id = $_COOKIE["id"];
$sql = "SELECT * FROM `keronscribe_users` WHERE `user_id` = $user_id";
$result = $conn->query($sql);
$the_user = $result->fetch_assoc();
$nickname = $the_user['nickname'];
?>