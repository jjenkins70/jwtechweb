<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
  <!-- Optional theme 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">
  -->

  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>

<body>
<div class="container">
  <div class="row">
  <h3>Temperature and Humidity</h3>
  </div>
  <div class="row">
  <table class="table table-striped table-bordered table-hover" data-sort-name="date" data-sort-order="desc">
  <thead>
  <tr>
	<th data-field="date" data-sortable="true">Date</th>
	<th data-field="temp" data-sortable="true">Temperature</th>
	<th data-field="hum" data-sortable="true">Humidity</th>
  </tr>
  </thead>
<tbody>

<?php
   include 'config/db.php';
   $sql = "SELECT date, temp, hum FROM TempHumid order by date desc";
   //$result = $mysqli->query($sql);
   $result = mysql_query($sql);

   while ($row = mysql_fetch_array($result)) {

	echo '<tr>';
	echo '<td>'. $row['date'] . '</td>';
	echo '<td>'. $row['temp'] . '</td>';
	echo '<td>'. $row['hum'] . '</td>';
	//echo '<td>&nbsp;</td>';
	echo '</tr>';
  }

$mysqli = null;
 ?>
  </tbody>
  </table>
  </div><!-- /row -->
</div><!-- /container -->
</body>
</html>
