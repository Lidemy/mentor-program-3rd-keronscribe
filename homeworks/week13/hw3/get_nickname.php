<?php
require_once('conn.php');
if(isset($_SESSION['username'])){
  $username = $_SESSION['username'];
  $stmt = $conn->prepare("SELECT * FROM `keronscribe_users` WHERE `username` = ?");
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $result = $stmt->get_result();
  if($result->num_rows > 0){
    $row = $result->fetch_assoc();
    $user_id = $row['user_id'];
    $nickname = $row['nickname'];
  }
} else {
$nickname = "";
}
?>
