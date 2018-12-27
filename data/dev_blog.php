<?php
require_once("init.php");
$sql="SELECT did,dimg,durl,dtitle,ddc FROM dev_blog";
$res=mysqli_query($conn,$sql);
$result=mysqli_fetch_all($res,1);
//var_dump($result);
echo json_encode($result);