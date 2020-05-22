<?php
header("Content-type:text/html;charset=utf8");
    $x=5; // 全局作用域
    function myTest() {
       $y=10; // 局部作用域
       echo "<p>在函数内部测试变量：</p>";
       echo "变量 x 是：$x"; //空
       echo "<br>";
       echo "变量 y 是：$y"; //输出10
    }
    myTest();
    echo "<p>在函数之外测试变量：</p>";
    echo "变量 x 是：$x"; //输出5
    echo "<br>";
    echo "变量 y 是：$y"; //空
?>