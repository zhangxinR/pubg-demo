<?php
require_once("init.php");
$ntype=$_REQUEST["ntype"];
$reg='/^[a-zA-Z]{1,}$/';
$rs=preg_match($reg,$ntype);
if(!$rs){
    die('格式错误');
}
if($ntype=="synthesis"){
    $sql="SELECT nid,ntitle,ntype,ntime FROM news ORDER BY ntime DESC LIMIT 0,10";
    $res=mysqli_query($conn,$sql);
    $msg=mysqli_fetch_all($res,1);
    //var_dump($res);
    echo json_encode($msg);
}else{
    $sql="SELECT nid,ntitle,ntype,ntime FROM news WHERE ntype='$ntype' ORDER BY ntime DESC LIMIT 0,10";
    $res=mysqli_query($conn,$sql);
    $msg=mysqli_fetch_all($res,1);
    //var_dump($res);
    echo json_encode($msg);
}
