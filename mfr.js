const isBlueRibbon = function(count, ribbonColor) {
  return (ribbonColor === "blue") ? count + 1: count;
}

const countOfBlueRibbons = function(ribbons) {
  return ribbons.reduce(isBlueRibbon, 0);
} 
//------------ ribbon completed

const starGazingLog = array => array.flat().reduce(uniqueOf, []);
//-------- star gazing completed
const countOf = (x, array) => {
  let count = 0;
  for(const element of array) {
    if(element === x) {
      count++;
    }
  }
  return count;
}

const isPresentOnlyOnce = function(value,index, array) { 
  return countOf(value, array) < 2;
}

const unrepeatedBirds = function(birds) {
  return birds.filter(isPresentOnlyOnce);
}
//---------bird watches sees completed

const studentsAttended = function(students) {
  return students.flat().reduce(uniqueOf, []);
}

const uniqueOf = function(uniqueElements, currentValue) {
  if(!uniqueElements.includes(currentValue)) {
    uniqueElements.push(currentValue);
  }
  return uniqueElements;
}
//--attendance completed
//map, filter, reduce, some, every, flat, flatMap
const add = (a,b) => a + b;
const sumOfArray = function(array) {
  return array.flat().reduce(add);
}
//---candies refilled completed

const musicRehearsal = function(array) {
  return array.some( element => element.includes("do"));
}

function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }
  
  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }
  
  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }
  
  return array1 === array2;
}

function printPassedCases(symbol, description) {
  console.log(symbol, " ", description);
}

function testOperation(description, array, expectedOutput, operation ) {
  const actualOutput = operation(array);
  const isPassed = areDeepEqual(actualOutput, expectedOutput);
  const symbol = isPassed ? "✅" : "❌";
  if (isPassed) {
    printPassedCases(symbol, description);
  } else {
    console.log(`${symbol}  ${description} 
      inputs :${array}
      actual :${actualOutput} 
      expected :${expectedOutput} `);
    }
  }
  
  function runAllTests() {
    testOperation("festival ribbon count",["red", "blue", "red", "green", "red", "blue"],2,countOfBlueRibbons );
    testOperation("stargazing log", [["Orion", "Leo"],["Taurus"],["Orion", "Gemini"]], ["Orion", "Leo", "Taurus", "Gemini"], starGazingLog);
    testOperation("bird watcher sees ", ["sparrow", "crow", "sparrow", "eagle", "crow"], ["eagle"], unrepeatedBirds);
    testOperation("student attendance",[["Asha", "Ravi", "Neel"],["Ravi"],["Asha", "Meera"]], ["Asha", "Ravi", "Neel", "Meera"], studentsAttended);
    testOperation("total candies refilled",[[5, 3],[2],[4, 1]],15,sumOfArray);
    testOperation("music rehearsal", [["mi", "fa", "so"],["do", "mi"],["fa"]], true, musicRehearsal);
  }
  
  function main() {
    runAllTests();
  }

  main();
  
  