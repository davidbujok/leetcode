var intToRoman = function(num) {

  const symbols = {
      1:    "I",
      5:    "V",
      10:   "X",
      50:   "L",
      100:  "C",
      500:  "D",
      1000: "M",
  }
  let startingPoint = "1"
  const numberLength = num.toString().split("").length
  if (numberLength > 1 ) {
    for (let i = 0; i < numberLength - 1; i++) {
      startingPoint = startingPoint.concat(["0"])
    }
  }
  let number = num;
  let romanNumber = "";
  let theLetter = 0;

  const calculateLetterSequence = function(number, startingPoint) {
    let letter = symbols[startingPoint] //100
    let loops = number //9
    if (number < 4) {
      while (loops > 0) {
        romanNumber = romanNumber.concat([letter])
        loops--;
      }
    } else if (number === 4) {
      let secondLetter = symbols[startingPoint * 5]
      romanNumber = romanNumber.concat([letter])
      romanNumber = romanNumber.concat([secondLetter])
    } else if (number === 5) {
      let secondLetter = symbols[startingPoint * 5]
      romanNumber = romanNumber.concat([secondLetter])
    } else if (number > 5 && number < 9) {
      let secondLetter = symbols[startingPoint * 5]
      romanNumber = romanNumber.concat([secondLetter])
      loops = number - 5
      while (loops > 0) {
        romanNumber = romanNumber.concat([letter])
        loops--;
      }
    } else if (number === 9) {
      let upStartingPoint = startingPoint.concat(["0"])
      let secondLetter = symbols[upStartingPoint]
      romanNumber = romanNumber.concat([letter])
      romanNumber = romanNumber.concat([secondLetter])
    }
  }

  while (number) {
    theLetter = Math.floor(number / startingPoint)
    calculateLetterSequence(theLetter, startingPoint)
    number = number % startingPoint
    startingPoint = startingPoint.slice(0, -1)
  }
  console.log(romanNumber)
  return romanNumber

};
const num1 = 3
const num2 = 58
const num3 = 1994

intToRoman(num1)
intToRoman(num2)
intToRoman(num3)
// @leet end
//
// 	│ Input: num = 3
// 	│ Output: "III"
// 	│ Explanation: 3 is represented as 3 ones.
//
// 󰛨 Example 2:
//
// 	│ Input: num = 58
// 	│ Output: "LVIII"
// 	│ Explanation: L = 50, V = 5, III = 3.
//
// 󰛨 Example 3:
//
// 	│ Input: num = 1994
// 	│ Output: "MCMXCIV"
// 	│ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
//
// There are six instances where subtraction is used:
//
// 	* I can be placed before V (5) and X (10) to make 4 and 9. 
// 	
// 	* X can be placed before L (50) and C (100) to make 40 and 90. 
// 	
// 	* C can be placed before D (500) and M (1000) to make 400 and 900.
//
