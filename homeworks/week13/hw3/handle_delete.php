<?php
session_start();
require_once('conn.php');
require_once('get_nickname.php');
$comment_id = $_POST['deleteId'];
$stmt = $conn->prepare("DELETE FROM `keronscribe_comments` WHERE `comment_id`=?");
$stmt->bind_param("i", $comment_id);
if($user_id === ($_SESSION['user_id'])){
  if($stmt->execute()){
    echo "$comment_id";
  }//   header('location:board.php');
}

?>
