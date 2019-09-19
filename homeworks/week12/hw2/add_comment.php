<?php
	require_once("get_nickname.php");

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$parent_id = $_POST['data-parentId'];
		$npcomment = $_POST["npComment"];
	 	if ($npcomment !== ''){
			$stmt = $conn->prepare("INSERT INTO `keronscribe_comments`(user_id, content, parent_id) VALUES (?, ?, ?)");
			$stmt->bind_param("ssi", $user_id, $npcomment, $parent_id);
	 		if($stmt->execute()){
	 			echo "<script> alert('新增成功')</script>";
	 			header('location:board.php');
	 		} else {
	 			echo "error $sql <br / >  $conn->error";
	 		}
		} else {
			$commentErr = "Comment is required.";
		}
	}
	$npcomment = "";
?>
