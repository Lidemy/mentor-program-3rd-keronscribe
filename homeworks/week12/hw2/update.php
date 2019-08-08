<?php
	require_once('conn.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>修改留言</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
	<div class="container">
		<div class="header">
			<div class="title">修改留言</div>
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
								echo $nickname;
							?>
						</div>
					</div>
					<div class="info">修改留言</div>
				</div>
        <?php
        $comment_id = $_GET['comment_id'];
        $sql = "SELECT * FROM `keronscribe_comments` WHERE `comment_id` = '$comment_id'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0)
        $row = $result->fetch_assoc();
         ?>
				<form action="handle_update.php" method="POST">
				      <textarea type="textarea" name="npComment" class="textarea"><?php echo "{$row['content']}" ?></textarea>
				      <input type="submit" name="submit">
              <input type="hidden" name="comment_id" value="<?php echo "$comment_id";?>">
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
   </div>
</body>
</html>
