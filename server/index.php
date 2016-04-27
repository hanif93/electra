<?php

require "vendor/autoload.php";

$app = new Horus;
$app->autoload("classes");

// $app->on("", function() {});
$app->on("/", function() {

    $this->end("Hello world", 200);

});

/*get all users*/

$app->on("GET /users", function() {

    $dbh = db::connect();
    $sql = "SELECT * from users";

    $query = $dbh->prepare($sql);
    $query->execute();

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    $this->json($result)->end();

});

/*fetch username and password*/

$app->on("POST /login", function() {

    // $this->json($this->body); exit;

    if (!$this->body->username && !$this->body->password) {
        $this->json(["message"=> "Failed to login"])->end();
    }

    $dbh = db::connect();
    $sql = "SELECT * from users WHERE username=:username AND password=:password";
    $param = [
        ":username"=> $this->body->username,
        ":password"=> $this->body->password,
    ];

    $query = $dbh->prepare($sql);
    $query->execute($param);

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    if($result) {
        $this->json($result)->end();
    } else {
         $this->json(["message"=> "Wrong username/password"])->end();
    }
});


/*create devices*/

$app->on("POST /devices", function() {

    $dbh = db::connect();
    $sql = "INSERT INTO devices(name,description) VALUES (:name,:description)";
    $param1 = [
        ":name"=> $this->body->name,
        ":description"=> $this->body->descrption,
    ];

    $query = $dbh->prepare($sql);
    $query->execute($param1);

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    $this->json($result)->end();

});

/*update devices*/

$app->on("PUT /devices", function() {

    $dbh = db::connect();
    $sql = "UPDATE devices SET status=:status WHERE id=:id";
    $param1 = [
        ":status"=> $this->body->status,
        ":id"=> $this->body->id,
    ];

    $query = $dbh->prepare($sql);
    $query->execute($param1);

    $result = $query->fetch(PDO::FETCH_ASSOC);

    $this->json($result)->end();

});



/*get devices*/
$app->on("GET /devices", function() {

    $dbh = db::connect();
    $sql = "SELECT * from devices";

    $query = $dbh->prepare($sql);
    $query->execute();

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    $this->json($result)->end();

});


