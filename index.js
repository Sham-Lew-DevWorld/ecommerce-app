const nums = [];

const getSum = (...arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  return nums.push(sum);
};

let newSum = getSum(5, 9, 8);

const printSum = () => {
  console.log(
    `The sum of your values is ${nums[0]}.\nPlease provide values for your new calculation.`
  );
};

printSum();
