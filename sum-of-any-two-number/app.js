function checkSum(arr, k) {
  for (let i in arr) {
    // console.log(arr[i]);
    // console.log(typeof i);
    const temp = arr.slice(+i + 1);
    for (let j in temp) {
      if (arr[i] + temp[j] === k) return true;
    }
  }
  return false;
}

function checkSum2(arr, k) {
  for (let i in arr) {
    const temp = arr.slice();
    temp.splice(i, 1);
    if (temp.includes(k - arr[i])) return true;
  }
  return false;
}

console.log(checkSum2([15, 10, 3, 7], 30));
