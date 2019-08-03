<?php
require_once('conn.php');

$username = trim($_POST['username']);
$password = trim($_POST['password']);
$sql = "SELECT * FROM `keronscribe_users` WHERE `username` = '$username'";
//echo "sql = $sql";
echo "$password";

$result = $conn->query($sql);

if ($result->num_rows > 0){
	$row = $result->fetch_assoc();
  $hash = $row['password'];
  if (password_verify($password, $hash)) {
		// 登入成功
		echo "login success";
		$username = $row['username'];
		$sql =  "SELECT * FROM `keronscribe_users_certificate` WHERE `username` = '$username'";
		echo "sql = $sql";
		$result = $conn->query($sql);
		if (!($result->num_rows > 0)){
					/*原本沒有通行證：設一個新的通行證*/
			$random = 32;
			$rand_id = '';
			for ($i=1;$i<=$random;$i=$i+1) {
	    	$ran_type = rand(1,2);
	  		if($ran_type == 1){
	    		$rand_num = rand(65,122);
	    		$resuting = chr($rand_num);
	  		} else {
	    		$resuting = rand(0,9);
	  		}
	  		$rand_id = $rand_id.$resuting;
			}
			$sql = " INSERT INTO `keronscribe_users_certificate`(`id`, `username`) VALUES ('$rand_id','$username')";
			echo "sql = $sql";//沒有進這裡！

			$result = $conn->query($sql);
		} else {
			/*原本有通行證：取出通行證*/
			$row = $result->fetch_assoc();
			$rand_id = $row['id'];
			echo "rand_id = {$row['id']}";
		}
		setcookie("id", "$rand_id", time()+3600*24);
		echo "{$_COOKIE['id']}";
		header('location:board.php');
	} else {
		// 登入失敗
    echo "<h1>Wrong password!</h1>
    <a class=\"a\" href=\"register.php\">前往註冊</a>
    <a class=\"a\" href=\"login.php\">前往登入</a>";
  }
  //echo "<script>location.href='login.php'</script>";
}
?>
