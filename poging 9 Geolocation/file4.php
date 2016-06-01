<?php
/**
 * Created by PhpStorm.
 * User: Rik
 * Date: 8-4-2016
 * Time: 10:06
 */
$file = fopen("test.txt","w");
fwrite($file, 4);
fclose($file);
