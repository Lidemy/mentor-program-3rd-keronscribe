<?php
	require_once("get_nickname.php");
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$npcomment = trim(mysqli_real_escape_string($conn, $_POST["npComment"]));
		echo $npcomment;
	 	if ($npcomment !== ''){
			$sql = "INSERT INTO `keronscribe_comments`(comment_id, user_id, created_at, content) VALUES (NULL,'$user_id', CURRENT_TIMESTAMP,('$npcomment'))";
	 		if($conn->query($sql)){
	 			echo "<script> alert('新增成功')";
	 			header('location:board.php');
	 		} else {
	 			echo "error $sql <br / >  $conn->error";
	 		}
		} else {
			$commentErr = "Comment is required.";
			echo "<script> alert('$commentErr');location='board.php'</script>";
		}
	}
	$npcomment = "";
?>
