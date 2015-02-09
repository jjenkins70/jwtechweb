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
  <h3>MAX values Temperature and Humidity - Past 24 hours</h3>
  </div>
  <div class="table-responsive">
  <table id="dataResults" class="table table-striped table-bordered table-hover" data-sort-name="date" data-sort-order="desc">
  <thead>
  <tr>
<!--	<th class="col-sm-2" data-field="date" data-sortable="true">Date (ET)</th> -->
	<th class="col-sm-2" data-field="temp" data-sortable="true">Temperature (F)</th>
	<th class="col-sm-2" data-field="hum" data-sortable="true">Humidity</th>
  </tr>
  </thead>
<tbody>

<?php
   include 'config/db.php';
   //$sql = "SELECT convert_tz(date,'UTC','EST') as date, MAX(format(temp,2)), MAX(format(hum,2)) FROM TempHumid where date >= now() - INTERVAL 1 day";
   $sql = "SELECT MAX(format(temp,2)), MAX(format(hum,2)) FROM TempHumid where date >= now() - INTERVAL 1 day";
   //$result = $mysqli->query($sql);
   $result = mysql_query($sql);

   while ($row = mysql_fetch_array($result)) {

	echo '<tr>';
	//echo '<td>'. $row['date'] . '</td>';
	echo '<td>'. $row['MAX(format(temp,2))'] . '</td>';
	echo '<td>'. $row['MAX(format(hum,2))'] . '</td>';
	//echo '<td>&nbsp;</td>';
	echo '</tr>';
  }

$mysqli = null;
 ?>
  </tbody>
  </table>
  </div><!-- /row -->
</div><!-- /container -->
<div class="container">
  <div class="row">
  <h3>MIN values Temperature and Humidity - Past 24 hours</h3>
  </div>
  <div class="table-responsive">
  <table id="dataResults" class="table table-striped table-bordered table-hover" data-sort-name="date" data-sort-order="desc">
  <thead>
  <tr>
	<!--<th class="col-sm-2" data-field="date" data-sortable="true">Date (ET)</th> -->
	<th class="col-sm-2" data-field="temp" data-sortable="true">Temperature (F)</th>
	<th class="col-sm-2" data-field="hum" data-sortable="true">Humidity</th>
  </tr>
  </thead>
<tbody>

<?php
   include 'config/db.php';
   //$sql = "SELECT convert_tz(date,'UTC','EST') as date, MIN(format(temp,2)), MIN(format(hum,2)) FROM TempHumid where date >= now() - INTERVAL 1 day";
   $sql = "SELECT MIN(format(temp,2)), MIN(format(hum,2)) FROM TempHumid where date >= now() - INTERVAL 1 day";
   //$result = $mysqli->query($sql);
   $result = mysql_query($sql);

   while ($row = mysql_fetch_array($result)) {

	echo '<tr>';
	//echo '<td>'. $row['date'] . '</td>';
	echo '<td>'. $row['MIN(format(temp,2))'] . '</td>';
	echo '<td>'. $row['MIN(format(hum,2))'] . '</td>';
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
