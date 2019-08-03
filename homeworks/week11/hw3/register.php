<!DOCTYPE html>
<html>
<head>
	<title>註冊 Cian 的留言板</title>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
	<div class="continer">
		<div class="header">
				<div class="title">歡迎來到 Cian 的留言板</div>
				<div class="notice">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</div>
		</div>
		<div class="sub__header">
			<div class="notice">請註冊</div>
		</div>
		<div class="main">
			<div class="register__form">
				<form action="handle_register.php" method="POST">
					<div>
						帳號：<input type="text" name="username">
					</div>
					<div>
						密碼：<input type="password" name="password">
					</div>
					<div>
						暱稱：<input type="text" name="nickname">
					</div>
					<input type="submit" value="註冊" class="btn__input">
				</form>
			</div>
			<a class="a" href="login.php">前往登入</a>
		</div>
	</div>
</body>
</html>
