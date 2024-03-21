var lengthOfLongestSubstring = function(s) {

  let str = s.split("");
  let number = 0;
  let currentLongest = new Set();
  let setChars = new Set();
  let slidingNumber;

  for (let i = 0; i < s.length; i++) {


    modifiedStr = str.slice(i);

    while (number < modifiedStr.length) {
    console.log(modifiedStr)

      if (s.length === 1) {
        return 1;
      }

      if ((modifiedStr[number] !== modifiedStr[number + 1] || setChars.size === 0) && !setChars.has(modifiedStr[number])) {
        setChars.add(modifiedStr[number])
        slidingNumber = modifiedStr[number]
      } else if (setChars.size > currentLongest.size) {
        setChars.add(modifiedStr[number])
        currentLongest = setChars
        setChars = new Set()
        if (modifiedStr[number] !== modifiedStr[number + 1]) {
          setChars.add(modifiedStr[number])
          setChars.add(slidingNumber)
        }
        // if (!setChars.has(modifiedStr[number - 1]) && modifiedStr[number + 1] !== modifiedStr[number - 1]) {;;
        //   setChars.add(modifiedStr[number - 1])
        // }
      }
      number++
    }
    number = 0

  }

  currentLongest = setChars.size > currentLongest.size ? setChars : currentLongest
  console.log(currentLongest)
  return currentLongest.size

};


// const str = "abcabcbb";
// const bstr = "bbbbbbb";
const pstr = "pwwkew";
const cstr = "ckilbkd";
const astr = "aab";
const cdstr = "cdd";
const dfstr = "dvdf";
const afstr = "anviaj";

// lengthOfLongestSubstring()
// lengthOfLongestSubstring(bstr)
lengthOfLongestSubstring(pstr)
// lengthOfLongestSubstring(cstr)
lengthOfLongestSubstring(astr)
lengthOfLongestSubstring(cdstr)
lengthOfLongestSubstring(dfstr)
lengthOfLongestSubstring(afstr)
