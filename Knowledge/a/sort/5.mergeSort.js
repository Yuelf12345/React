function merge(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  function handle(left, right) {
    let res = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        res.push(left[leftIndex]);
        leftIndex++;
      } else {
        res.push(right[rightIndex]);
        rightIndex++;
      }
    }
    // 将剩余元素添加到结果中
    return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  return handle(merge(left), merge(right));
}

console.log(merge([4, 1, 3, 1, 5, 2]));
