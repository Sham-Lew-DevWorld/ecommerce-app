const nums = [];

const getSum = (...arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  return nums.push(sum);
};

let newSum = getSum(5, 9, 8);

console.log(nums);
