var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;
//
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {

    if (s.slice(i).length < maxSize) {
      return maxSize
    };

    while (set.has(s[i])) {
      set.delete(s[left])
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1)
  }
  return maxSize;
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
