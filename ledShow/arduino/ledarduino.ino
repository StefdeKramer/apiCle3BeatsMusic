const int ledPin1 = 13; // the pin that the LED is attached to - change this if you have a separate LED connected to another pin
const int ledPin2 = 12;
const int ledPin3 = 11;
const int ledPin4 = 10;
int incomingByte;      // a variable to read incoming serial data into
 
void setup() {
  // initialize serial communication:
  Serial.begin(9600);
  // initialize the LED pin as an output:
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
  pinMode(ledPin4, OUTPUT);
}

void loop() {
  // see if there's incoming serial data:
  if (Serial.available() > 0) {
    // read the oldest byte in the serial buffer:
    incomingByte = Serial.read();
    // if it's a capital 1 (ASCII 72), blink the lights on 100BPM:
    digitalWrite(ledPin4, HIGH);
    
    if (incomingByte == '1') {
      for (int i = 0; i < 20; i++){ 
        digitalWrite(ledPin1, HIGH);
        delay(50);
        digitalWrite(ledPin1, LOW);
        delay(50);
      }
      for (int i = 0; i < 20; i++){ 
        digitalWrite(ledPin2, HIGH);
        delay(50);
        digitalWrite(ledPin2, LOW);
        delay(50);
      }
      for (int i = 0; i < 20; i++){ 
        digitalWrite(ledPin3, HIGH);
        delay(50);
        digitalWrite(ledPin3, LOW);
        delay(50);
      }
    }
    
    // if it's a capital 2(ASCII 72), blink the lights on 150BPM:
    else if(incomingByte == '2') {
      for (int i = 0; i < 20; i++){  
        digitalWrite(ledPin1, HIGH);
        delay(400);
        digitalWrite(ledPin1, LOW);
        delay(400);
      }
      for (int i = 0; i < 20; i++){  
        digitalWrite(ledPin2, HIGH);
        delay(400);
        digitalWrite(ledPin2, LOW);
        delay(400);
      }
      for (int i = 0; i < 20; i++){  
        digitalWrite(ledPin3, HIGH);
        delay(400);
        digitalWrite(ledPin3, LOW);
        delay(400);
      }
    }
    
    // if it's a capital 3 (ASCII 72), blink the lights on 200BPM:
    else if(incomingByte == '3'){
      for (int i = 0; i < 20; i++)
      {
           digitalWrite(ledPin1, HIGH);
          delay(100);
          digitalWrite(ledPin1, LOW);
          delay(100);
      }
      for (int i = 0; i < 20; i++){
          digitalWrite(ledPin2, HIGH);
          delay(100);
          digitalWrite(ledPin2, LOW);
          delay(100);
       }

      for (int i = 0; i < 20; i++){
          digitalWrite(ledPin3, HIGH);
          delay(100);
          digitalWrite(ledPin3, LOW);
          delay(100);
       }

    
    }
  }
  
}
