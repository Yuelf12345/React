function longCycleStr(str) {
  let maxLen = 0;
  let maxStr = "";
  const hander = (str, l, r) => {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l--;
      r++;
    }
    return {
      len: r - l - 1,
      s: str.slice(l + 1, r),
    };
  };
  for (let i = 0; i < str.length; i++) {
    const { len: len1, s: s1 } = hander(str, i, i);
    const { len: len2, s: s2 } = hander(str, i, i + 1);
    maxLen = Math.max(maxLen, Math.max(len1, len2));
    let s = s1.length > s2.length ? s1 : s2;
    maxStr = maxStr.length > s.length ? maxStr : s;
  }
  return { maxLen, maxStr };
}

console.log(longCycleStr("abcbcdcbd")); // bcdcb 5
console.log(longCycleStr("uvuvvuvw")); // vuvvuv 6
