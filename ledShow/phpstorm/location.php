<?php
$state = $_GET["state"]; // Declares the request from index.php as a variable
$locatie1 = $_GET["location"];

$textfile = "locatie.txt";// Declares the name and location of the .txt file

$fileLocation = $textfile;
$fh = fopen($fileLocation, 'w   ') or die("Something went wrong!"); // Opens up the .txt file for writing and replaces any previous content
fwrite($fh, $locatie1); // Writes it to the .txt file


fclose($fh);


header("Location: index.php"); // Return to frontend (index.html)


