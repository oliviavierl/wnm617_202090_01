<?php


function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      return $conn;
   } catch (PDOException $e) {
      die('{"error":"Connection Error: '.$e->getMessage().'"}');
   }
}

function fetchAll($r) {
   $a = [];
   while($row = $r->fetch(PDO::FETCH_OBJ))
      $a[] = $row;
   return $a;
}

// connection, prepared statement, parameters
function makeQuery($c,$ps,$p,$makeResults=true) {
   try{
      if(count($p)) {
         $stmt = $c->prepare($ps);
         $stmt->execute($p);
      } else {
         $stmt = $c->query($ps);
      }

      $r = $makeResults ? fetchAll($stmt) : [];

      return [
         "result"=>$r
      ];
   } catch (PDOException $e) {
      return ['error'=>'Query Failed: '.$e->getMessage()];
   }
}


function makeStatement($data) {
   $c = makeConn();
   $t = $data->type;
   $p = $data->params;

   switch($t) {

      case "users_all":
         return makeQuery($c,"SELECT * FROM `track_users`",$p);
      case "moods_all":
         return makeQuery($c,"SELECT * FROM `track_moods`",$p);
      case "locations_all":
         return makeQuery($c,"SELECT * FROM `track_locations`",$p);


      case "user_by_id":
         return makeQuery($c,"SELECT * FROM `track_users` WHERE `id`=?",$p);
      case "mood_by_id":
         return makeQuery($c,"SELECT * FROM `track_moods` WHERE `id`=?",$p);
      case "location_by_id":
         return makeQuery($c,"SELECT * FROM `track_locations` WHERE `id`=?",$p);


      case "moods_by_user_id":
         return makeQuery($c,"SELECT * FROM `track_moods` WHERE `user_id`=?",$p);
      case "locations_by_mood_id":
         return makeQuery($c,"SELECT * FROM `track_locations` WHERE `mood_id`=?",$p);


      case "check_signin":
         return makeQuery($c,"SELECT * FROM `track_users` WHERE `username`=? AND `password`=md5(?)",$p);

      case "recent_locations":
         return makeQuery($c,"SELECT *
            FROM `track_animals` a
            RIGHT JOIN (
               SELECT * FROM `track_locations`
               ORDER BY `date_create` DESC
            ) l
            ON a.id = l.animal_id
            WHERE a.user_id=?
            GROUP BY l.animal_id
            ",$p);



      default: return ["error"=>"No Matched Type"];
   }
}



$data = json_decode(file_get_contents("php://input"));

echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);


// echo json_encode(
   // makeQuery(makeConn(),"SELECT * FROM track_users",[]),
   // JSON_NUMERIC_CHECK
// );