var myAtoi = function(s) {

  let sSignature = true
  let flipZero = false
  let detectDot = false
  let end = false

  let m = s.trim()
  
  let numberArray = m.split("")

  if (!Number(numberArray[0]) && ( numberArray[0] !== "-" && numberArray[0] !== "+" && numberArray[0] != 0)) {
    return 0;
  }
  if ((numberArray[0] === "-" || numberArray[0] === "+") && !Number(numberArray[1]) ) {
    return 0;
  }

  let numbers = numberArray.map((number, index) => {
    if (number === "-") {
      sSignature = false
    }

    if (detectDot || end) {
      return null
    }

    if (!flipZero) {
      if (Number(number) && number !== 0) {
        flipZero = true
      }
    }
    if (flipZero && number == 0) {
      return number
    }

    if (Number(number) && flipZero) {
      return number
    } else {
      number === "." ? detectDot = true : null
      if (!Number(number) && number !== "-") {
        end = true
      }
    }

  })

  if (!sSignature) {
    numbers.unshift("-")
  }
  let finalNumber = Number(numbers.join(""));

  if (finalNumber > Math.pow(2, 31)) {
    return Math.pow(2, 31)
  } else if (finalNumber < Math.pow(-2, 31)) {
    return Math.pow(-2, 31) 
  } else {
    return Number(numbers.join(""))
  }
// 21474836460
};
// console.log(myAtoi("   -42"));
// console.log(myAtoi("420"));
// "21474836460"
//  2147483646
//  2147483647;



// console.log(myAtoi("words and 987"));
// console.log(myAtoi("3.12654"));
// console.log(myAtoi("-+12"));
console.log(myAtoi("      -42"));
// console.log(myAtoi("21474836460"));
// console.log(myAtoi("  0000000000012345678"));


const atoiLeet = function(str) {
  let result = 0
  let sign = 1
  let isNonWhiteSpaceMet = false
  let isNumberPhase = false

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if ( char === ' ' ) {
      if ( !isNonWhiteSpaceMet ) {
        continue
      } else {
      break
    }
  }

  isNonWhiteSpaceMet = true 

  if ( char >= '0' && char <= '9' ) {
    isNumberPhase = true
    result = result * 10 + (char - '0')
    continue
  }

  if ( char === '+' && !isNumberPhase ) {
    isNumberPhase = true
    continue
  }

  if ( char === '+' && !isNumberPhase ) {
    isNumberPhase = true
    continue
  }

  if ( char === '-' && !isNumberPhase ) {
    isNumberPhase = true
    sign *= -1
    continue
  }

  break
}

result *= sign

return Math.min(Math.max(-(2 ** 31), result), 2 ** 31 -1);
}

// console.log(atoiLeet("words and 987"));
// console.log(atoiLeet("3.12654"));
// console.log(atoiLeet("-+12"));
// console.log(atoiLeet("      -42"));
// console.log(atoiLeet("21474836460"));
// console.log(atoiLeet("  0000000000012345678"));
