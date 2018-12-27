<?php
require_once("init.php");
$nid=$_REQUEST["nid"];
$reg='/^[0-9]{1,}$/';
$rs=preg_match($reg,$nid);
if(!$rs){
    die('格式错误');
}
$sql="SELECT nid,ntitle,ndetail FROM news WHERE nid=$nid";
$res=mysqli_query($conn,$sql);
$msg=mysqli_fetch_assoc($res);
//var_dump($res);
echo json_encode($msg);