function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function findIndices(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    const index = binarySearch(nums.slice(i + 1), complement);

    if (
      index < nums.slice(i + 1).length &&
      nums[index + i + 1] === complement
    ) {
      return [i, index + i + 1];
    }
  }

  return "No such numbers exist";
}

// Example usage:
const numsList = [2, 7, 11, 15, 18, 23, 28, 30, 35, 40, 45, 50, 55, 60];
const targetSum = 34;

const result = findIndices(numsList, targetSum);
console.log(result);
