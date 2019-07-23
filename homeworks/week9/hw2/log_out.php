<?php
require_once('conn.php');
setcookie("nickname", "", time()+300);
setcookie("id", "", time()+300);
header('location:index.php');
?>
