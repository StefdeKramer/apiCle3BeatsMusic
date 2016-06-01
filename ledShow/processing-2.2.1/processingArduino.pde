 import processing.serial.*;
 Serial port;
 
 void setup()  {
 
}
 void draw() {
 
  String onoroff[] = loadStrings("C:/xampp/htdocs/school/blok3/CLE3/ledShow/LEDstate.txt"); // Insert the location of your .txt file
  String location1[] = loadStrings("C:/xampp/htdocs/school/blok3/CLE3/ledShow/location1.txt"); 
  String location2[] = loadStrings("C:/xampp/htdocs/school/blok3/CLE3/ledShow/location2.txt"); 
  
  
  print(onoroff[0]);  // Prints whatever is in the file 
  print(onoroff[1]);
 
  if (onoroff[0].equals("1") == true) {
    println(" - 100 bpm");
    port.write('1'); // Send "1" over serial to set LED to 100BPM
//    delay(500);
 
  } 
  else if (onoroff[0].equals("2") == true) {
 
    println(" - 150 bpm");
    port.write('2');  // Send "2" over serial to set LED to 150BPM
//    delay(500);
 }
   else if (onoroff[0].equals("3") == true){
 
    println(" - 200");
    port.write('3');  // Send "3" over serial to set LED to 200BPM
//    delay(500);
 }
 
   delay(2000); // Set your desired interval here, in milliseconds
 }
