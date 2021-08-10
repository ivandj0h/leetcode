/*
Given an array, rotate the array to the right by k steps, where k is non-negative.


-----------------COMPLEXITY----------------
https://dev.to/cod3pineapple
*/

const nums = [-1, -100, 3, 99];
const k = 2;

var rotate = function (nums, k) {
  // Account for all possible k values
  k %= nums.length;
  // Rotate all the numbers
  reverse(nums, 0, nums.length - 1);
  // Rotate first k numbers
  reverse(nums, 0, k - 1);
  // Rotate number from k onward
  reverse(nums, k, nums.length - 1);

  // Function to rotate the array from params start to end
  function reverse(nums, start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
};

console.log(rotate(nums, k)); // [3, 99, -1, -100]
