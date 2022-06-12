//Below are all the personal practice I have done in codewars website


//--------------------------------
//-------------KYU 8--------------
//--------------------------------

//question link: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
function stringToArray(string){
    return string.split(' ');
}

//question link: https://www.codewars.com/kata/57eae20f5500ad98e50002c5
function noSpace(x){
    return x.replace(/ /g,'')
}


//question link: https://www.codewars.com/kata/596c6eb85b0f515834000049
var replaceDots = function(str) {
    let string_array = str.split(".");
    return string_array.join("-");
}


//question link: https://www.codewars.com/kata/5302d846be2a9189af0001e4
function sayHello(name, city, state) {
    var fullName = name.join(" ");
    return "Hello, " + fullName + "! Welcome to " + city + ", " + state + "!";
}




//--------------------------------
//-------------KYU 7--------------
//--------------------------------

//question link: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/javascript
function minSum(arr) {
    //strategy: largest digit multiply with lowest digit
      
    //sort the array first
    let sortedArr = arr.sort(function(a, b){return a - b});
  
    //split half
    let halfIndex = sortedArr.length / 2;
    let firstHalf = sortedArr.slice(0, halfIndex);
    let secondHalf = sortedArr.slice(-halfIndex);
    secondHalf.reverse()
    
    //compute
    let totalArr = [];
    for (let i = 0; i < firstHalf.length; i++) {
      totalArr.push(firstHalf[i] * secondHalf[i]);
    }
    let total = totalArr.reduce((a, b) => a + b, 0);
    return total
}

//question link: https://www.codewars.com/kata/592e830e043b99888600002d
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encode(str,  n)
{
  //first step encoding
  var chars = str.split("");
  var encode = [];
  for (let i = 0; i < chars.length; i++) {
      let index = alphabets.indexOf(chars[i]) + 1;
      encode.push(index);
  }
  console.log(encode);
  
  //second step encoding
  let myFunc = num => Number(num);
  var intArr = Array.from(String(n), myFunc);
  var intIndex = 0;
  
  for (let i = 0; i < encode.length; i++) {
      if (intIndex === intArr.length) {
          intIndex = 0;
      }
      encode[i] += intArr[intIndex];
      intIndex += 1;
  }
  console.log(encode);
  return encode;
}


//question link: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript
function validatePIN (pin) {
    //return true or false
    if (pin.length == 4 || pin.length == 6) {
      if (/^\d+$/.test(pin)) {
        return true
      }
    }
    return false
}

//question link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript
function findShort(s){
  let allString = s.split(' ');
  let shortest = allString[0].length;
  for (let i = 0; i < allString.length; i++) {
      if (allString[i].length < shortest) {
        shortest = allString[i].length;
      }
  }
  return shortest
}

//--------------------------------
//-------------KYU 6--------------
//--------------------------------

//question link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript
function isPangram(string){
  let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    alphabets = alphabets.filter(e => e !== string[i]);
  }
  if (alphabets.length !== 0) {
    return false
  } else {
    return true
  }
}


//--------------------------------
//-------------KYU 5--------------
//--------------------------------


//--------------------------------
//-------------KYU 4--------------
//--------------------------------