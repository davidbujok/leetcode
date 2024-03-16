function reverseInt(x) {

  let stringFromNumber = x.toString();

  let arrj = stringFromNumber.split("");
  arrj.reverse();
  if (arrj[arrj.length - 1] === "-") {
    let hold = arrj.pop()
    arrj.unshift(hold)
  }
  let ok = arrj.join("")
  let numok = Number(ok)
  let expoMin = Number(-2)
  let expoMax = Number(2)
  // -2^31, 2^31 - 1
  if (numok > expoMin ** 31 && numok < expoMax ** 31 - 1) {
    return numok
  } else {
    return 0
  }
}

// console.log(reverseInt(129))

function reverseIntMath(leftNumbers) {

  let reversedNumber = "";
  let negative = false;
  if (leftNumbers < 0) {
    leftNumbers = Math.abs(leftNumbers)
    negative = true
  }

  const formula = (leftNumbers) => {
    if (leftNumbers === 0) {
      return;
    };
    let lastNumber = leftNumbers % 10;
    reversedNumber += lastNumber;
    leftNumbers = Math.floor(leftNumbers / 10);
    formula(leftNumbers);
  }

  formula(leftNumbers)

  if (reversedNumber > Math.pow(2,31) || reversedNumber < Math.pow(-2,31) ) {
    return 0
  } else {
    return negative ? reversedNumber * - 1: Number(reversedNumber);
  }
}

console.log(reverseIntMath(129))
console.log(reverseIntMath(-523))
console.log(reverseIntMath(1534236469));
// reverseIntMath(-129)


