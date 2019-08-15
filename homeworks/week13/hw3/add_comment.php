<?php
session_start();
	require_once("get_nickname.php");
	$npcomment = $_POST['content'];
	$user_id = $_SESSION['user_id'];
	$isChild = false;
	if (isset($_POST['parentId'])) {
		$parent_id = $_POST['parentId'];
		$isChild = true;
	}
	// echo "$parent_id";
	// echo "$npcomment";

	if ($npcomment !== ''){
		if($isChild){
			$stmt = $conn->prepare("INSERT INTO `keronscribe_comments`(user_id, content, parent_id) VALUES (?, ?, ?)");
			$stmt->bind_param("ssi", $user_id, $npcomment, $parent_id);
		} else {
			//echo"isNotChild";
			$stmt = $conn->prepare("INSERT INTO `keronscribe_comments`(user_id, content) VALUES (?, ?)");
			$stmt->bind_param("ss", $user_id, $npcomment);
			//echo"user id = $user_id";
		}
	if($stmt->execute()){
		$sql = "SELECT users.user_id, users.user_id, c.comment_id, c.content, users.nickname, c.created_at 
		FROM keronscribe_comments as c 
		JOIN keronscribe_users as users ON users.user_id = c.user_id ORDER BY `created_at` DESC LIMIT 1";
		$result = $conn->query($sql);
		if ($result->num_rows > 0) {
			$row = $result->fetch_assoc();
			$content = htmlspecialchars($row['content'], ENT_QUOTES, 'utf-8');
			$the_nickname = htmlspecialchars($row['nickname'], ENT_QUOTES, 'utf-8');
			$time = htmlspecialchars($row['created_at'], ENT_QUOTES, 'utf-8');
			$content_id = htmlspecialchars($row['comment_id'], ENT_QUOTES, 'utf-8');
			$user_id = htmlspecialchars($row['user_id'], ENT_QUOTES, 'utf-8');
		}	echo json_encode(array(
		'content' => $npcomment,
		'nickname' => $the_nickname,
		'time' => $time,
		'content_id' => $content_id,
		'user_id' =>$user_id,
			));
} else {
		echo "error $stmt <br / >  $conn->error";
	} 
} else {
		$commentErr = "Comment is required.";
}
?>
