function fib() {
  let curr = 1;
  let temp = 0;
  let prev = 0;
  const list = [];
  list.push(0, 1);
  for (let i = 2; i < 50; i++) {
    temp = curr;
    curr += prev;
    prev = temp;
    list.push(curr);
  }
  return list;
}
console.log(fib());

function numsToStrings(list) {
  return _.map(list, function (arr) { return arr.toString(); });
}
console.log(numsToStrings(fib()));

function numEvenNums(list) {
  let count = 0;
  for (let i = 0; i < 50; i++) {
    if (list[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(numEvenNums(fib()));
