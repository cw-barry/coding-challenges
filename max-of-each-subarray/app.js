function maxOfSubArray(arr, k) {
  const result = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    const temp = arr.slice(i, i + k);
    temp.sort((a, b) => b - a);
    console.log(temp);
    result.push(temp[0]);
  }
  return result;
}
console.log(maxOfSubArray([10, 5, 2, 7, 8, 7], 3));
