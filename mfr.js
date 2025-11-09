const isBlueRibbon = function(count, ribbonColor) {
  return (ribbonColor === "blue") ? count + 1: count;
}

const countOfBlueRibbons = function(ribbons) {
  return ribbons.reduce(isBlueRibbon, 0);
} 
//------------ ribbon completed

const starGazingLog = array => array.flat().reduce(uniqueOf, []);
//-------- star gazing completed

const uniqueOf = function(uniqueElements, currentValue) {
  if(!uniqueElements.includes(currentValue)) {
    uniqueElements.push(currentValue);
  }
  return uniqueElements;
}

const unrepeatedBirds = function(birds) {
  return birds.reduce(uniqueOf, []);
}
//---------bird watches sees completed

const studentsAttended = function(students) {
  return students.flat().reduce(uniqueOf, []);
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
//----music rehearsal completed
const belowNumber = x => x < 32;

const temperatureValidation = function(array) {
  return array.flat().every(belowNumber);
}
//------- temperature validation completed
const totalMilesRun = function(array) {
  return array.flat().reduce(add);
}
//-------total miles run completed
const uniqueColors = function (colors) {
  return colors.flat().reduce(uniqueOf,[]);
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
    testOperation("bird watcher sees ", ["sparrow", "crow", "sparrow", "eagle", "crow"], ["sparrow", "crow", "eagle"], unrepeatedBirds);
    testOperation("student attendance",[["Asha", "Ravi", "Neel"],["Ravi"],["Asha", "Meera"]], ["Asha", "Ravi", "Neel", "Meera"], studentsAttended);
    testOperation("total candies refilled",[[5, 3],[2],[4, 1]],15,sumOfArray);
    testOperation("music rehearsal", [["mi", "fa", "so"],["do", "mi"],["fa"]], true, musicRehearsal);
    testOperation("temperature validation", [[22, 23],[25, 24, 22],[29]], true, temperatureValidation);
    testOperation("finding the total miles run", [[2, 3, 2],[4],[1, 1]], 13, totalMilesRun);
    testOperation("find unique colors used", [["blue", "yellow"],["yellow", "green"],["blue"]],["blue", "yellow", "green"], uniqueColors);
  }
  
  function main() {
    runAllTests();
  }

  main();
  
  