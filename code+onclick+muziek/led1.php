<?php
$state = $_GET["state"]; // Declares the request from ajax.php as a variable
$locatie1 = $_GET["location"];
$alles = $state.'
    '.$locatie1;
$textfile = "LEDstate.txt";// Declares the name and location of the .txt file

$fileLocation = $textfile;
$fh = fopen($fileLocation, 'w   ') or die("Something went wrong!"); // Opens up the .txt file for writing and replaces any previous content
fwrite($fh, $alles); // Writes it to the .txt file


fclose($fh);


header("Location: hardlopen.html"); // Return to frontend (index.html)


