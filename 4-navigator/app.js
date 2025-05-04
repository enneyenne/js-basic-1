//
const currentLatitude = 10.1;
const currentLongitude = 20.2;
const destinationLatitude = 30.3;
const destinationLongitude = 40.4;

//
const expression1 = destinationLatitude - currentLatitude;
const expression2 = destinationLongitude - currentLongitude;

//
const distance = Math.sqrt(Math.pow(expression1, 2) + Math.pow(expression2, 2));
console.log(distance.toFixed(6)); 