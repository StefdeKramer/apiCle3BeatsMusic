<?php

$title = "JE moeder";
$subTitle = "Is een zeer lief persoon";
$text = "Ik meen het echt";
$color = "blue";

$returnData =
    [
        "title" => $title,
        "subTitle" => $subTitle,
        "text" => $text,
        "color" => $color
    ];

header("Content-type: application/json");
echo json_encode($returnData);