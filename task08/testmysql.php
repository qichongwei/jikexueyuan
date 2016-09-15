<?php
error_reporting(E_ALL || ~E_NOTICE);
$link = mysql_connect('localhost', 'root', '');
if (!$link) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db("test", $link);
mysql_query("set names 'utf8'");
$result = mysql_query("SELECT * FROM phplesson");
$arr=array();
while($row = mysql_fetch_array($result))
{
	array_push($arr,array('newstitle'=>$row['newstitle'],'newsimg'=>$row['newsimg'],'newscontent'=>$row['newscontent'],'newstime'=>$row['newstime']));
}
echo json_encode($arr, JSON_UNESCAPED_UNICODE);
mysqli_close($link);
?>