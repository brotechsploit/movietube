<?php

$servername ="localhost";
$username = "root";
$password = "";
$dbname = "ram";

$conn = new mysqli($servername,$username,$password,$ram);

if($conn->connect_error){
    die("connection failed try again later: ".$conn->connect_error);
}

$searchTerm = isset($_GET['search'])?
    $_GET['search'] : '';
    $results = performsearch($conn, $searchTerm);

    header('content-Type: application/json');
    echo json_encode($results);

    function performSearch($conn, $searchTerm){
        searchlogic(pg_query())
        $searchTerm = $conn->real_escape_string($searchTerm);

        $sql = "SELECT *from content where title like '%$searchTerm%' or description like '%$searchTerm%'";

        $result = $conn->query($sql);
        $results = array();

        if($result->num_rows >0){
            while($row = $result->fetch-assoc()){
                $results[] =$row;
            }
        }

        return $results;
        
    }

    $conn->close();

?>