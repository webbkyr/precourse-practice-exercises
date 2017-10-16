function createMyObject() {
  const myObj = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return `hello`;
    }
  }
  return myObj
}



/* use the function to create an object with the above keys and values
   
   
   Nothing to see here!
   
*/

(function testCreateMyObject() {
  const obj = createMyObject();
  if (typeof obj !== 'object') { 
    console.error('ERROR: `createMyObject` must return an object');
    return false
  }
  const expectedKeys = ['foo', 'answerToUniverse', 'olly olly', 'sayHello'];
  expectedKeys.forEach(function(key) {
    if (!(key in obj)) {
      console.error(`ERROR: Missing a key for ${key}`);
      return false;
    }
  });
  if (obj.foo !== 'bar') {
    console.error(`ERROR: Value for foo should be 'bar' but was ${obj.foo}`);
    return false;
  }
  if (obj.answerToUniverse !== 42) {
    console.error(
      `ERROR: Value for \`answerToUniverse\` should be 42 but was ${obj.answerToUniverse}`);
    return false;
  }
  if (obj['olly olly'] !== 'oxen free') {
    console.error(
      `ERROR: Value for \`olly olly\` should be 'oxen free' but was ${obj['olly olly']}`);
    return false;
  }
  if (!(typeof obj.sayHello === "function" && obj.sayHello() === 'hello')) {
    console.error("ERROR: Value for `sayHello` must be a function that returns the string 'hello'");
    return false;
  }
  console.log('SUCCESS: Your function works!');
})();


///////////

function updateObject(obj) {
  obj.foo = 'foo',
  obj.bar = 'bar',
  obj.bizz ='bizz',
  obj.bang = 'bang'
  return obj;
}



/* Update the values if an obj is passed in the function  
   
   
   Nothing to see here!
   
*/

(function testUpdateObject() {
  const oldObj = {
    cats: 'cats',
    dogs: 'dogs',
  };
  const newObj = updateObject(oldObj);
  if (typeof newObj !== 'object') { 
    console.error('ERROR: `createMyObject` must return an object');
    return false
  }
  ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
    if (!(key in newObj)) {
      console.error(`ERROR:  \`${key}\` not in object returned by \`updateObject\``);
      return false;
    }
  });
  ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
    if (newObj[key] !== key) {
      console.error(`ERROR: \`${key}\` should be "${key}" but was ${newObj[key]}`);
      return false;
    }
  });
  if (!(newObj.cats === 'cats' && newObj.dogs === 'dogs')) {
    console.error("ERROR: your function doesn't preserve existing key/value pairs");
    return false;
  }
  console.log('SUCCESS: `updateObject` works correctly!');
  
})();


////////

function personMaker() {
  const person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  };
  return person;
}



/* write a function for fullName that would return the full name of person
   
*/

(function testPersonMaker() {
  const person = personMaker();
  if (typeof person !== 'object') { 
    console.error('ERROR: `personMaker` must return an object');
    return false
  }
  if (typeof person.fullName !== 'function') {
    console.error('ERROR: `fullName` must be a method');
    return false
  }
  if (person.fullName() !== 'Paul Jones') {
    console.error(`ERROR: The value for \`fullName\` should be "Paul Jones" but was ${person.fullName()}`);
    return false;
  }
  person.firstName = 'Lisa';
  person.lastName = 'Simpson';
  if (person.fullName() !== 'Lisa Simpson') {
    console.error(
      `\`personMaker\` is not using self reference correctly. When firstName set to "Lisa" and lastName set to "Simpson", it should return "Lisa Simpson" but returned ${person.fullName()}`
    );
  }
  console.log('SUCCESS: `personMaker` works correctly!');
  
})();

//////////


function keyDeleter(obj) {
  delete obj.foo,
  delete obj.bar
  return obj;
}


var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang'
};


/* delete the keys then return the obj
   
*/

(function testKeyDeleter() {
  var obj = keyDeleter({
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang'
  });
  
  if (typeof obj !== 'object') {
    console.error('ERROR: `keyDeleter` must be return an object');
    return false
  }
  ['foo', 'bar'].forEach(function(key) {
    if (key in obj) {
      console.error('`keyDeleter` did not delete the key for ' + key);
      return false;
    }
  });
  ['bizz', 'bang'].forEach(function(key) {
    if (!(key in obj && obj[key] === key)) {
      console.error('`keyDeleter` is deleting keys other than `foo` and `bar`');
      return false;
    }
  });
  console.log('SUCCESS: `updateObject` works correctly!');
  
})();
