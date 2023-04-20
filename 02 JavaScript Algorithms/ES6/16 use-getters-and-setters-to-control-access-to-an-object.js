class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9 * (this.fahrenheit - 32));
  }
  set temperature(updatedTemp) {
    this.fahrenheit = updatedTemp * 9 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/* Used the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, created a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track. In other words, you are abstracting implementation details from the user. */