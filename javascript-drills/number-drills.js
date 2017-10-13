function computeArea(width, height) {
  return width*height;
}


//compute the area of a rectangle//
   
*/



// tests 

function testComputeArea() {
  let width = 3;
  let height = 4;
  let expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  }
  else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

testComputeArea();


function celsToFahr(celsTemp) {
  return 32+celsTemp*(9/5);
}

function fahrToCels(fahrTemp) {
  return (5/9)*(fahrTemp-32);
}

//convert Celsius to farenheit and vice versa//



// tests

function testConversion(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` is working');
    return true;
  }
  else {
    console.log('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function testConverters() {
  let cel2FahrInput = 100;
  let cel2FahrExpect = 212;
  let fahr2CelInput = 32;
  let fahr2CelExpect = 0;
  
  if (testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
     testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)) {
    console.log('SUCCESS: All tests passing');
  }
  else {
    console.log('FAILURE: Some tests are failing');
  }
}

testConverters();


function isDivisible(divisee, divisor) {
   if (divisee % divisor === 0) {
     return true;
   }
   else {
     return false;
   }
}


// */ divisee should be able to be divided by the divisor with no remainder//



// // tests

function testIsDivisible() {
  if (isDivisible(10, 2) && !isDivisible(11, 2)) {
    console.log('SUCCESS: `isDivisible` is working');
  }
  else {
    console.log('FAILURE: `isDivisible` is not working');
  }
}

testIsDivisible();
