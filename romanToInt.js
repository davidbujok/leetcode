var romanToInt = function(s) {

  const romans = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
  }
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    const secondLetter = s[i + 1]
    const combinedLetter = letter + secondLetter
    if (romans[combinedLetter] !== undefined) {
      num += romans[combinedLetter]
      i++
    } else {
      num += romans[letter]
    }
  }
  console.log(num)
};

symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToIntEasy = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    console.log(value)
    return value
};

// same idea a slightly different syntax
var romanToIntEasyTwo = function(s) {
    const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let num = 0;
    
    for(let i = 0; i < s.length; i++) {
        const curr = map[s[i]], next = map[s[i+1]];
        if(curr < next) num -= curr;
        else num += curr;
    }
    return num;    
};

romanToInt("III")
romanToInt("LVIII")
romanToInt("MCMXCIV")
romanToIntEasy("III")
romanToIntEasy("LVIII")
romanToIntEasy("MCMXCIV")
