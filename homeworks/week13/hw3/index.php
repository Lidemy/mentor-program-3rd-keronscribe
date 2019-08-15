<?php session_start()?>
<!DOCTYPE html>
<html lang="zh" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Cian's 留言板</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="index.css">
	</head>
	<body>
	<nav class="navbar navbar-dark bg-primary">
		<div class="navbar-brand">Cian's 留言板</div>
		<!-- 登入註冊	-->
		<?php
		require_once('conn.php');
		$islogin = false;
	if(isset($_SESSION['username']) AND (!empty($_SESSION['username']))){
		// $certificate_id = $_SESSION["id"];
		// $stmt = $conn->prepare("SELECT * FROM `keronscribe_users_certificate` WHERE `id` = ?");
		// $stmt->bind_param("s", $certificate_id);
		// if($stmt->execute());
		// $result = $stmt->get_result();
		// if($result->num_rows > 0){
			$islogin = true;
			$userId = $_SESSION['username'];
		// } 
	}
		/*確認是否已登入*/
	if($islogin){
		echo "<ul class=\"navbar-nav mt-2 mt-lg-0\">
		<li class=\"nav-item\">
			<a class=\"nav-link\" href=\"log_out.php\">登出</a>
		</li>
	</ul>
	</nav>";
	} else {
		echo "<ul class=\"navbar-nav mt-2 mt-lg-0\">
		<li class=\"nav-item\">
			<a class=\"nav-link\" href=\"login.php\">登入</a>
		</li>
		<li class=\"nav-item\">
			<a class=\"nav-link\" href=\"register.php\">註冊</a>
		</li>
	</ul>
	</nav>";
	}
?>
		<nav class="navbar navbar-dark bg-dark">
			<div class="notice">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</div>
		</nav>
<div class="container">
<?php	
		$current_page = 0;
		if (isset($_GET['page'])){
		$current_page = $_GET['page'];
		}
if($islogin AND ($current_page == 0)){
	echo "
	<div class=\"container\">
	<div class=\"card\">
  <div class=\"card-header\">";
	require_once('get_nickname.php');
	echo "$nickname
  </div>
  <div class=\"card-body\">
		<h5 class=\"card-title\">我要留言</h5>
		<form>
				<textarea name=\"npComment\" placeholder=\"我要留言\" class=\"card-text np\"></textarea>
				<button type=\"button\" class=\"btn btn-primary btn-sent-comment\">送出留言</button>
		</form>
  </div>
</div>";
}

?>

<div class="container">
	<h1>先前的留言</h1>
<?php
				require_once('get_comment.php');
	?>
</div>
<nav aria-label="Page navigation example page__mark">
  <ul class="pagination">
			<?php
			$prev = $current_page - 1;
			$next = $current_page+1;
			if($prev > 0){
				echo "<li class=\"page-item\"><a class=\"page-link\" href=\"index.php?page=$prev\">Previous</a></li>";
			}
			for ($i = 0; $i < $pages; $i += 1) {
				$page_num = $i+1;
				echo "<li class=\"page-item\"><a class=\"page-link\" href=\"index.php?page=$i\">$page_num</a>";
			}
			echo "<li class=\"page-item\"><a class=\"page-link\" href=\"index.php?page=$next\">Next</a></li>";
			?>
</ul>
		</nav>
		</div>
		<script src='https://code.jquery.com/jquery-3.4.1.min.js'></script>
		<script src="index.js"></script>
	</body>
</html>
