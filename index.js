const nums = [];

const getSum = (...arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  return nums.push(sum);
};

let newSum = getSum(5, 9, 8);

const printSum = () => {
  console.log(
    `The product of your sum of values doubled is ${
      nums[0] * 2
    }.\nPlease provide new values.`
  );
};

printSum();
