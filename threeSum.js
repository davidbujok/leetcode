var threeSum = function(nums) {
	
	nums.sort((a,b) => a-b)
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		let low = i + 1
		let high = nums.length - 1
		let sum = 0

		while (low < high) {
			sum = nums[i] + nums[low] + nums[high];

			if (sum === 0) {
				result.push([nums[i], nums[low], nums[high]])
				while(nums[low+1] === nums[low]) low++;
				while(nums[high-1] === nums[high]) high--;
				low++;
				high--;
			} else if (sum < 0) low++;
			else high--;
		}
		while(nums[i+1] === nums[i]) i++;
	}
    return result
}

console.log(threeSum([-1,0,1,2,-1,-4]))
