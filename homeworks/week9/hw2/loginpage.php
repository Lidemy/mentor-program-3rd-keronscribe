<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
	<div class="continer">
		<div class="header">
				<div class="title">歡迎來到 Cian 的留言板</div>
				<div class="notice">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</div>
		</div>
		<div class="sub__header">
			<div class="notice">請登入</div>
		</div>
		<div class="main">
			<div class="login__form">
				<form action="login.php" method="POST">
					<div>
						帳號：<input type="text" name="username">
					</div>
					<div>
						密碼：<input type="password" name="password">
					</div>
					<input type="submit" value="登入" class="btn__input">
				</form>
			</div>
			<a class="a" href="registerpage.php">前往註冊</a>
		</div>
	</div>
</body>
</html>
