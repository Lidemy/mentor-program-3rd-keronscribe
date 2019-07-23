<?php
	require('conn.php');
	require('get_nickname.php');
	$sql = 'SELECT keronscribe_comments.comment_id, keronscribe_comments.content, keronscribe_users.nickname, keronscribe_comments.created_at FROM keronscribe_comments JOIN keronscribe_users ON keronscribe_users.user_id = keronscribe_comments.user_id ORDER BY `created_at` DESC LIMIT 50';
	$result = $conn->query($sql);
	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			echo "<div class=\"single__post\">
				<div class=\"opWriter\">
					name: {$row['nickname']} </br>
				</div>
				<div class=\"opContent\">
					content: {$row['content']} </br>
				</div>
				<div>
					time: {$row['created_at']} </br>
				</div>
			</div>";
		}
	} else {
		echo '0 result.';
	}
?>
