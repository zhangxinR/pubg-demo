<?php
#项目的初始化文件
#编写所有其他页面都需要用到的公共代码
header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_connect('127.0.0.1','root','','pubg',3306);

mysqli_query($conn,"SET NAMES UTF8"); 
?>