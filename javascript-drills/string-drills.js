function wisePerson(wiseType, whatToSay) {
  return `A wise ${wiseType} once said: "${whatToSay}".`;
}

///this function would return "A wise goat once said: "hello world."" implemented using template literals instead of string concatenation//




// tests written by thinkful staff

function testWisePerson() {
  const wiseType = 'goat';
  const whatToSay = 'hello world';
  const expected = 'A wise ' + wiseType + ' once said: "' +
      whatToSay + '".';
  const actual = wisePerson(wiseType, whatToSay);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  }
  else {
    console.log('FAILURE: `wisePerson` is not working');
  } 
}

testWisePerson();


////

function shouter(whatToShout) {
  return `${whatToShout}!!!`.toUpperCase();
}


///when a string is passed to the shouter() function, it should return in all caps with three exclamation points; used here is a template 
//literal with a toUpperCase() method appended.//


// tests

function testShouter() {
  const whatToShout = 'fee figh foe fum';
  const expected = 'FEE FIGH FOE FUM!!!';
  if (shouter(whatToShout) === expected) {
    console.log('SUCCESS: `shouter` is working');
  }
  else {
    console.log('FAILURE: `shouter` is not working');
  }
}

testShouter();


function textNormalizer(text) {
   return text.toLowerCase().trim();

}


//method chaining; function takes the string of text, makes any capped text lower case and trims the whitespace at both ends of the string//


// tests

function testTextNormalizer() {
  const text = "   let's GO SURFING NOW everyone is learning how   ";
  const expected = "let's go surfing now everyone is learning how";
  if (textNormalizer(text) === expected) {
    console.log('SUCCESS: `textNormalizer` is working');
  }
  else {
    console.log('FAILURE: `textNormalizer` is not working');
  }
}

testTextNormalizer();

