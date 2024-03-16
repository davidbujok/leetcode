var convert = function(s, numRows) {

  let newString = "";
  const maxLength = 2 * numRows - 2;

  if (numRows === 1) {
    return s
  }

  for (let i = 0; i < numRows; i++) {

    let char = 0 + i;

    while (s[char] !== undefined) {

      newString += s[char]
      char += maxLength;

      if (i !== 0 && i !== numRows -1 && char - 2 * i < s.length) {
        let x = char - 2 * i;
        newString += s[x]
      }
    }
  }
  return newString;

};

// P > A > H > N > A 

let son = "PAYPALISHIRING";
let umRows = 3;
let san = "PAYPALISHIRING";
let numRows = 4;

// P A Y P A L I S H I  R  I  N  G
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13
console.log(convert(son, 3))
console.log(convert(son, 4))
// │ Output: "PAHNAPLSIIGYIR"
//│ Output: "PINALSIGYAHRPI"

