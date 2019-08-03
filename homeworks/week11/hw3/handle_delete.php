<?php
require_once('conn.php');
  $comment_id = $_GET['comment_id'];
  $sql = "DELETE FROM `keronscribe_comments` WHERE `comment_id` = '$comment_id'";
  $result = $conn->query($sql);
  header('location:board.php');
?>
