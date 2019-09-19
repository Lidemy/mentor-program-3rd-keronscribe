<?php 
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PATCH,DELETE,PUT");
header("Access-Control-Allow-Origin: *");
require_once("conn.php");

// HTTP method 為 GET 時 
function get(){
  global $conn; // 全局变量在函数中使用时必须声明为 global。
	if(isset($_GET["id"])){
    $id = $_GET["id"];
    get_single_todo($id);
	} else {
		get_todos();
	}
}

// 取得所有 todo
function get_todos(){
	global $conn;
	$sql = "SELECT * FROM `todos` where is_deleted = 0";
	$result = $conn->query($sql);
			if($result->num_rows > 0){
				$arr = [];
				while ($row = $result->fetch_assoc()) {
				$todo = htmlspecialchars($row['todo'], ENT_QUOTES, 'utf-8');
				$id = $row['id'];
				$done = $row['done'];
				$new_item = (object)[
					'id' => $id,
					'todo' => $todo,
					'done' => $done,
				];
				array_push($arr, $new_item);
		}
		echo json_encode($arr);
	}
}

// 取得單一 todo 
function get_single_todo($id){
  global $conn;
	if(is_numeric($id)){
    $sql = "SELECT * FROM `todos` where id = ? and is_deleted = 0";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    if($stmt->execute()){
      $result = $stmt->get_result();
      $row = $result->fetch_assoc();
      if($row){
        $todo = htmlspecialchars($row['todo'], ENT_QUOTES, 'utf-8');
        $id = $row['id'];
        $done = $row['done'];
          $the_todo = array(
            'id' => $id,
            'todo' => $todo,
            'done' => $done,
          );
        echo json_encode($the_todo);
      } else {
        $error = array(
          "error" => "Todo not found",
        );
        echo json_encode($error);
      }
    }
	  else{
		  echo "error";
	  }		
  }
}

// 新增 TODOS
function add_todos(){
	global $conn;
  $new_todo = $_GET['newTodo'];
  $sql = "INSERT INTO `todos`(`todo`) VALUES (?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $new_todo);
  if($stmt->execute()){
		$newId = $stmt->insert_id;
		$new_todo = htmlspecialchars($new_todo);
    echo json_encode(array(
        'id' => $newId,
        'todo' => $new_todo,
        'done' => 0,
      )
    );
  }
}
// 刪除 todo
function delete_todo(){
  global $conn;
  $id = htmlspecialchars($_GET['deleteId']);
  $sql = "UPDATE `todos` SET `is_deleted`=1 WHERE `id` = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("i",$id);
  if($stmt->execute()){
    $result = array(
      'request' => 'success',
      'deleted_id'=> "$id",
    );
    echo json_encode($result);
  } else {
      $result = array(
      'request' => 'failed',
    );
  };	
}

function update_todo(){
  $id = htmlspecialchars($_GET['updateId']);
  $done = htmlspecialchars($_GET['done']);
  global $conn;
  $sql = "UPDATE `todos` SET `done`=? WHERE `id` = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ii",$done,$id);
  if($stmt->execute()){
    $result = array(
      'request' => 'success',
      'update_id'=> "$id",
      'is_done'=>"$done",
    );
    echo json_encode($result);
  } else {
      $result = array(
      'request' => 'failed',
    );
  };	
}

// 用 switch 來對 HTTP method 進行判斷
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "POST": // 新增
    add_todos();
    break;
	case 'GET': // 讀取
    get();
    break;
  case "DELETE": //刪除
    delete_todo();
    break;
  case "PATCH": // 更新
    update_todo();
    break;
}
?>