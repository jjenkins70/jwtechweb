<?php
include "config/database.php";
// Create Connection
//$mysqli = new mysqli($servername,$username,$password,$dbname);
// Check connection
//if (mysqli_connect_error()) {
//  die("connection failed: ". mysqli_connect_error());
//}

$sql = "SELECT date, temp, hum from TempHumid order by date desc";
$result = $mysqli->query($sql);


if ($result->num_rows > 0) {
    echo "<table><tr><th>Date</th><th>Tempature</th><th>Humidity</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["date"]."</td><td>".$row["temp"]."</td><td>".$row["hum"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$mysqli->close();
?>

