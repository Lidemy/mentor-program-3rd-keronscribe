<?php
// TODO 複習週要修
require_once('conn.php');
$comment_id = $_GET['comment_id'];
$stmt = $conn->prepare("DELETE FROM `keronscribe_comments` WHERE `comment_id`=?");
$stmt->bind_param("i", $comment_id);
$stmt->execute();
  header('location:board.php');
?>
