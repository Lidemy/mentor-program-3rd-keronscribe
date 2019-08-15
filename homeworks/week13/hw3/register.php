<!DOCTYPE html>
<html>
<head>
<title>註冊 Cian's 留言板</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>

<nav class="navbar navbar-dark bg-primary">
	<div class="navbar-brand">Cian's 留言板</div>
	<ul class="navbar-nav mt-2 mt-lg-0">
		<li class="nav-item">
			<a class="nav-link" href="login.php">登入</a>
		</li>
	</ul>
</nav>
<nav class="navbar navbar-dark bg-dark">
<div class="notice">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</div>
</nav>
<div class="container">
	<div class="card">
		<div class="card-header">我要註冊</div>
			<div class="card-body">
				<div class="register__form">
					<form action="handle_register.php" method="POST">
						<div class="form-group">
							<div>
								帳號：<input type="text" name="username" class="form-control">
							</div>
							<div>
								密碼：<input type="password" name="password" class="form-control">
							</div>
							<div>
								暱稱：<input type="text" name="nickname" class="form-control">
							</div>
						</div>
						<input type="submit" value="註冊" class="btn__input">
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
