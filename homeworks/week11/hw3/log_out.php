<?php
require_once('conn.php');
setcookie("id", "", time()+300);
header('location:index.php');
?>
