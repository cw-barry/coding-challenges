function longestString(s, k) {
  let longest = '';
  for (let i = 0; i < s.length - k + 1; i++) {
    for (let j = s.length; j > i + k - 1; j--) {
      const sub = s.slice(i, j);
      const distinct = new Set(sub);
      // console.log(i, j, sub, distinct);
      if (distinct.size === k)
        if (sub.length > longest.length) {
          longest = sub;
        }
    }
  }
  return longest.length;
}

console.log(longestString('abcba', 2));
