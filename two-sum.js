let twoSum = function(nums, target) {
  
  // Hold each value from the nums array along with its index inside the Object results
  let results = {}
  results.

  // Iterate over nums array and subtract each value from the array from target value
  // The result will be the number you're looking for.
  for (let number = 0; number < nums.length; number++) {
    let searchedNumber = target - nums[number]
    // Pass the number you're looking for to the results Object, if it exist the
    // variable 'searchedNumberIndex' should be assigned the index of that value
    let searchedNumberIndex = results[searchedNumber]

    // Now we can check if the type of the searchedNumberIndex is 'number', if in the previous
    // step The value didn't exist in the Object results. The type of searched number 
    // index will be undefined.
    if (typeof searchedNumberIndex === 'number' && searchedNumberIndex !== number ) {
      console.log(number, searchedNumberIndex)
      return [number, searchedNumberIndex]
    }
  }
};
continue

let some_numbers = [3, 2, 4, 5, 9, 3]
let some_target = 11

twoSum(some_numbers, some_target)
