<?php


function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(
         PDO::ATTR_ERRMODE,
         PDO::ERRMODE_EXCEPTION
      );
   } catch(PDOException $e) {
      die('{"error":"'.$e->getMessage().'"}');
   }
   return $conn;
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
         return makeQuery($c,"SELECT id,name,username,email,quote,img,favorite,date_create FROM `track_users` WHERE `id`=?",$p);
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
            FROM `track_moods` a
            RIGHT JOIN (
               SELECT * FROM `track_locations`
               ORDER BY `date_create` DESC
            ) l
            ON a.id = l.mood_id
            WHERE a.user_id=?
            GROUP BY l.mood_id
            ",$p);


/* ----- CRUD ------ */

      // INSERTS

      case "insert_user":

         // Check for duplicate users
         $r = makeQuery("SELECT * FROM `track_users` WHERE `username`=? OR `email`=?",[$p[0],$p[1]]);
         if(count($r['result'])) return ["error"=>"Username or Email already exists"];

         // Create new user
         $r = makeQuery($c,"INSERT INTO
            `track_users`
            (`username`,`email`,`quote`,`password`,`img`,`favorite`,`date_create`)
            VALUES
            (?, ?, ?, md5(?), 'https://via.placeholder.com/400?text=USER', ?, NOW())
            ",$p);
         return ["id"=>$c->lastInsertId()];


      case "insert_mood":
         $r = makeQuery($c,"INSERT INTO
            `track_moods`
            (`user_id`,`name`,`date`,`address`,`title`,`img`,`description`,`date_create`)
            VALUES
            (?, ?, ?, ?, ?, 'https://via.placeholder.com/400?text=MOOD', ?, NOW())
            ",$p);
         return ["id"=>$c->lastInsertId()];


      case "insert_location":
         $r = makeQuery($c,"INSERT INTO
            `track_locations`
            (`mood_id`,`lat`,`lng`,`description`,`photo`,`icon`,`date_create`)
            VALUES
            (?, ?, ?, ?, 'https://via.placeholder.com/400?text=Photo', 'https://via.placeholder.com/100?text=Icon', NOW())
            ",$p);
         return [
            "r"=>$r,
            "p"=>$p,
            "id"=>$c->lastInsertId()];



      // UPDATE

      case "update_user":
         $r = makeQuery($c,"UPDATE
            `track_users`
            SET
            `username` = ?,
            `name` = ?,
            `email` = ?
            `quote` = ?
            `favorite` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

      case "update_mood":
         $r = makeQuery($c,"UPDATE
            `track_moods`
            SET
            `name` = ?,
            `title` = ?,
            `adderss` = ?,
            `description` = ?
            WHERE `id`=?
             ",$p,false);
         return ["result"=>"success"];

      // DELETE


      case "delete_mood":
         return makeQuery($c,"DELETE FROM `track_moods` WHERE `id`=?",$p,false);

      case "delete_location":
         return makeQuery($c,"DELETE FROM `track_locations` WHERE `id`=?",$p,false);


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