<?php
	require('conn.php');
	require('get_nickname.php');
	$sql = "SELECT count(*) FROM keronscribe_comments";
	$result = $conn->query($sql);
	$row = $result->fetch_assoc();
	$amount = $row['count(*)'];
	$per_page = 20;
	$pages = ceil($amount / $per_page);
	if (isset($_GET['page'])){
		if (is_numeric($_GET['page']) AND (($_GET['page']) < $pages)) {
			$the_page = $_GET['page'];
		} else {
			$the_page = 0;
		}
	} else {
		$the_page = 0;
	}
	$start = $the_page * $per_page;
	$sql = "SELECT keronscribe_users.user_id, keronscribe_users.user_id, keronscribe_comments.comment_id, keronscribe_comments.content, keronscribe_users.nickname, keronscribe_comments.created_at FROM keronscribe_comments JOIN keronscribe_users ON keronscribe_users.user_id = keronscribe_comments.user_id ORDER BY `created_at` DESC LIMIT $start, $per_page";
	$result = $conn->query($sql);
	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			$content = trim(mysqli_real_escape_string($conn, $row['content']));
			$the_nickname = trim(mysqli_real_escape_string($conn, $row['nickname']));
			$time = trim(mysqli_real_escape_string($conn, $row['created_at']));
			if (($nickname) == ($row['nickname'])){
				echo "<div class=\"single__post\">
					<div class=\"opWriter\">
						name: $the_nickname </br>
					</div>
					<div class=\"opContent\">content:</br><pre>$content</pre>
					</div>
					<div>
						time: $time </br>
					</div>
					<a href=\"update.php?comment_id={$row['comment_id']}\">修改留言</a> <a href=\"handle_delete.php?comment_id={$row['comment_id']}\">刪除留言</a>
				</div>";
			} else {
				echo "<div class=\"single__post\">
					<div class=\"opWriter\">
						name: $the_nickname </br>
					</div>
					<div class=\"opContent\">content:</br><p>$content</p>
					</div>
					<div>
						time: $time </br>
					</div>
				</div>";
			}
		}
	} else {
		echo '0 result.';
	}
?>
