<meta charset="utf-8"/>
<?php

error_reporting(E_ALL || ~E_NOTICE);
$con = mysql_connect("localhost","root","");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}
$newstitle=$_POST['newstitle'];
$newsimg=$_POST['newsimg'];
$newstime=$_POST['newstime'];
$newscontent=$_POST['newscontent'];
mysql_select_db("test", $con);
mysql_query("set names 'utf8'");
mysql_query("INSERT INTO phplesson (newstitle, newsimg, newscontent,newstime)VALUES ('".$newstitle."', '".$newsimg."', '".$newscontent."','".$newstime."')");
$result = mysql_query("SELECT * FROM phplesson");
mysql_close($con);
echo'上传数据成功';
?>
