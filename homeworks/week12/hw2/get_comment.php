<?php
require('conn.php');
require('get_nickname.php');
$sql = "SELECT count(*) FROM keronscribe_comments";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$amount = $row['count(*)'];
$per_page = 20;
$pages = ceil($amount / $per_page);
if (isset($_GET['page'])) {
	if (is_numeric($_GET['page']) and (($_GET['page']) < $pages)) {
		$the_page = $_GET['page'];
	} else {
		$the_page = 0;
	}
} else {
	$the_page = 0;
}
$start = $the_page * $per_page;
$sql = "SELECT users.user_id, users.user_id, c.comment_id, c.content, users.nickname, c.created_at 
FROM keronscribe_comments as c 
JOIN keronscribe_users as users ON users.user_id = c.user_id  
WHERE parent_id is null ORDER BY `created_at` DESC LIMIT 0, 20";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		$content = htmlspecialchars($row['content'], ENT_QUOTES, 'utf-8');
		$the_nickname = htmlspecialchars($row['nickname'], ENT_QUOTES, 'utf-8');
		$time = htmlspecialchars($row['created_at'], ENT_QUOTES, 'utf-8');
		$content_id = htmlspecialchars($row['comment_id'], ENT_QUOTES, 'utf-8');
		$user_id = htmlspecialchars($row['user_id'], ENT_QUOTES, 'utf-8');
		echo "<div class=\"single__post\">
					<div class=\"opWriter\">
						name: $the_nickname </br>
					</div>
					<div class=\"opContent\">content:</br><pre>$content</pre>
					</div>
					<div>
						time: $time </br>
					</div>
					<button class=\"re\" data_parent=\"$content_id\">我要回應 </button>";
		if (($nickname) == ($row['nickname'])) {
			echo "<a href=\"update.php?comment_id={$row['comment_id']}\">修改留言</a> <a href=\"handle_delete.php?comment_id={$row['comment_id']}\">刪除留言</a>";
		}
// 篩出這個留言的子留言
		$sql = "SELECT users.user_id, users.user_id, c.comment_id, c.content, users.nickname, c.created_at 
		FROM keronscribe_comments as c 
		JOIN keronscribe_users as users ON users.user_id = c.user_id  
		WHERE parent_id = $content_id ORDER BY `created_at` ASC";
		$child = $conn->query($sql);
		if ($child->num_rows > 0) {
			while ($row = $child->fetch_assoc()) {
				$content = htmlspecialchars($row['content'], ENT_QUOTES, 'utf-8');
				$child_nickname = htmlspecialchars($row['nickname'], ENT_QUOTES, 'utf-8');
				$time = htmlspecialchars($row['created_at'], ENT_QUOTES, 'utf-8');
				$child_id = htmlspecialchars($row['user_id'], ENT_QUOTES, 'utf-8');
				echo "<div class=\"single__post child";
				if ($child_id === $user_id){
					echo " same_user";
				}
				echo "\">
				<div class=\"opWriter\">
					name: $child_nickname </br>
				</div>
				<div class=\"opContent\">content:</br><pre>$content</pre>
				</div>
				<div>
					time: $time </br>
				</div>
				</div>";
			}
		} 
		 echo "</div>";
	}
} else {
	echo '0 result.';
}
