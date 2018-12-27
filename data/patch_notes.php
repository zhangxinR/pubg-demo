<?php
require_once("init.php");
$sql="SELECT pid,pimg,purl,ptitle,pdc FROM patch_notes";
$res=mysqli_query($conn,$sql);
$result=mysqli_fetch_all($res,1);
//var_dump($result);
echo json_encode($result);