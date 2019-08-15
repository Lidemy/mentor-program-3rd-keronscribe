<?php
require_once('conn.php');
require_once('get_nickname.php');
require_once('is_login.php');

$sql = "SELECT count(*) FROM keronscribe_comments W";
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
WHERE parent_id is null ORDER BY `created_at` DESC LIMIT $start, $per_page";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		$content = htmlspecialchars($row['content'], ENT_QUOTES, 'utf-8');
		$the_nickname = htmlspecialchars($row['nickname'], ENT_QUOTES, 'utf-8');
		$time = htmlspecialchars($row['created_at'], ENT_QUOTES, 'utf-8');
		$content_id = htmlspecialchars($row['comment_id'], ENT_QUOTES, 'utf-8');
		$user_id = htmlspecialchars($row['user_id'], ENT_QUOTES, 'utf-8');
		echo "<div class=\"card single__post $content_id\">
      <div class=\"card-header\">
			$the_nickname
      </div>
      <div class=\"card-body\">
        <blockquote class=\"blockquote mb-0\">
				<pre>$content</pre>
          <footer class=\"blockquote-footer\">$time</footer>
				</blockquote>";
				if($nickname){
					if (($nickname) == ($row['nickname'])) {
						echo "
						<div class=\"option\">
							<button type=\"button\" class=\"btn btn-link btn-modify\" data_id=\"$content_id\">
							修改留言
							</button>
							<button class=\"btn btn-link btn-delete\" data_id=\"$content_id\">
							刪除留言
							</button>
						<button type=\"button\" class=\"btn btn-outline-primary re\" data_parent=\"$content_id\">我要回應</button>";
					} else {
						echo "<div class=\"option\"><button type=\"button\" class=\"btn btn-outline-primary re\" data_parent=\"$content_id\">我要回應</button>";
					};
			echo "</div>";}
		?>
				<?php
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
				$child_comment_id = htmlspecialchars($row['comment_id'], ENT_QUOTES, 'utf-8');
				echo "<div class=\"card child $child_comment_id";
				if ($child_id === $user_id){
					echo " same_user";
				}
				echo "\">
				<div class=\"card-header\">
					$child_nickname
				</div>
				<div class=\"card-body\"> <blockquote class=\"blockquote mb-0\"><pre>$content</pre><footer class=\"blockquote-footer\">$time</footer></blockquote>
				</div>";
				if($nickname){
					if (($nickname) == ($row['nickname'])) {
						echo "
						<div class=\"option\">
							<button type=\"button\" class=\"btn btn-link btn-modify\" data_id=\"$child_comment_id\">
							修改留言
							</button>
							<button class=\"btn btn-link btn-delete\" data_id=\"$child_comment_id\">
							刪除留言
							</button></div>";
						}
				}
				echo "</div>";
			}
		} 
		 echo "</div>
		 </div>";
	}
} else {
	die('fail');
}
