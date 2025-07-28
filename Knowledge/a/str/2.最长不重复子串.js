function lengthOfLongestSubstring(str) {
  let len = 0;
  let left = 0;
  let map = new Map();
  let s = "";
  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }
    map.set(char, right);
    if (right - left + 1 > s.length) {
      s = str.slice(left, right  + 1);
    }
    len = Math.max(len, right - left + 1);
  }
  return { len, s };
}

console.log(lengthOfLongestSubstring("abcabcbb")); // abc 4
console.log(lengthOfLongestSubstring("abadefcbb")); // badefc 6
