function doTrafficLights() {
  const activeLight = getActiveLight();
  if (activeLight === 'red') {
    turnRed();
  }
  else if (activeLight === 'green') {
    turnGreen();
  }
  else {
    turnYellow();
  }

}

// this function randomly returns red, yellow, or green
// and is called by doTrafficLights.
// don't modify it!
function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}


function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(function() {
  turnOffLights();
  handleClicks();
});

////////////////


function makeList(item1, item2, item3) {
  return [item1, item2, item3];
}

console.log(makeList(1, 2, 3));

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testMakeList() {
  
  const items = ["prime rib", "fried goat cheese salad", "fish tacos"];
  const result = makeList(items[0], items[1], items[2]);
  
  if (
    result && result.length && items.length === result.length &&
    items.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `makeList` works!');
  } else {
    console.error('FAILURE: `makeList` is not working');
  } 
}

testMakeList();


//////

function addToList(list, item) {
  list.push(item);
   return list;
}


// add an item to an array and return to the array

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testAddToList() {
  
  const input1 = ["red", "blue", "green"];
  const input2 = "pink";
  const expected = ["red", "blue", "green", "pink"];
  const result = addToList(input1, input2);
  
  if (
    result && result.length && expected.length === result.length &&
    expected.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `addToList` works!');
  } else {
    console.error('FAILURE: `addToList` is not working');
  } 
}

testAddToList();