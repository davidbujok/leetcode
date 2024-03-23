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

romanToInt("III")
romanToInt("LVIII")
romanToInt("MCMXCIV")
