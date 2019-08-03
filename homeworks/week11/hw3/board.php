<?php
	require_once('conn.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>Cian's 留言板</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
	<?php
	if(!isset($_COOKIE["id"])) {
	$message = "請登入或註冊:)";
	echo "<script type='text/javascript'>alert('$message');location.href = 'index.php'</script>";
} else {
	$certificate_id = trim($_COOKIE["certificate_id"]);
	$sql = "SELECT * FROM `keronscribe_users_certificate` WHERE `id` = '$certificate_id'";
	$result = $conn->query($sql);
	if(!($result->num_rows > 0)){
		$message = "請重新登入或註冊:)";
		echo "<script type='text/javascript'>alert('$message');location.href = 'index.php'</script>";
	}
}
	;
	?>
	<div class="container">
		<div class="header">
			<div class="title">來留言吧</div>
			<div class="notice">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</div>
		</div>
		<div class="new__post">
			<div class="wrapper">
				<div class="np__by">
					<div class="member__info">
						<div class="pic"></div>
						<div class="member__nickname">
							<?php
								require_once('get_nickname.php');
								echo "$nickname";
							?>
						</div>
					</div>
					<div class="info">我要留言</div>
				</div>
				<form action="add_comment.php" method="POST">
				<textarea type="textarea" name="npComment" placeholder="留言" class="textarea"></textarea>
				<input type="submit" name="submit">
			 	</form>
			 <div> <a href="log_out.php">我要登出</a></div>
			</div>
		</div>

		<?php
		if(isset($_POST['submit'])){
			setcookie("tempcookie","",time()+30);
			header("Location:board.php");
			exit();
		}
		if(isset($_COOKIE["tempcookie"])){
			setcookie("tempcookie","");
			echo "<script>alert ('您已經提交過表單')</script>";
		}
		?>

		<div class="op__wrapper">
			<h1 class="info">舊貼文</h1>
			<?php
				require_once('get_comment.php');
			?>
		</div>
		<div class="page__mark">
			<?php
			for ($i = 0; $i < $pages; $i += 1) {
				$page_num = $i+1;
				echo "<a href=\"board.php?page=$i\" class=\"page__item\">$page_num</a>";
			}
			?>
		</div>
	</div>
</body>
</html>
