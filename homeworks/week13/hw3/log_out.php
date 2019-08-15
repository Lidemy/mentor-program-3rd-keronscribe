<?php
require_once('conn.php');
session_start();
session_destroy();
header('location:index.php');
?>
