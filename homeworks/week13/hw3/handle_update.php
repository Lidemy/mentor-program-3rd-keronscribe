<?php
	require_once('conn.php');
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$npcomment = $_POST["npComment"];
		$comment_id = $_POST["comment_id"];
		echo "comment_id = $comment_id";
	 	if ($npcomment !== ''){
			$stmt = $conn->prepare("UPDATE `keronscribe_comments` SET `content`=? WHERE `comment_id` = ?");
			$stmt->bind_param("si", $npcomment, $comment_id);
	 		if($stmt->execute()){
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
