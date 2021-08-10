/*

Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

-----------------SOLUTION STEPS----------------

1. Return 0 if the given array is empty.
2. Declare two pointers, i and j, and set them to 0 and 1, respectively.
3. Use a while loop to check if the number with index j is equal to the number with index i.
4. If not, increment i by 1 and copy the value of the number with index j to the element at the index i and then increment j by 1.
5. If they are equal, increment j to skip the duplicate.
6. After the loop finishes, return the length of the unique numbers, which equals to i + 1.

-----------------COMPLEXITY----------------

The time complexity of the above algorithm is O(n) because we are iterating over the input array only once and n is the total number of elements in that array. The algorithm runs in constant space; O(1), because we are not using any extra space.

*/
const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else j++;
  }
  return i + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
